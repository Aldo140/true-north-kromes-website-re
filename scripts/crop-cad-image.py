import os
import subprocess
from PIL import Image

# Find cad-design.png using find
result = subprocess.run(["find", "/", "-name", "cad-design.png", "-type", "f"], capture_output=True, text=True, timeout=10)
print(f"find results: {result.stdout.strip()}")
paths = [p.strip() for p in result.stdout.strip().split('\n') if p.strip()]
path = paths[0] if paths else None
if not path:
    raise FileNotFoundError("Could not find cad-design.png anywhere")
print(f"Using: {path}")

img = Image.open(path)
w, h = img.size
print(f"Original size: {w}x{h}")

# The actual CAD content is roughly in the middle vertical band
# Crop out the black bars top/bottom and the phone UI at the bottom
# Content starts around 37% from top and ends around 60% from top
top = int(h * 0.345)
bottom = int(h * 0.605)
left = 0
right = w

cropped = img.crop((left, top, right, bottom))
print(f"Cropped size: {cropped.size[0]}x{cropped.size[1]}")

cropped.save(path)
print("Saved cropped image")
