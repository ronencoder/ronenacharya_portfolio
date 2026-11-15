"""Run once on your computer: python tools/download_images.py
Downloads every image used on the site from Site123 into assets/images/ so the site no longer depends on Site123."""
import json, os, urllib.request
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
for local, url in json.load(open(os.path.join(root, "tools", "image-manifest.json"))).items():
    dest = os.path.join(root, local)
    if os.path.exists(dest): continue
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        urllib.request.urlretrieve(url, dest); print("ok  ", local)
    except Exception as e:
        print("FAIL", local, e)
