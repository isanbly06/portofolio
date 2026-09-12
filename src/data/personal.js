/**
 * @typedef {Object} PersonalSocials Tautan media sosial pengguna.
 * @property {string} github URL profil GitHub.
 * @property {string} instagram URL profil Instagram.
 * @property {string} tiktok URL profil TikTok.
 * @property {string} linkedin URL profil LinkedIn.
 */

/**
 * @typedef {Object} PersonalInfo Data identitas personal & kontak pengguna.
 * @property {string} name Nama lengkap pengguna.
 * @property {string} shortName Nama panggilan/panggilan singkat.
 * @property {string} role Peran/status pekerjaan atau akademik saat ini.
 * @property {string} institution Nama institusi pendidikan/kampus.
 * @property {string} degree Program studi/jenjang pendidikan.
 * @property {string} bio Ringkasan ringkas latar belakang untuk Hero section.
 * @property {string} longBio Deskripsi narasi lengkap untuk modal/bagian detail.
 * @property {string} email Alamat surel kontak resmi.
 * @property {string} location Lokasi kota/provinsi domisili.
 * @property {PersonalSocials} socials Objek kumpulan tautan media sosial.
 * @property {string} cvUrl URL atau hash tautan unduhan berkas CV.
 */

/** @type {PersonalInfo} Data profil utama pengguna portofolio */
export const personalInfo = {

  name: "Ikhsan Salsabilly",
  shortName: "Ikhsan",
  role: "Mahasiswa Teknik Informatika",
  institution: "Politeknik Negeri Lhokseumawe",
  degree: "D4 Teknik Informatika",
  bio: "Mahasiswa Teknik Informatika yang antusias dan berdedikasi tinggi di bidang pengembangan aplikasi web, manajemen basis data, serta eksperimen konfigurasi infrastruktur server. Berfokus pada penyelesaian masalah nyata melalui kode yang bersih dan terstruktur.",
  longBio: "Saya adalah mahasiswa D4 Teknik Informatika di Politeknik Negeri Lhokseumawe. Perjalanan saya di dunia teknologi didorong oleh rasa ingin tahu yang kuat dalam memahami bagaimana aplikasi modern bekerja dari antarmuka pengguna hingga sistem basis data dan konfigurasi server di balik layar. Dengan kombinasi skill teknis web dev (Laravel, PHP, React) dan pemahaman server (Virtual Machine Linux/Windows), saya terus mengasah diri untuk menjadi web engineer yang handal.",
  email: "ikhsansalsabily06@gmail.com",
  location: "Lhokseumawe, Aceh, Indonesia",
  socials: {
    github: "https://github.com/ikhsan06",
    instagram: "https://instagram.com/isanbly_",
    tiktok: "https://tiktok.com/@sune",
    linkedin: "https://linkedin.com/in/ikhsansalsabilly"
  },
  cvUrl: "#contact" // URL or link to download CV
};
