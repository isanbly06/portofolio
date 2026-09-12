/**
 * @typedef {Object} SkillItem Item keahlian individual.
 * @property {string} name Nama teknologi/alat (contoh: 'React', 'Laravel').
 * @property {string} level Tingkat kemahiran (contoh: 'Advanced', 'Intermediate', 'Basic').
 * @property {string} icon Nama komponen ikon Lucide.
 */

/**
 * @typedef {Object} TechnicalCategory Kategori grup keahlian teknis.
 * @property {string} category Nama kategori teknis (contoh: 'Frontend Development').
 * @property {string} description Ringkasan cakupan kategori.
 * @property {SkillItem[]} skills Daftar item keahlian teknis di dalamnya.
 */

/**
 * @typedef {Object} SoftSkillItem Item keahlian interpersonal/soft skill.
 * @property {string} title Nama soft skill (contoh: 'Public Speaking').
 * @property {string} desc Penjelasan penerapan soft skill.
 */

/**
 * @typedef {Object} SkillsData Objek utama penyimpan seluruh daftar keahlian teknis & soft skills.
 * @property {TechnicalCategory[]} technical Kategori keahlian teknis.
 * @property {SoftSkillItem[]} softSkills Daftar soft skills.
 */

/** @type {SkillsData} Data keahlian teknis dan interpersonal pengguna */
export const skillsData = {

  technical: [
    {
      category: "Frontend Development",
      description: "Membangun antarmuka web interaktif, responsif, dan accessible.",
      skills: [
        { name: "HTML5", level: "Advanced", icon: "Code" },
        { name: "CSS3", level: "Advanced", icon: "Palette" },
        { name: "JavaScript (ES6+)", level: "Intermediate", icon: "FileCode" },
        { name: "React", level: "Intermediate", icon: "Atom" },
        { name: "Tailwind CSS", level: "Intermediate", icon: "Layers" }
      ]
    },
    {
      category: "Backend Development",
      description: "Mengembangkan logika server, API, dan arsitektur aplikasi web.",
      skills: [
        { name: "PHP", level: "Intermediate", icon: "Server" },
        { name: "Laravel", level: "Intermediate", icon: "Cpu" }
      ]
    },
    {
      category: "Database & Storage",
      description: "Merancang skema relasional dan optimasi query data.",
      skills: [
        { name: "MySQL", level: "Intermediate", icon: "Database" }
      ]
    },
    {
      category: "Programming & Data Science",
      description: "Dasar logika pemrograman, struktur data, dan pengolahan data.",
      skills: [
        { name: "Python", level: "Basic-Intermediate", icon: "Terminal" },
        { name: "C", level: "Basic", icon: "Binary" },
        { name: "C++", level: "Basic", icon: "Code2" }
      ]
    },
    {
      category: "Tools & Infrastruktur",
      description: "Lingkungan pengembangan, version control, dan eksperimen server.",
      skills: [
        { name: "Git & GitHub", level: "Intermediate", icon: "GitBranch" },
        { name: "VS Code", level: "Advanced", icon: "Laptop" },
        { name: "XAMPP", level: "Intermediate", icon: "Server" },
        { name: "Linux Server (VM)", level: "Intermediate", icon: "HardDrive" },
        { name: "Windows Server (VM)", level: "Intermediate", icon: "Monitor" }
      ]
    }
  ],
  softSkills: [
    { title: "Public Speaking", desc: "Mampu menyampaikan gagasan dan presentasi teknis secara jelas di depan publik." },
    { title: "Adaptability", desc: "Cepat beradaptasi dengan alur kerja baru, framework, dan tantangan teknis." },
    { title: "Problem Solving", desc: "Pendekatan analitis dalam memecahkan bug dan masalah sistemik." },
    { title: "Critical Thinking", desc: "Menganalisis opsi arsitektur dan kebutuhan sistem sebelum implementasi." },
    { title: "Teamwork", desc: "Kolaboratif dalam tim proyek perkuliahan maupun pengembangan mandiri." },
    { title: "Communication", desc: "Komunikasi efisien dalam menyampaikan kebutuhan teknis dan progress proyek." },
    { title: "Time Management", desc: "Disiplin mengatur prioritas tenggat waktu perkuliahan dan proyek." }
  ]
};
