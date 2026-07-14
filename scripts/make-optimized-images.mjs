// Generates web-sized copies of homepage images into public/images/opt/.
// Originals are never modified. Re-run after adding new homepage imagery:
//   node scripts/make-optimized-images.mjs
import sharp from "sharp"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const outDir = path.join(root, "public/images/opt")
fs.mkdirSync(outDir, { recursive: true })

// width: rail thumbs render ~112px (2x for retina + slack = 480);
// section images render up to ~800px column width (2x ≈ 1600).
const jobs = [
  // hero process rail thumbs
  { src: "cad-design.png", width: 480 },
  { src: "gallery-build-plate-printer.jpg", width: 480 },
  { src: "gallery-dlyte-polishing-action.jpg", width: 480 },
  { src: "framework-polished.jpg", width: 480 },
  // hero video poster
  { src: "framework-hero.jpg", width: 1600 },
  // about section
  { src: "gallery-lab-wide.jpg", width: 1600 },
  // gallery preview specimens
  { src: "framework-tweezers.jpg", width: 1600 },
  { src: "chrome-crowns.jpg", width: 1200 },
  { src: "framework-upper-side.jpg", width: 1200 },
  { src: "framework-clasps.jpg", width: 1200 },
  { src: "framework-full.jpg", width: 1200 },
]

for (const { src, width } of jobs) {
  const input = path.join(root, "public/images", src)
  const output = path.join(outDir, src.replace(/\.(png|jpeg)$/i, ".jpg"))
  const { size } = fs.statSync(input)
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 72, mozjpeg: true })
    .toFile(output)
  const out = fs.statSync(output).size
  console.log(
    `${src}: ${(size / 1048576).toFixed(2)}MB -> ${(out / 1024).toFixed(0)}KB @${width}w`,
  )
}
