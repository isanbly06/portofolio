import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/personal';

/**
 * Komponen Section "Tentang Saya" (`AboutSection`)
 * 
 * Menyajikan naskah personal story, komitmen profesional, serta daftar poin highlight
 * pencapaian akademik dan teknis pengguna.
 * 
 * @returns {JSX.Element} Elemen section About dengan ID `about`.
 */
export const AboutSection = () => {
  /** @type {Array<{title: string, desc: string}>} Ringkasan poin-poin keunggulan personal */
  const highlights = [
    { title: "Pendidikan Aktif", desc: "Mahasiswa D4 Teknik Informatika di Politeknik Negeri Lhokseumawe (2024-Sekarang)." },
    { title: "Fokus Keahlian", desc: "Pengembangan Aplikasi Web (Laravel, PHP, React) & Manajemen Basis Data MySQL." },
    { title: "Pengalaman Praktis", desc: "Konfigurasi server Virtual Machine (Linux Ubuntu & Windows) serta proyek freelance." },
    { title: "Prestasi Sains", desc: "Peraih Juara 2 & Juara 3 Peneliti Belia CYS Provinsi Aceh (2022 & 2023)." }
  ];


  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Mengenal <span className="text-secondary">{personalInfo.shortName}</span> Lebih Dekat
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Perjalanan latar belakang, ketertarikan di dunia teknologi, dan komitmen pengembangan diri.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Story Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-soft-light/30 p-8 rounded-3xl border border-soft/40 shadow-soft-sm relative">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-accent" />
                <span>Personal Story & Arah Pengembangan Diri</span>
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Saya adalah <strong className="text-primary font-semibold">Ikhsan Salsabilly</strong>, mahasiswa D4 Teknik Informatika Politeknik Negeri Lhokseumawe angkatan 2024. Ketertarikan saya pada dunia teknologi berawal dari rasa penasaran tentang bagaimana sebuah sistem informasi mampu menyelesaikan masalah operasional di dunia nyata.
                </p>
                <p>
                  Selama masa studi, saya memfokuskan diri pada penguasaan <strong className="text-primary font-semibold">Web Development</strong> (baik frontend modern maupun arsitektur backend) serta penguatan dasar <strong className="text-primary font-semibold">Manajemen Basis Data</strong> dan infrastruktur server Virtual Machine.
                </p>
                <p>
                  Prinsip kerja saya adalah belajar secara konsisten, jujur dalam menyampaikan tingkat kapabilitas teknis, dan berorientasi pada hasil akhir yang ramah pengguna serta mudah dirawat (clean & maintainable code).
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-soft-sm hover:shadow-soft-md hover:border-soft transition-all duration-200 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-soft text-primary shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
