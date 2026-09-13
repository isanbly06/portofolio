/**
 * @typedef {Object} AchievementItem Skema data prestasi/penghargaan kompetisi.
 * @property {string} id ID unik prestasi.
 * @property {string} title Nama kompetisi/penghargaan.
 * @property {string} rank Peringkat/gelar kejuaraan (contoh: 'Juara 2', 'Juara 3').
 * @property {string} level Tingkat kompetisi (contoh: 'Tingkat Provinsi').
 * @property {string} organizer Lembaga penyelenggara ajang.
 * @property {string} year Tahun pelaksanaan kejuaraan.
 * @property {string} category Kategori bidang lomba/penelitian.
 * @property {string} description Narasi ringkasan pencapaian.
 * @property {string[]} highlights List poin pencapaian atau aktivitas saat lomba.
 * @property {string} certificateSvg Path lokasi gambar/SVG dokumen sertifikat.
 */

import cert2 from "../assets/achievements/sertifikat-2.pdf";
import cert3 from "../assets/achievements/sertifikat-3.pdf";

/** @type {AchievementItem[]} Daftar prestasi dan penghargaan kompetisi pengguna */
export const achievementsData = [

  {
    id: "cys-2022",
    title: "CYS Peneliti Belia 2022",
    rank: "Juara 2",
    level: "Tingkat Provinsi",
    organizer: "Center for Young Scientists (CYS)",
    year: "2022",
    category: "Kompetisi Penelitian Ilmiah Belia",
    description: "Meraih Juara 2 pada ajang kompetisi penelitian ilmiah belia tingkat provinsi Aceh yang diselenggarakan oleh Center for Young Scientists.",
    highlights: [
      "Penyusunan metodologi penelitian terstruktur.",
      "Presentasi karya ilmiah dan pengujian produk di depan dewan juri ahli.",
      "Publikasi hasil temuan penelitian."
    ],
    certificateSvg: cert2
  },
  {
    id: "cys-2023",
    title: "CYS Peneliti Belia 2023",
    rank: "Juara 3",
    level: "Tingkat Provinsi",
    organizer: "Center for Young Scientists (CYS)",
    year: "2023",
    category: "Kompetisi Penelitian Ilmiah Belia",
    description: "Meraih Juara 3 pada ajang penelitian belia tingkat provinsi lanjutan, mempertahankan konsistensi riset dan inovasi sains.",
    highlights: [
      "Pengembangan variasi hipotesis dan eksplorasi data lanjutan.",
      "Defend riset di sesi tanya jawab juri provinsi."
    ],
    certificateSvg: cert3
  }
];
