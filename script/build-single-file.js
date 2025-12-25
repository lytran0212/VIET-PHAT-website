#!/usr/bin/env node
import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const CANDIDATES = [
  path.join(DIST_DIR, 'index.html'),
  path.join(DIST_DIR, 'public', 'index.html'),
];
let ENTRY_HTML = null;
for (const c of CANDIDATES) {
  if (fsSync.existsSync(c)) {
    ENTRY_HTML = c;
    break;
  }
}
const OUT_FILE = path.join(DIST_DIR, 'single-file.html');
if (!ENTRY_HTML) {
  console.error('Could not find dist/index.html or dist/public/index.html. Run the project build first.');
  process.exit(1);
}
const BASE_DIR = path.dirname(ENTRY_HTML);

const MIME = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.map': 'application/octet-stream'
};

async function fileToDataURI(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const data = await fs.readFile(filePath);
  const b64 = data.toString('base64');
  return `data:${mime};base64,${b64}`;
}

function resolveAsset(p, baseDir) {
  if (!p) return null;
  // ignore absolute URLs
  if (/^https?:\/\//.test(p) || p.startsWith('data:')) return null;
  // strip leading slash
  const rel = p.replace(/^\//, '');
  return path.resolve(baseDir, rel);
}

async function inlineCSS(css, baseDir) {
  // replace url(...) occurrences
  return css.replace(/url\(([^)]+)\)/g, (m, g1) => {
    let raw = g1.trim().replace(/^['"]|['"]$/g, '');
    if (/^data:/.test(raw)) return `url(${raw})`;
    const assetPath = resolveAsset(raw, baseDir);
    if (!assetPath) return `url(${raw})`;
    try {
      const uri = fs.readFile(assetPath).then(buf => {
        const ext = path.extname(assetPath).toLowerCase();
        const mime = MIME[ext] || 'application/octet-stream';
        return `data:${mime};base64,${buf.toString('base64')}`;
      });
      // synchronous replacement isn't possible here; we'll mark placeholder
      return `url(__INLINE_URL_PLACEHOLDER__${assetPath}__END__)`;
    } catch (e) {
      return `url(${raw})`;
    }
  });
}

async function replaceCSSPlaceholders(html, baseDir) {
  const regex = /__INLINE_URL_PLACEHOLDER__(.*?)__END__/g;
  let match;
  const replacements = {};
  while ((match = regex.exec(html))) {
    const p = match[1];
    if (!(p in replacements)) {
      try {
        const data = await fileToDataURI(p);
        replacements[p] = data;
      } catch (e) {
        replacements[p] = '';
      }
    }
  }
  return html.replace(regex, (_, p) => replacements[p] || '');
}

async function inlineAll() {
  try {
    const stat = await fs.stat(ENTRY_HTML);
  } catch (e) {
    console.error('Could not find dist/index.html. Run the project build first.');
    process.exit(1);
  }

  let html = await fs.readFile(ENTRY_HTML, 'utf-8');

  // When opening the single-file via file:// the browser pathname is the
  // full local file path which many client routers interpret as a route
  // and immediately render a 404. Inject a small synchronous snippet
  // into the <head> (before scripts) to normalize the location to '/'
  // so the client router sees the root path on startup.
  html = html.replace(/<head([^>]*)>/i, `<head$1>\n<script>if(location.protocol==='file:'){try{history.replaceState({},'', '/');}catch(e){} }</script>`);

  // Inline CSS linked via <link rel="stylesheet" href="...">
  html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, (tag) => {
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) return tag;
    const href = hrefMatch[1];
    if (/^https?:\/\//.test(href) || href.startsWith('data:')) return tag;
    const asset = resolveAsset(href, BASE_DIR);
    if (!asset) return tag;
    try {
      const css = fsSync.readFileSync(asset, 'utf-8');
      return `<!-- inlined ${href} -->\n<style>${css || ''}</style>`;
    } catch (e) {
      return tag;
    }
  });

  // Inline script tags and preserve other attributes (type, crossorigin, etc.)
  html = html.replace(/<script([^>]*)src=["']([^"']+)["']([^>]*)><\/script>/gi, (m, pre, src, post) => {
    if (/^https?:\/\//.test(src) || src.startsWith('data:')) return m;
    const asset = resolveAsset(src, BASE_DIR);
    if (!asset) return m;
    try {
      const js = fsSync.readFileSync(asset, 'utf-8');
      // rebuild attrs without the src attribute
      const attrs = (pre + ' ' + post).replace(/\s+src=["'][^"']+["']/i, '').trim();
      return `<!-- inlined ${src} -->\n<script ${attrs}>${js || ''}</script>`;
    } catch (e) {
      return m;
    }
  });

  // Inline img src and source src
  html = html.replace(/<(img|source)[^>]+src=["']([^"']+)["'][^>]*>/gi, (m, tag, src) => {
    if (/^https?:\/\//.test(src) || src.startsWith('data:')) return m;
    const asset = resolveAsset(src, BASE_DIR);
    if (!asset) return m;
    try {
      const buf = fsSync.readFileSync(asset);
      const uri = `data:${MIME[path.extname(asset)]||'application/octet-stream'};base64,${buf.toString('base64')}`;
      return m.replace(src, uri || src);
    } catch (e) {
      return m;
    }
  });

  // Inline favicons and other link hrefs (rel=icon, manifest)
  html = html.replace(/<link[^>]+rel=["'](?:icon|shortcut icon|apple-touch-icon|manifest)["'][^>]*>/gi, (tag) => {
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (!hrefMatch) return tag;
    const href = hrefMatch[1];
    if (/^https?:\/\//.test(href) || href.startsWith('data:')) return tag;
    const asset = resolveAsset(href, BASE_DIR);
    if (!asset) return tag;
    try {
      const buf = fsSync.readFileSync(asset);
      const data = `data:${MIME[path.extname(asset)]||'application/octet-stream'};base64,${buf.toString('base64')}`;
      return tag.replace(href, data || href);
    } catch (e) {
      return tag;
    }
  });

  // Replace any leftover CSS url placeholders asynchronously
  html = await replaceCSSPlaceholders(html, BASE_DIR);

  // Replace asset path strings that appear inside inlined JS/CSS/html
  // e.g. "/assets/logo.png" or '/attached_assets/...' -> data:... URI
  html = html.replace(/(["'])(\/((?:assets|attached_assets)\/[^"']+))\1/g, (m, q, p) => {
    try {
      const assetPath = resolveAsset(p, BASE_DIR);
      if (!assetPath || !fsSync.existsSync(assetPath)) return m;
      const buf = fsSync.readFileSync(assetPath);
      const ext = path.extname(assetPath).toLowerCase();
      const mime = MIME[ext] || 'application/octet-stream';
      const data = `data:${mime};base64,${buf.toString('base64')}`;
      return q + data + q;
    } catch (e) {
      return m;
    }
  });

  await fs.writeFile(OUT_FILE, html, 'utf-8');
  console.log('Wrote single-file HTML to', OUT_FILE);
}

inlineAll().catch((e) => {
  console.error(e);
  process.exit(1);
});
