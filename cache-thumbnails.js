import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Video IDs from StorySection.vue
const videoIds = [
    { id: 1, videoId: 'KEIlHZqYfSY' },
    { id: 2, videoId: '5KTlvN61vb4' },
    { id: 3, videoId: 'Cxeq2IeiZWQ' },
    { id: 4, videoId: 'J1CPKlnILL4' },
    { id: 5, videoId: 'c_yNgIae6i4' },
    { id: 6, videoId: 'orxUSsDnaGQ' },
    { id: 7, videoId: '2FNYqlwNRSg' },
    { id: 8, videoId: 'bWteiUJZcd4' },
    { id: 9, videoId: 'V82eVUbm_sM' },
    { id: 10, videoId: 'sejTGHHsYyY' },
    { id: 11, videoId: 'lh7R9Z2xSFY' },
    { id: 12, videoId: '05Y_hhVntbE' },
    { id: 13, videoId: 'i5_w0CiLjnI' }
];

const THUMBNAILS_DIR = path.join(__dirname, 'src', 'assets', 'thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
}

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            // Handle redirect
            if (response.statusCode === 302 || response.statusCode === 301) {
                https.get(response.headers.location, (redirectResponse) => {
                    redirectResponse.pipe(file);
                    file.on('finish', () => {
                        file.close();
                        resolve();
                    });
                }).on('error', reject);
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { }); // Delete the file on error
            reject(err);
        });
    });
}

async function main() {
    console.log('🎬 YouTube Thumbnail Cache Script');
    console.log('━'.repeat(50));
    console.log(`Saving to: ${THUMBNAILS_DIR}`);
    console.log('━'.repeat(50));
    console.log('');

    for (const video of videoIds) {
        const filename = `ep_${video.id}_${video.videoId}.jpg`;
        const filepath = path.join(THUMBNAILS_DIR, filename);

        // Try maxresdefault first, fallback to hqdefault
        const urls = [
            `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
            `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
        ];

        let success = false;
        for (const url of urls) {
            try {
                await downloadImage(url, filepath);
                const stats = fs.statSync(filepath);

                // Check if the file is a valid image (YouTube returns a small placeholder for invalid thumbnails)
                if (stats.size > 5000) {
                    console.log(`✓ Episode ${video.id}: ${filename} (${(stats.size / 1024).toFixed(0)}KB)`);
                    success = true;
                    break;
                }
            } catch (err) {
                // Try next URL
            }
        }

        if (!success) {
            console.log(`✗ Episode ${video.id}: Failed to download`);
        }
    }

    console.log('');
    console.log('━'.repeat(50));
    console.log('✅ Done! Thumbnails saved to src/assets/thumbnails/');
    console.log('');
    console.log('📝 Next step: Update StorySection.vue to use local thumbnails');
    console.log('━'.repeat(50));
}

main().catch(console.error);
