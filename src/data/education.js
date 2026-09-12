/**
 * @typedef {Object} EducationItem Skema data riwayat pendidikan formal.
 * @property {string} id ID unik instansi pendidikan.
 * @property {string} institution Nama sekolah atau perguruan tinggi.
 * @property {string} degree Jurusan / Jenjang kualifikasi.
 * @property {string} period Kurun waktu studi.
 * @property {string} status Status akademik (contoh: 'Mahasiswa Aktif', 'Lulus').
 * @property {boolean} isCurrent Penanda status pendidikan yang sedang ditempuh saat ini.
 * @property {string} location Lokasi kota/kabupaten institusi.
 * @property {string} description Ringkasan fokus pembelajaran selama studi.
 * @property {string[]} activities List aktivitas/kegiatan pendukung saat studi.
 */

/** @type {EducationItem[]} Daftar riwayat pendidikan formal pengguna */
export const educationData = [

  {
    id: "pnl",
    institution: "Politeknik Negeri Lhokseumawe",
    degree: "D4 Teknik Informatika",
    period: "2024 — Sekarang",
    status: "Mahasiswa Aktif",
    isCurrent: true,
    location: "Lhokseumawe, Aceh",
    description: "Fokus pada studi Rekayasa Perangkat Lunak, Pemrograman Web, Sistem Basis Data, Jaringan Komputer, dan Struktur Data.",
    activities: [
      "Mengembangkan berbagai proyek aplikasi web berorientasi solusi.",
      "Eksperimen infrastruktur server dan manajemen basis data.",
      "Aktif dalam diskusi perkuliahan dan pengerjaan tugas akademik berbasis proyek."
    ]
  },
  {
    id: "sman1-dewantara",
    institution: "SMA Negeri 1 Dewantara",
    degree: "Sekolah Menengah Atas (MIPA)",
    period: "2021 — 2024",
    status: "Lulus",
    isCurrent: false,
    location: "Aceh Utara",
    description: "Mempelajari Matematika dan Ilmu Pengetahuan Alam (MIPA), membangun dasar pemikiran analitis dan logika.",
    activities: [
      "Perwakilan sekolah dalam kompetisi penelitian ilmiah belia tingkat provinsi."
    ]
  },
  {
    id: "mtsn2-acehutara",
    institution: "MTsN 2 Aceh Utara",
    degree: "Madrasah Tsanawiyah",
    period: "2018 — 2021",
    status: "Lulus",
    isCurrent: false,
    location: "Aceh Utara",
    description: "Pendidikan menengah pertama dengan penguatan disiplin dan sains dasar.",
    activities: []
  },
  {
    id: "min3-acehutara",
    institution: "MIN 3 Aceh Utara",
    degree: "Madrasah Ibtidaiyah",
    period: "2012 — 2018",
    status: "Lulus",
    isCurrent: false,
    location: "Aceh Utara",
    description: "Pendidikan dasar awal.",
    activities: []
  }
];
