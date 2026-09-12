import React from 'react';
import { Github, Instagram, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../../data/personal';

/**
 * Komponen Bagian Bawah Halaman (`Footer`)
 * 
 * Menampilkan ringkasan informasi personal, tautan media sosial, hak cipta (copyright),
 * dan tombol aksi untuk kembali ke posisi paling atas halaman (`scrollToTop`).
 * 
 * @returns {JSX.Element} Elemen footer halaman.
 */
export const Footer = () => {
  /**
   * Mengembalikan posisi scroll jendela browser ke posisi paling atas secara halus (smooth scroll).
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="bg-primary text-white pt-12 pb-8 border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-soft mt-1">
              {personalInfo.role} — {personalInfo.institution}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-accent hover:text-primary transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-accent hover:text-primary transition-all duration-200"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-accent hover:text-primary transition-all duration-200"
              aria-label="Email Direct"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React & Tailwind CSS.
          </p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-accent transition-colors focus:outline-none focus:ring-1 focus:ring-accent rounded px-2 py-1"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
