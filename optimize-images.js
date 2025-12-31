import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');
const QUALITY = 75; // JPEG quality (1-100)
const MAX_WIDTH = 1280; // Max width in pixels

async function getImageFolders() {
    const items = fs.readdirSync(ASSETS_DIR);
    return items.filter(item => {
        const itemPath = path.join(ASSETS_DIR, item);
        return fs.statSync(itemPath).isDirectory() && item.startsWith('id_');
    });
}

async function optimizeImage(inputPath, outputPath) {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
        .resize(MAX_WIDTH, null, {
            withoutEnlargement: true,
            fit: 'inside'
        })
        .jpeg({
            quality: QUALITY,
            mozjpeg: true
        })
        .toFile(outputPath + '.tmp');

    // Replace original with optimized
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath + '.tmp', inputPath);

    const newStats = fs.statSync(inputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    return {
        original: originalSize,
        optimized: newSize,
        savings: parseFloat(savings)
    };
}

async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('━'.repeat(50));
    console.log(`Quality: ${QUALITY}%`);
    console.log(`Max Width: ${MAX_WIDTH}px`);
    console.log('━'.repeat(50));

    const folders = await getImageFolders();
    console.log(`\nFound ${folders.length} episode folders\n`);

    let totalOriginal = 0;
    let totalOptimized = 0;
    let totalFiles = 0;

    for (const folder of folders) {
        const folderPath = path.join(ASSETS_DIR, folder);
        const files = fs.readdirSync(folderPath).filter(f =>
            f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
        );

        console.log(`📁 ${folder} (${files.length} images)`);

        for (const file of files) {
            const filePath = path.join(folderPath, file);

            try {
                const result = await optimizeImage(filePath, filePath);
                totalOriginal += result.original;
                totalOptimized += result.optimized;
                totalFiles++;

                const originalKB = (result.original / 1024).toFixed(0);
                const newKB = (result.optimized / 1024).toFixed(0);
                console.log(`   ✓ ${file}: ${originalKB}KB → ${newKB}KB (-${result.savings}%)`);
            } catch (err) {
                console.log(`   ✗ ${file}: Error - ${err.message}`);
            }
        }
        console.log('');
    }

    console.log('━'.repeat(50));
    console.log('📊 Summary');
    console.log('━'.repeat(50));
    console.log(`Total files: ${totalFiles}`);
    console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized size: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Total savings: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
    console.log('━'.repeat(50));
    console.log('✅ Done!');
}

main().catch(console.error);
