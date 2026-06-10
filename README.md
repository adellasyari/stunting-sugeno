# Stunting Sugeno

Stunting Sugeno adalah aplikasi web berbasis Laravel + Inertia + React untuk membantu deteksi dini risiko stunting pada dua kelompok sasaran:

- Balita / anak usia 0-59 bulan
- Ibu hamil

Aplikasi ini menggunakan logika metode Sugeno dalam bentuk perhitungan skor risiko berbasis aturan. Hasil analisis ditampilkan dalam kategori **Aman**, **Waspada**, atau **Bahaya**, sehingga mudah dipakai sebagai bahan edukasi dan laporan.

## Gambaran Proyek

Proyek ini dibuat sebagai sistem pendukung keputusan sederhana untuk membantu proses skrining awal. Pengguna mengisi data kesehatan dasar melalui form, lalu sistem menghitung skor risiko dan menampilkan hasil analisis beserta rekomendasi singkat.

Teknologi utama yang dipakai:

- Laravel 12 sebagai backend
- Inertia.js sebagai penghubung backend dan frontend
- React untuk antarmuka pengguna
- Vite dan Tailwind CSS untuk build dan styling

## Alur Metode Sugeno

Logika penilaian pada aplikasi ini bekerja secara ringkas seperti berikut:

1. Pengguna memasukkan data sesuai kategori pemeriksaan.
2. Sistem memvalidasi input, lalu menghitung skor berdasarkan aturan yang sudah ditentukan.
3. Setiap parameter memberi kontribusi terhadap skor risiko.
4. Skor akhir dibatasi pada rentang 0 sampai 100.
5. Skor tersebut dipetakan ke status akhir: 0-39 = Aman, 40-69 = Waspada, 70-100 = Bahaya.

### Aturan untuk Balita

Input yang dianalisis:

- Jenis kelamin
- Usia anak
- Tinggi / panjang badan
- Berat badan
- Kondisi lingkungan dan sanitasi

Skor dibentuk dari rasio berat terhadap tinggi, lalu ditambah faktor kondisi lingkungan. Semakin rendah rasio dan semakin buruk kondisi lingkungan, semakin besar risiko yang dihasilkan.

### Aturan untuk Ibu Hamil

Input yang dianalisis:

- Usia ibu
- Usia kehamilan
- Tinggi badan ibu
- Lingkar lengan atas (LILA)
- Kadar hemoglobin (Hb)
- Kondisi lingkungan dan sanitasi

Skor risiko meningkat jika ditemukan indikasi LILA rendah, Hb rendah, tinggi badan di bawah batas aman, atau lingkungan sanitasi yang kurang baik.

## Fitur Utama

- Halaman beranda dengan dua pilihan pemeriksaan
- Form pemeriksaan risiko balita
- Form pemeriksaan risiko ibu hamil
- Hasil analisis berupa skor, status, dan rincian data input
- Rekomendasi medis singkat sesuai hasil analisis
- Fitur simpan hasil ke gambar

## Struktur Halaman

- `/` : beranda aplikasi
- `/cek-anak` : form analisis balita
- `/cek-ibu-hamil` : form analisis ibu hamil
- `/calculate-child` : proses perhitungan balita
- `/calculate-pregnant` : proses perhitungan ibu hamil

## Cara Menjalankan

1. Install dependensi PHP dan Node.js.
2. Salin file environment jika belum ada.
3. Jalankan migrasi database.
4. Jalankan server Laravel dan Vite.

Contoh perintah:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
npm run dev
```

Jika ingin build produksi frontend:

```bash
npm run build
```

## Catatan Penggunaan

- Aplikasi ini dirancang untuk kebutuhan skrining awal dan bahan laporan, bukan pengganti diagnosis medis.
- Hasil analisis sebaiknya dibaca bersama tenaga kesehatan jika risiko yang muncul berada pada kategori Waspada atau Bahaya.

## Lisensi

Proyek ini mengikuti lisensi MIT.
