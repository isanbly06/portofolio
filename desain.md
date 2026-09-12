# DESAIN — Personal Portfolio Website (Ikhsan Salsabilly)

> Dokumen ini berisi requirement visual, UI/UX, konten tiap section, interaksi, dan kualitas pengalaman (responsive/accessibility/SEO/performance). Untuk requirement produk, data, dan teknis, lihat `prd.md`.

---

## 1. Color Palette (wajib, tidak boleh diganti)

| Peran | Hex |
|---|---|
| Background | `#FFFFFF` |
| Accent | `#F1B24A` |
| Primary | `#164A41` |
| Secondary | `#4D774E` |
| Soft | `#9DC88D` |

Karakter visual: modern, natural, professional, clean. Hindari neon, gradient berlebihan, glassmorphism berlebihan, dan dekorasi yang mengganggu keterbacaan.

## 2. Typography

Font sans-serif modern & mudah dibaca, misalnya **Inter**. Hierarchy H1/H2/H3/body konsisten di seluruh halaman.

## 3. UI Foundation

- Rounded corners secukupnya, whitespace cukup.
- Card tidak terlalu berat.
- Button punya state hover/focus/active.
- shadcn/ui dipakai selektif + custom styling agar tidak terlihat seperti template default.

## 4. Navbar

Sticky, minimal, profesional, responsive.
- Brand: "Ikhsan" atau "Ikhsan Salsabilly".
- Menu: About, Skills, Projects, Experience, Education, Achievements, Contact.
- Smooth scrolling ke section; active section indicator jika stabil.
- Mobile: hamburger menu/sheet.
- Boleh berubah background/shadow saat scroll.

## 5. Hero Section

First impression utama.
- Greeting: "Selamat Datang". Nama: Ikhsan Salsabilly. Identitas: Mahasiswa Teknik Informatika.
- Bio singkat latar belakang & ketertarikan teknologi.
- CTA utama: "Lihat Project". CTA sekunder: "Download CV".
- Social links: Instagram, TikTok, Email, GitHub.
- **Jangan** tampilkan GitHub activity.
- Profile image sebagai visual pendukung jika tersedia.
- Hierarchy jelas, tidak ramai.

## 6. About Me

Deskripsi diri, riwayat pendidikan singkat, ketertarikan teknologi, fokus personal story & arah pengembangan diri. Layout nyaman dibaca — bukan paragraf sangat panjang.

## 7. Skills

**Technical:** Frontend (HTML, CSS, JS, React, Tailwind), Backend (PHP, Laravel), Database (MySQL), Programming/Data (Python, C, C++), Tools (Git, GitHub, VS Code, XAMPP).
**Soft skills:** Public Speaking, Adaptability, Problem Solving, Critical Thinking, Teamwork, Communication, Time Management.

**Jangan** gunakan progress bar persentase — gunakan technology cards, badges, icon, atau kategori bersih.

## 8. Projects

- Card: thumbnail/screenshot, judul, kategori, deskripsi singkat, tech stack utama, tombol "Lihat Detail".
- Filter kategori tanpa reload. Kategori awal: Semua, Web, AI, Database, Akademik, Personal.
- Hover interaction ringan pada card. Project prioritas boleh berstatus "featured".
- Jangan buat card terlalu padat.

## 9. Project Detail / Case Study

Terasa seperti case study teknis: Hero project → Overview → Problem → Solution → Features → Tech Stack → Role → Challenges → Technical Solution → Result → Gallery/Screenshot → GitHub link (jika ada) → Live Demo (jika ada) → tombol kembali ke Projects. URL berbasis slug, contoh `/projects/sun-futsal`.

## 10. Experience & Activities

Judul: **"Pengalaman & Aktivitas"** (karena pengalaman profesional formal masih terbatas).
- Pengalaman membuat/konfigurasi server (VM Linux & Windows) ditampilkan sebagai technical experience.
- Freelance ditampilkan jujur sebagai pengalaman freelance.
- Project tugas kuliah sebagai Academic Project.
- **Jangan** memberi kesan pengalaman kerja formal yang tidak dimiliki.

## 11. Education

Timeline: D4 Teknik Informatika — Politeknik Negeri Lhokseumawe (2024–Sekarang) → SMA Negeri 1 Dewantara → MTsN 2 Aceh Utara → MIN 3 Aceh Utara. Tahun yang belum pasti bisa diisi kemudian di `education.js`.

## 12. Achievements

- CYS Peneliti Belia 2022 — Juara 2 — Tingkat Provinsi.
- CYS Peneliti Belia 2023 — Juara 3 — Tingkat Provinsi.
- Detail tambahan mudah diedit di `achievements.js`; dokumentasi/sertifikat bisa ditampilkan lewat modal/gallery.

## 13. Contact

Tanpa backend — tidak ada penyimpanan pesan server.
- Primary: Email (tombol mailto). Social: GitHub, Instagram, TikTok.
- **Jangan** buat contact form yang memberi kesan pesan tersimpan di database.

## 14. Footer

Sederhana: Nama, Copyright, social links seperlunya, credit teknologi jika relevan. Jangan berlebihan.

## 15. Empty & Error State (visual)

- Filter tanpa hasil → empty state jelas + tombol "Tampilkan Semua".
- Image gagal dimuat → fallback aman.
- Link eksternal kosong → jangan ditampilkan.

---

## 16. Interaction & Animation

Smooth scrolling · scroll reveal ringan · hover effect project cards · button hover/press feedback · social icon interaction · image gallery/modal · mobile navigation sheet · back-to-top (bila perlu) · project filtering tanpa reload.

**Prinsip:** animasi mendukung usability, bukan sekadar dekorasi. Hormati `prefers-reduced-motion`. Jangan animasi berlebihan, autoplay mengganggu, atau motion berat.

## 17. Responsive

| Breakpoint | Rentang | Perlakuan |
|---|---|---|
| Desktop | ≥ 1024px | Layout dua/tiga kolom sesuai konten |
| Tablet | 768px–1023px | Grid dua kolom / layout lebih sederhana |
| Mobile | < 768px | Satu kolom, mobile navbar, touch-friendly, gallery bisa di-swipe |

Jangan hanya mengecilkan layout desktop — prioritaskan keterbacaan & touch target.

## 18. Accessibility

Semantic HTML · alt text pada gambar penting · label jelas pada link/button · keyboard navigation · focus state terlihat · kontras warna nyaman · modal bisa ditutup dengan keyboard · jangan pakai warna sebagai satu-satunya penanda informasi · pertimbangkan `prefers-reduced-motion`.

## 19. SEO

Title homepage jelas (misal "Ikhsan Salsabilly — Portfolio Teknik Informatika") · meta description · Open Graph metadata · favicon · semantic heading hierarchy · title/description sesuai di tiap project detail · URL slug readable.

## 20. Performance

Image WebP bila memungkinkan · compress screenshot · lazy load gambar di luar initial viewport · hindari library tak perlu · code splitting/lazy route bila dibutuhkan · animasi ringan · jangan pakai video/background effect berat tanpa alasan.

## 21. Acceptance Criteria (Desain)

- [ ] Komponen dasar (button, card, container) konsisten secara visual & accessible.
- [ ] Semua section tampil dan dapat dinavigasi sesuai urutan di atas.
- [ ] Interaksi berjalan mulus di desktop & mobile, tidak mengganggu navigasi.
- [ ] Layout tidak rusak di ketiga breakpoint.
- [ ] Alt text, focus state, dan kontras memenuhi dasar accessibility.
- [ ] Metadata SEO dasar terpasang di homepage dan tiap halaman project detail.