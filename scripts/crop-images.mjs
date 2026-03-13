import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const images = [
  'public/images/recent-work-1.jpg',
  'public/images/recent-work-2.jpg',
  'public/images/recent-work-3.jpg',
  'public/images/recent-work-4.jpg',
];

async function cropImages() {
  for (const imagePath of images) {
    const fullPath = path.join(projectRoot, imagePath);
    console.log(`[v0] Processing: ${imagePath}`);
    
    try {
      // Get image metadata
      const metadata = await sharp(fullPath).metadata();
      const { width, height } = metadata;
      
      // Determine crop dimensions - crop to a more square aspect ratio and remove borders
      const squareSize = Math.min(width, height);
      const cropSize = Math.round(squareSize * 0.95); // Slightly inset to remove edges
      
      const left = Math.round((width - cropSize) / 2);
      const top = Math.round((height - cropSize) / 2);
      
      // Crop and save
      await sharp(fullPath)
        .extract({
          left: Math.max(0, left),
          top: Math.max(0, top),
          width: Math.min(cropSize, width - Math.max(0, left)),
          height: Math.min(cropSize, height - Math.max(0, top)),
        })
        .toFile(fullPath);
      
      console.log(`[v0] Cropped: ${imagePath} - Size: ${cropSize}x${cropSize}`);
    } catch (error) {
      console.error(`[v0] Error processing ${imagePath}:`, error.message);
    }
  }
  
  console.log('[v0] Image cropping complete!');
}

cropImages();
