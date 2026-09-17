/**
 * @typedef {Object} ProjectItem Skema objek data detail proyek / case study.
 * @property {string} id ID unik proyek.
 * @property {string} slug Parameter URL slug ramah SEO (contoh: 'sun-futsal').
 * @property {string} title Judul utama proyek.
 * @property {string} category Kategori utama proyek untuk filter (contoh: 'Web', 'AI', 'Database').
 * @property {string[]} [secondaryCategories] Kategori sekunder tambahan.
 * @property {boolean} [featured] Menandai apakah proyek masuk dalam kategori unggulan/featured.
 * @property {string} thumbnail Path gambar/SVG pratinjau thumbnail.
 * @property {string} shortDescription Deskripsi singkat untuk kartu galeri.
 * @property {string} overview Gambaran umum proyek untuk halaman case study detail.
 * @property {string} problem Penjelasan masalah/kebutuhan yang melatarbelakangi proyek.
 * @property {string} solution Solusi teknis yang diterapkan dalam bentuk perangkat lunak.
 * @property {string[]} features List fitur utama sistem aplikasi.
 * @property {string[]} techStack Daftar teknologi/bahasa/framework yang digunakan.
 * @property {string} role Peran tanggung jawab pengembang dalam proyek.
 * @property {string} challenges Tantangan teknis yang dihadapi selama pengembangan.
 * @property {string} technicalSolution Pendekatan arsitektur/kode untuk mengatasi tantangan.
 * @property {string} result Hasil akhir dan dampak sistem bagi pengguna.
 * @property {string} [githubUrl] URL repository kode di GitHub (opsional).
 * @property {string} [demoUrl] URL live demo aplikasi yang aktif (opsional).
 */

/** @type {string[]} List daftar kategori proyek untuk tab filter */
export const projectCategories = [
  "Semua",
  "Web",
  "AI",
  "Database",
  "Akademik",
  "Personal"
];

/** @type {ProjectItem[]} Katalog proyek portofolio dan case study teknis */
export const projectsData = [

  {
    id: "sun-futsal",
    slug: "sun-futsal",
    title: "Sun Futsal Reservation System",
    category: "Web",
    secondaryCategories: ["Database", "Akademik","Personal"],
    featured: true,
    thumbnail: "/images/projects/sun_futsal.png",
    shortDescription: "Sistem reservasi lapangan futsal berbasis web yang merapikan jadwal booking dan laporan transaksi secara realtime.",
    overview: "Sun Futsal Reservation System merupakan solusi platform aplikasi web yang dirancang khusus untuk memodernisasi proses penyewaan lapangan futsal. Aplikasi ini membantu pemilik tempat futsal mengelola jadwal pemesanan secara transparan dan mencegah terjadinya double-booking.",
    problem: "Pemesanan lapangan futsal yang dilakukan secara manual melalui pesan instan sering menyebabkan bentrok jadwal antar penyewa, kesulitan pencatatan uang muka (DP), dan kerumitan rekapitulasi pendapatan bulanan.",
    solution: "Mengembangkan platform web terintegrasi berbasis Laravel dan MySQL. Pelanggan dapat melihat ketersediaan jam secara langsung, melakukan reservasi mandiri, dan mengunggah bukti pembayaran, sementara pengelola mendapatkan dashboard admin untuk verifikasi cepat.",
    features: [
      "Jadwal Ketersediaan Realtime: Grid interaktif slot jam per lapangan yang diperbarui secara otomatis.",
      "Sistem Antrean Reservasi: Mencegah dua pengguna memesan slot jam yang sama secara bersamaan.",
      "Dashboard Manajemen Admin: Pengelolaan status booking (Pending, Diterima, Ditolak) dan cetak rekapitulasi.",
      "Kalkulasi Biaya Otomatis: Perhitungan total harga sesuai durasi dan tarif jam reguler/malam.",
      "Notifikasi Status Booking: Konfirmasi visual dan ringkasan riwayat pemesanan untuk pelanggan."
    ],
    techStack: ["Laravel", "PHP 8.2", "MySQL", "Tailwind CSS", "JavaScript ES6", "Blade Engine"],
    role: "Full Stack Web Developer (Proyek Akademik & Pengembang Utama)",
    challenges: "Mengatasi masalah kondisi konkurensi (race condition) ketika dua calon penyewa mencoba memesan slot lapangan di jam yang persis sama dalam hitungan detik.",
    technicalSolution: "Mengimplementasikan database locking (SELECT FOR UPDATE) dalam Laravel Database Transaction untuk memastikan slot jam yang sedang diproses dikunci sementara hingga transaksi selesai.",
    result: "Sistem berhasil menghilangkan risiko jadwal bentrok 100%, mempercepat proses verifikasi booking oleh admin hingga 70%, dan mempermudah rekap keuangan bulanan.",
    gallery: [
      { title: "Dashboard Antarmuka Reservasi", type: "system", subtitle: "Tampilan visual pilihan jadwal & slot jam" },
      { title: "Manajemen Booking Admin", type: "admin", subtitle: "Tabel verifikasi pembayaran dan laporan" }
    ],
  },
  {
    id: "lost and found",
    slug: "lost and found",
    title: "Sistem Informasi Lost and FOund",
    category: "Web",
    secondaryCategories: ["Database", "Akademik"],
    featured: true,
    thumbnail: "/images/projects/lost_and_found.png",
    shortDescription: "Sebuah web yang mempermudah mahasiswa/dosen untuk menemukan barang hilang.",
    overview: "Proyek perancangan basis data terstruktur untuk pencatatan barang masuk, barang keluar, dan stok minimum dalam suatu gudang distribusi.",
    problem: "Banyak mahasiswa/dosen yang kehilangan atau menemukan barang disekitar kampus tapi bingung harus melapor kemana selain melapor ke pos satpam. ",
    solution: "Web ini mempermudah agar mahasiswa/dosen dapat mencari barang hilang dan juga melaporkan barang temuan disekitar kampus.",
    features: [
      "Melaporkan dan mencari barang pada website",
      "Pengguna dapat saling berkomunikasi didalam website ini.",
      "QRcode untuk mengkomfirmasi barang yang sudah diterima"
    ],
    techStack: ["MySQL", "PHP", "React"],
    role: "Bisnis Logic & Frontend Developer",
  },
  {
    id: "personal portfolio",
    slug: "personal portfolio",
    title: "Interactive Personal Portfolio Website",
    category: "Personal",
    secondaryCategories: ["Web"],
    featured: false,
    thumbnail: "/images/projects/portfolio.png",
    shortDescription: "Website portofolio pribadi modern berbasis React, Vite, dan Tailwind CSS dengan tema visual natural dan bersih.",
    overview: "Website ini dirancang sebagai wadah profesional untuk menampilkan karya proyek, keahlian teknis, riwayat pengalaman, dan prestasi akademik Ikhsan Salsabilly.",
    problem: "Membutuhkan media personal branding yang cepat, accessible, responsif, dan mudah diperbarui tanpa dependensi backend yang rumit.",
    solution: "Membangun SPA React dengan struktur data terpisah (JS data modules), sistem filter interaktif, serta rute case study proyek berbasis URL slug.",
    features: [
      "Filter Proyek Tanpa Reload (Web, AI, Database, Akademik, Personal).",
      "Struktur Case Study Teknis Komprehensif per Proyek.",
      "Modal Preview Sertifikat Prestasi Interaktif.",
      "Desain Responsif 100% dari Layar Ponsel hingga Desktop."
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React"],
    role: "Frontend Developer & UI/UX Designer",
    challenges: "Memastikan skema warna konsisten di seluruh komponen sesuai guideline tanpa terlihat seperti template bawaan.",
    technicalSolution: "Mengkonfigurasi custom theme tokens di Tailwind config dan variabel CSS terpusat.",
    result: "Website memuat sangat cepat (skor Lighthouse tinggi) dan ramah perangkat mobile.",
    gallery: [
      { title: "Tampilan Utama & Portfolio Showcase", type: "web", subtitle: "Interface clean & natural palette" }
    ],
    githubUrl: "#",
    demoUrl: "#"
  }
];
