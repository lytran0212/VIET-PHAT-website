from PIL import Image, ImageDraw, ImageFont
import os
import shutil

BASE_DIR = os.path.join(os.path.dirname(__file__), '..', 'attached_assets', 'generated_images', 'ảnh cá')
BACKUP_DIR = os.path.join(os.path.dirname(__file__), '..', 'attached_assets', 'generated_images', 'ảnh cũ')

os.makedirs(BACKUP_DIR, exist_ok=True)

font_path = r"C:\Windows\Fonts\arial.ttf"
if not os.path.exists(font_path):
    font_path = None

for fname in os.listdir(BASE_DIR):
    if not fname.lower().endswith('.png'):
        continue
    src = os.path.join(BASE_DIR, fname)
    # backup
    shutil.copy2(src, os.path.join(BACKUP_DIR, fname))

    # parse number and name from filename like '01- BLACK TILAPIA.png' or '05- POMPANO.png'
    base = os.path.splitext(fname)[0]
    parts = base.split('-', 1)
    if len(parts) == 2:
        num = parts[0].strip()
        name = parts[1].strip()
    else:
        num = ''
        name = base

    im = Image.open(src).convert('RGBA')
    w, h = im.size

    draw = ImageDraw.Draw(im)

    # choose fonts
    try:
        num_font = ImageFont.truetype(font_path, size=max(24, int(h*0.06))) if font_path else ImageFont.load_default()
        name_font = ImageFont.truetype(font_path, size=max(18, int(h*0.045))) if font_path else ImageFont.load_default()
    except Exception:
        num_font = ImageFont.load_default()
        name_font = ImageFont.load_default()

    # measure texts
    num_text = num + '.' if num else ''
    name_text = name
    try:
        bbox_num = draw.textbbox((0, 0), num_text, font=num_font)
        num_w, num_h = bbox_num[2] - bbox_num[0], bbox_num[3] - bbox_num[1]
        bbox_name = draw.textbbox((0, 0), name_text, font=name_font)
        name_w, name_h = bbox_name[2] - bbox_name[0], bbox_name[3] - bbox_name[1]
    except Exception:
        # fallback for older Pillow
        num_w, num_h = draw.textsize(num_text, font=num_font)
        name_w, name_h = draw.textsize(name_text, font=name_font)

    padding = 8
    spacing = 6
    rect_w = padding + num_w + spacing + name_w + padding
    rect_h = padding + max(num_h, name_h) + padding
    if rect_w > w:
        rect_w = w
    if rect_h > int(h*0.2):
        rect_h = int(h*0.2)

    # draw semi-transparent rectangle
    rect = Image.new('RGBA', (rect_w, rect_h), (0,0,0,150))
    im.paste(rect, (0,0), rect)

    # draw texts in white
    x = padding
    y = padding
    if num_text:
        draw.text((x, y), num_text, font=num_font, fill=(255,255,255,255))
        x += num_w + spacing
    draw.text((x, y), name_text, font=name_font, fill=(255,255,255,255))

    # save (overwrite)
    im.convert('RGB').save(src, format='PNG')
    print(f'Processed: {fname}')

print('Done processing all PNGs.')
