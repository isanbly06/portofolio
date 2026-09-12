import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { EducationSection } from '../components/sections/EducationSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

/**
 * Halaman Utama (Landing Page / Home)
 * 
 * Menggabungkan seluruh section utama portofolio ke dalam halaman Single Page Application (SPA).
 * Mengelola state `activeSection` yang diperbarui secara otomatis berdasarkan posisi scroll layar
 * untuk menyorot link aktif pada komponen `Navbar`.
 * 
 * @returns {JSX.Element} Elemen layout halaman utama beserta seluruh section.
 */
export const Home = () => {
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} State ID section yang sedang aktif di viewport */
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    /**
     * Handler scroll untuk mendeteksi section mana yang sedang berada di area tampilan pengguna.
     * Mengkalkulasi offset posisi atas dan tinggi setiap section ID.
     */
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ikhsan Salsabilly — Portfolio Teknik Informatika</title>
        <meta
          name="description"
          content="Portfolio Web Ikhsan Salsabilly, Mahasiswa D4 Teknik Informatika Politeknik Negeri Lhokseumawe. Menampilkan karya proyek web dev, basis data, dan konfigurasi server."
        />
        <meta property="og:title" content="Ikhsan Salsabilly — Portfolio Teknik Informatika" />
        <meta property="og:description" content="Portfolio Web Ikhsan Salsabilly. Menampilkan karya proyek web dev, basis data, dan konfigurasi server." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Navbar activeSection={activeSection} />
        
        <main className="grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

