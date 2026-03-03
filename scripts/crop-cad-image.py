from PIL import Image

img = Image.open("/vercel/share/v0-project/public/images/cad-design.png")
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

cropped.save("/vercel/share/v0-project/public/images/cad-design.png")
print("Saved cropped image")
