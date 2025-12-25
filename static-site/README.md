Static export of Aqua Business Hub

How to preview locally:

1. Serve with Vite preview (requires Node & project deps):

```bash
npm ci
npx vite preview --port 5000
# open http://localhost:5000
```

2. Or use a static server:

```bash
npx serve static-site
# or
cd static-site
python -m http.server 8000
# open http://localhost:8000
```

This folder contains production-ready HTML/CSS/JS in `index.html` and `assets/`.
