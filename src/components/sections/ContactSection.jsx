import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram, Video, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { personalInfo } from '../../data/personal';

/**
 * Komponen Section Kontak & Diskusi Proyek (`ContactSection`)
 * 
 * Menampilkan kartu banner interaktif ajakan kolaborasi dengan:
 * - Tombol aksi direct mailto email yang langsung membuka aplikasi surel bawaan pengguna (`mailto:${personalInfo.email}`).
 * - Tautan jaringan media sosial resmi (GitHub, Instagram, TikTok).
 * - Informasi lokasi domisili pengguna (`personalInfo.location`).
 * 
 * @returns {JSX.Element} Elemen section Contact dengan ID `contact`.
 */
export const ContactSection = () => {

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-primary via-primary-dark to-primary p-8 sm:p-12 lg:p-16 rounded-3xl text-white shadow-soft-lg relative overflow-hidden">
          
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-soft/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Tertarik Berkolaborasi atau <br className="hidden sm:inline" />
              Diskusi Proyek Web?
            </h2>

            <p className="text-soft text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Saya terbuka untuk diskusi ide proyek web dev, kolaborasi akademik, atau pertanyaan seputar karya saya. Silakan kirimkan email langsung.
            </p>

            {/* Primary Direct Email Mailto Button */}
            <div className="mb-10">
              <Button
                href={`mailto:${personalInfo.email}?subject=Diskusi%20Proyek%20Web%20-%20Ikhsan%20Salsabilly`}
                variant="accent"
                size="lg"
                icon={Mail}
                className="text-base sm:text-lg font-extrabold px-8 py-4 shadow-soft-md hover:scale-105"
              >
                Kirim Email Ke {personalInfo.email}
              </Button>
            </div>

            {/* Social Links Grid */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
              >
                <Instagram className="w-4 h-4 text-accent" />
                <span>Instagram Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

              <a
                href={personalInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all"
              >
                <Video className="w-4 h-4 text-accent" />
                <span>TikTok Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

            </div>

            <div className="mt-8 text-xs text-soft flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{personalInfo.location}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
