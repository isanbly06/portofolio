import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Instagram, Mail, Video, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { personalInfo } from '../../data/personal';
import profileImg from '../../assets/foto_profil.jpeg';

/**
 * Komponen Section Sampul Utama (`HeroSection`)
 * 
 * Bagian pertama halaman landing page yang menyambut pengunjung dengan:
 * - Salam pembuka dan nama lengkap (`personalInfo.name`).
 * - Tagline identitas dan peran institusi akademik (`personalInfo.role`).
 * - Ringkasan latar belakang singkat (`personalInfo.bio`).
 * - Tombol aksi Call to Action (CTA): "Lihat Project" dan "Download CV".
 * - Tautan langsung ke media sosial (GitHub, Instagram, TikTok, Email).
 * - Kartu visual avatar foto profil dan badge indikator kampus PNL.
 * 
 * @returns {JSX.Element} Elemen section Hero dengan ID `hero`.
 */
export const HeroSection = () => {

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex items-center bg-gradient-to-b from-soft-light/30 via-white to-white overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-soft/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Badge Greeting */}
            <Badge variant="accent" className="mb-4 text-xs font-semibold px-3 py-1 shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-primary" />
              <span>Selamat Datang di Portfolio Saya</span>
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.15] mb-4">
              Halo, Saya <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-light">
                {personalInfo.name}
              </span>
            </h1>

            {/* Identity Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-soft-light text-secondary-dark font-semibold text-sm sm:text-base mb-6 border border-soft/40">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{personalInfo.role} — {personalInfo.institution}</span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Action Buttons CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Lihat Project
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="lg"
                icon={Download}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links (Instagram, TikTok, Email, GitHub) - NO GitHub activity widget */}
            <div className="pt-6 border-t border-gray-100 w-full flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Hubungi & Social:
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="TikTok Profile"
                  title="TikTok"
                >
                  <Video className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Kirim Email"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Avatar Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Background accent box */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-soft transform rotate-3 scale-105 opacity-20 transition-transform hover:rotate-1" />

              {/* Image card container */}
              <div className="relative w-full h-full rounded-3xl bg-white p-3 shadow-soft-lg border border-soft/40 overflow-hidden flex items-center justify-center">
                <img
                  src={profileImg}
                  alt={`Foto Profil ${personalInfo.name}`}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="eager"
                />
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-soft-md border border-soft/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center font-bold text-lg">
                  PNL
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">Teknik Informatika</p>
                  <p className="text-sm font-bold text-primary">Angkatan 2024</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
