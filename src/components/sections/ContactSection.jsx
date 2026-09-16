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

            {/* Contact Form with Honeypot */}
            <div className="mb-10 max-w-lg mx-auto bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm text-left">
              <form action="https://formspree.io/f/mjykbqwb" method="POST" className="flex flex-col gap-4">

                {/* Honeypot Field - Spam Bot trap */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                    Pesan (Wajib)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="4"
                    placeholder="Halo Ikhsan, saya tertarik untuk diskusi..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                    Email Anda (Opsional - Jika ingin dibalas)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  icon={Mail}
                  className="w-full justify-center text-base font-bold py-3 mt-2 shadow-soft-md hover:scale-[1.02]"
                >
                  Kirim Pesan
                </Button>

                <p className="text-xs text-center text-white/60 mt-2">
                  *Pesan Anda akan dikirim secara anonim jika email tidak diisi.
                </p>
              </form>
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
