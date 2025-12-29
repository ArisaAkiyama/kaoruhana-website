# Panduan Membuat Website Portofolio Interaktif dengan Vue.js & GSAP

Dokumen ini berisi langkah-langkah sistematis untuk mengembangkan project animasi dasar ini menjadi website portofolio profesional.

## 1. Perencanaan Struktur (Sitemap)
Sebelum koding, tentukan halaman yang dibutuhkan:
*   **Home**: Hero section dengan animasi karakter utama (sudah ada dasarnya).
*   **About**: Deskripsi diri, skill, dan pengalaman.
*   **Projects**: Galeri showcase karya/projek sebelumnya.
*   **Contact**: Formulir atau link sosial media.

## 2. Instalasi Router (Navigasi)
Website portofolio butuh navigasi antar halaman tanpa reload.
*   Install Vue Router: `npm install vue-router`
*   Buat file `src/router/index.js` untuk mengatur path URL (misal: `/`, `/about`, `/projects`).

## 3. Komponenisasi (Pecah UI)
Buat komponen reusable agar kode rapi:
*   `Navbar.vue`: Menu navigasi atas.
*   `Footer.vue`: Copyright dan link sosmed bawah.
*   `ProjectCard.vue`: Template tampilan satu item projek (gambar + judul + deskripsi).

## 4. Pengembangan Halaman (Views)
Buat folder `src/views` untuk halaman utama:
*   `HomeView.vue`: Gabungkan `CharacterScene.vue` di sini sebagai pembuka.
*   `AboutView.vue`: Gunakan grid layout untuk foto profil dan teks.
*   `ProjectsView.vue`: Looping data projek menggunakan komponen `ProjectCard`.

## 5. Menambahkan Animasi Lanjutan (GSAP ScrollTrigger)
Agar website lebih hidup saat di-scroll:
*   Install Plugin: `npm install gsap` (sudah terinstall)
*   Gunakan **ScrollTrigger** (fitur GSAP) untuk memicu animasi saat elemen masuk ke layar.
    *   *Contoh*: Kartu projek muncul satu per satu (stagger) saat user scroll ke bawah.
    *   *Contoh*: Teks "About Me" meluncur dari kiri saat terlihat.

## 6. Data Management
Simpan data projek dalam file terpisah, misal `src/data/projects.json`, agar mudah diedit tanpa mengacak-acak kode HTML/Vue.

## 7. Styling & Responsiveness
Pastikan tampilan bagus di HP dan Laptop.
*   Gunakan CSS Flexbox atau Grid.
*   Atau install **Tailwind CSS** jika ingin styling lebih cepat: `npm install -D tailwindcss postcss autoprefixer`.

## 8. Deployment (Online-kan)
Setelah selesai, upload ke internet:
*   Build project: `npm run build`
*   Upload folder `dist` ke hosting (Vercel/Netlify/GitHub Pages).

---
**Tips Tambahan:**
*   Gunakan aset karakter Anda (`Kaoruko`) sebagai "pemandu" di setiap halaman. Misalnya, di halaman Contact, dia bisa memegang telepon atau surat.
*   Tambahkan *page transition* halus saat pindah antar menu.
