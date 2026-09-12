# Product Requirement Document (PRD) — Personal Portfolio Website (Ikhsan Salsabilly)

## 1. Overview & Objective
Portofolio web interaktif dan responsif untuk **Ikhsan Salsabilly**, Mahasiswa D4 Teknik Informatika Politeknik Negeri Lhokseumawe. Web portofolio ini bertujuan untuk membangun personal branding profesional yang bersih, modern, dan natural, serta menampilkan skill, karya project, pengalaman, pendidikan, dan prestasi secara terstruktur.

---

## 2. Technical Stack & Architecture

- **Framework**: React 18 + Vite (Client-Side Rendered SPA)
- **Routing**: `react-router-dom` v6 (Routing `/` untuk Home/Sections & `/projects/:slug` untuk Case Study Project)
- **Styling**: Vanilla CSS / Tailwind CSS dengan Konfigurasi Color Palette Kustom
- **Icons**: `lucide-react`
- **Animation**: `framer-motion` (Micro-interactions, scroll reveal, list filter transitions, dialog modal)
- **SEO & Head**: `react-helmet-async` (Dynamic document head, meta description, OG tags)
- **Data Management**: Modular JavaScript data objects (`src/data/*.js`) untuk memudahkan pemeliharaan tanpa backend.

---

## 3. Design Tokens (Strict Visual System)

 Sesuai spesifikasi `desain.md`:

| Token | Name | Hex Code | Usage |
|---|---|---|---|
| `--color-bg` | Background | `#FFFFFF` | Main page & card background |
| `--color-primary` | Primary | `#164A41` | Main headings, primary buttons, branding |
| `--color-secondary` | Secondary | `#4D774E` | Subheadings, secondary badges, section borders |
| `--color-soft` | Soft | `#9DC88D` | Card backgrounds, pill tags, subtle highlights |
| `--color-accent` | Accent | `#F1B24A` | CTA buttons, active state indicators, hover highlights |

---

## 4. Data Models Schema (`src/data/`)

### 4.1. Personal Data (`personal.js`)
```javascript
export const personalInfo = {
  name: "Ikhsan Salsabilly",
  shortName: "Ikhsan",
  role: "Mahasiswa Teknik Informatika",
  institution: "Politeknik Negeri Lhokseumawe",
  bio: "Mahasiswa Teknik Informatika yang berdedikasi dan memiliki ketertarikan tinggi pada pengembangan web, manajemen basis data, dan eksplorasi teknologi AI. Selalu semangat mempelajari hal baru dan menyelesaikan masalah melalui pendekatan teknis yang efektif.",
  email: "ikhsansalsabilly@example.com", // email pengguna
  socials: {
    github: "https://github.com/",
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
  },
  cvUrl: "/resume.pdf"
};
```

### 4.2. Projects Data (`projects.js`)
```javascript
export const projects = [
  {
    id: "sun-futsal",
    slug: "sun-futsal",
    title: "Sun Futsal Reservation System",
    category: "Web", // Options: "Semua", "Web", "AI", "Database", "Akademik", "Personal"
    featured: true,
    thumbnail: "/images/projects/sun-futsal-thumb.jpg",
    shortDescription: "Sistem reservasi lapangan futsal berbasis web yang memudahkan pengguna memesan jadwal secara realtime.",
    overview: "Proyek sistem reservasi lapangan futsal yang dirancang untuk merapikan manajemen jadwal pemesanan dan pembayaran.",
    problem: "Pemesanan manual via pesan sering mengalami jadwal bentrok dan kesulitan rekap keuangan.",
    solution: "Aplikasi web interaktif dengan sistem cek ketersediaan lapangan otomatis dan rekap laporan pemesanan.",
    features: [
      "Pilihan alokasi jam reservasi realtime",
      "Manajemen antrean pemesanan",
      "Halaman rekap admin & ekspor laporan"
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    role: "Full Stack Developer (Academic & Independent Project)",
    challenges: "Mengatasi kondisi konkurensi booking pada slot waktu yang sama.",
    technicalSolution: "Memanfaatkan database transaction dan validasi stok slot waktu pada level query.",
    result: "Sistem berjalan lancar dan mampu menangani reservasi tanpa bentrok jadwal.",
    gallery: [
      "/images/projects/sun-futsal-1.jpg",
      "/images/projects/sun-futsal-2.jpg"
    ],
    githubUrl: "https://github.com/",
    demoUrl: ""
  }
];
```

### 4.3. Skills Data (`skills.js`)
```javascript
export const skillsData = {
  technical: [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"] },
    { category: "Backend", items: ["PHP", "Laravel"] },
    { category: "Database", items: ["MySQL"] },
    { category: "Programming & Data", items: ["Python", "C", "C++"] },
    { category: "Tools & Environment", items: ["Git", "GitHub", "VS Code", "XAMPP", "Linux Server (VM)", "Windows Server (VM)"] }
  ],
  softSkills: [
    "Public Speaking", "Adaptability", "Problem Solving", "Critical Thinking", "Teamwork", "Communication", "Time Management"
  ]
};
```

### 4.4. Experience Data (`experience.js`)
```javascript
export const experiences = [
  {
    id: 1,
    title: "Server Configuration & Technical Experiment",
    type: "Technical Experience",
    period: "2024 - Sekarang",
    description: "Melakukan instalasi, konfigurasi, dan pengujian server menggunakan Virtual Machine (Linux Ubuntu Server & Windows Server) untuk keperluan simulasi jaringan dan hosting lokal.",
    skills: ["Linux Server", "Windows Server", "Networking", "Virtualization"]
  },
  {
    id: 2,
    title: "Freelance Web Development",
    type: "Freelance Project",
    period: "2024 - Sekarang",
    description: "Mengerjakan proyek pengembangan aplikasi web kustom untuk klien independen, mencakup perancangan antarmuka hingga implementasi basis data.",
    skills: ["PHP", "Laravel", "MySQL", "Frontend Dev"]
  },
  {
    id: 3,
    title: "Proyek Akademik Teknik Informatika",
    type: "Academic Projects",
    period: "2024 - Sekarang",
    description: "Mengembangkan berbagai proyek perkuliahan meliputi pembuatan aplikasi web, pemrosesan data sederhana, dan pemodelan alur sistem informasi.",
    skills: ["Web Dev", "Algoritma & Struktur Data", "Database Management"]
  }
];
```

### 4.5. Education Data (`education.js`)
```javascript
export const educationData = [
  {
    institution: "Politeknik Negeri Lhokseumawe",
    degree: "D4 Teknik Informatika",
    period: "2024 – Sekarang",
    description: "Fokus pada Rekayasa Perangkat Lunak, Pemrograman Web, Sistem Basis Data, dan Jaringan Komputer.",
    status: "Aktif"
  },
  {
    institution: "SMA Negeri 1 Dewantara",
    degree: "Sekolah Menengah Atas",
    period: "2021 – 2024",
    description: "Jurusan IPA / Sains.",
    status: "Lulus"
  },
  {
    institution: "MTsN 2 Aceh Utara",
    degree: "Madrasah Tsanawiyah",
    period: "2018 – 2021",
    description: "",
    status: "Lulus"
  },
  {
    institution: "MIN 3 Aceh Utara",
    degree: "Madrasah Ibtidaiyah",
    period: "2012 – 2018",
    description: "",
    status: "Lulus"
  }
];
```

### 4.6. Achievements Data (`achievements.js`)
```javascript
export const achievementsData = [
  {
    id: 1,
    title: "CYS Peneliti Belia 2022",
    rank: "Juara 2",
    level: "Tingkat Provinsi",
    year: "2022",
    description: "Penghargaan karya penelitian belia tingkat provinsi oleh Center for Young Scientists (CYS).",
    certificateImage: "/images/achievements/cys-2022.jpg"
  },
  {
    id: 2,
    title: "CYS Peneliti Belia 2023",
    rank: "Juara 3",
    level: "Tingkat Provinsi",
    year: "2023",
    description: "Penghargaan lanjutan penelitian belia tingkat provinsi oleh Center for Young Scientists (CYS).",
    certificateImage: "/images/achievements/cys-2023.jpg"
  }
];
```

---

## 5. Functional Requirements & Routes

### 5.1. Route Specification
1. `/`: Main Single Page Portfolio dengan smooth scroll ke section ID (`#hero`, `#about`, `#skills`, `#projects`, `#experience`, `#education`, `#achievements`, `#contact`).
2. `/projects/:slug`: Detailed Case Study Page. Menampilkan laporan komprehensif proyek terkait dengan tombol navigasi kembali ke `/`.
3. `*`: 404 Not Found Page dengan tombol kembali ke Beranda.

### 5.2. Component Hierarchy
- `src/components/layout/Navbar.jsx` (Sticky navigation, mobile drawer, active section highlight)
- `src/components/layout/Footer.jsx` (Simple footer with copyright and quick links)
- `src/components/sections/HeroSection.jsx` (Hero presentation, avatar, CTAs, social links)
- `src/components/sections/AboutSection.jsx` (Personal story and focus)
- `src/components/sections/SkillsSection.jsx` (Categorized tech cards & soft skill pills)
- `src/components/sections/ProjectsSection.jsx` (Category filter tabs, project cards grid, empty state)
- `src/components/sections/ExperienceSection.jsx` (Timeline of technical/freelance/academic activities)
- `src/components/sections/EducationSection.jsx` (Academic timeline)
- `src/components/sections/AchievementsSection.jsx` (Awards grid + Certificate Modal viewer)
- `src/components/sections/ContactSection.jsx` (Direct mailto link & social profiles)
- `src/components/ui/Modal.jsx` (Reusable accessible modal for image/certificate preview)
- `src/components/ui/Badge.jsx`, `Button.jsx`, `Card.jsx` (UI primitives styled with custom tokens)

---

## 6. Non-Functional & Quality Standards

1. **Responsiveness**: Tested on Mobile (<768px), Tablet (768px - 1023px), and Desktop (>=1024px). Touch target minimal 44x44px di mobile.
2. **Accessibility (a11y)**:
   - Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - All interactive elements possess explicit `aria-label`, visible focus indicators (`focus-visible:ring-2`), and complete keyboard navigation (Tab/Shift+Tab, Escape key modal close).
   - Motion preference handling via `prefers-reduced-motion`.
3. **SEO Optimization**:
   - Unique `<title>` and `<meta name="description">` per route.
   - OpenGraph meta tags for preview sharing on social platforms.
   - Accessible images with strict `alt` attributes and fallbacks.
4. **Performance**:
   - Optimized lightweight bundle size.
   - WebP image format with SVG/Color placeholder fallbacks for missing media.
   - Smooth 60fps animations without layout shifts (CLS).

---

## 7. Success Criteria & Verification
- Semua section di `desain.md` terimplementasi 100% presisi.
- Warna persis sesuai tabel palette (`#FFFFFF`, `#164A41`, `#4D774E`, `#9DC88D`, `#F1B24A`).
- Tidak ada console error atau broken link.
- Filter proyek berfungsi secara instant tanpa reload halaman.
- Halaman detail proyek (`/projects/:slug`) merender case study lengkap.
