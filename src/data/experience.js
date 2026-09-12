/**
 * @typedef {Object} ExperienceItem Skema data pengalaman kerja/teknis/akademik.
 * @property {string} id ID unik pengalaman.
 * @property {string} title Judul posisi/kegiatan pengalaman.
 * @property {string} category Kategori pengalaman (contoh: 'Technical Experience', 'Freelance').
 * @property {string} badgeColor Kelas CSS warna badge kategori.
 * @property {string} period Rentang kurun waktu/tahun pelaksanaan.
 * @property {string} location Lokasi tempat/entitas organisasi.
 * @property {string} description Deskripsi umum lingkup tanggung jawab.
 * @property {string[]} highlights List poin pencapaian atau aktivitas utama.
 * @property {string[]} tech List teknologi/skill terkait yang digunakan.
 */

/** @type {ExperienceItem[]} Daftar riwayat pengalaman teknis dan aktivitas praktis */
export const experienceData = [

  {
    id: "server-vm",
    title: "Server Configuration & Infrastructure Testing",
    category: "Technical Experience",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
    period: "2024 — Sekarang",
    location: "Politeknik Negeri Lhokseumawe & Lab Mandiri",
    description: "Melakukan setup, konfigurasi, dan eksperimen pengujian infrastruktur server menggunakan lingkungan Virtual Machine (VMware / VirtualBox / KVM).",
    highlights: [
      "Instalasi dan pengerasan (hardening) Linux Ubuntu Server & Windows Server di Virtual Machine.",
      "Konfigurasi web server (Apache2, Nginx), PHP-FPM, dan server basis data MySQL.",
      "Eksperimen alokasi jaringan lokal (IP static, port forwarding, DNS resolution).",
      "Simulasi manajemen izin akses pengguna, direktori virtual host, dan backup data."
    ],
    tech: ["Linux Server", "Windows Server", "Nginx", "Apache", "VirtualBox", "Networking"]
  },
  {
    id: "freelance-web",
    title: "Freelance Web Developer",
    category: "Freelance Project Work",
    badgeColor: "bg-accent/20 text-gray-900 border-accent/40",
    period: "2024 — Sekarang",
    location: "Remote / Project Based",
    description: "Mengembangkan aplikasi web kustom skala kecil hingga menengah untuk kebutuhan klien independen dan usaha lokal.",
    highlights: [
      "Diskusi kebutuhan klien dan penerjemahan ide menjadi alur sistem serta wireframe UI.",
      "Pengembangan backend menggunakan PHP/Laravel & MySQL basis data.",
      "Pembuatan antarmuka responsif ramah smartphone dengan HTML, CSS, dan Tailwind CSS.",
      "Pengujian fungsionalitas aplikasi dan bantuan penyerahan sistem (deployment)."
    ],
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"]
  },
  {
    id: "academic-projects",
    title: "Pengembangan Proyek Akademik Teknik Informatika",
    category: "Academic Experience",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
    period: "2024 — Sekarang",
    location: "Jurusan TIK — Politeknik Negeri Lhokseumawe",
    description: "Berpartisipasi aktif dalam pengerjaan tugas proyek kelompok dan individu perkuliahan Teknik Informatika.",
    highlights: [
      "Mengembangkan aplikasi sistem reservasi, inventaris data, dan eksplorasi logika algoritma.",
      "Menerapkan prinsip Rekayasa Perangkat Lunak: analisis kebutuhan, perancangan ERD, hingga dokumentasi.",
      "Presentasi hasil karya proyek di depan dosen dan rekan mahasiswa."
    ],
    tech: ["Software Engineering", "ERD Design", "Web Dev", "Problem Solving"]
  }
];
