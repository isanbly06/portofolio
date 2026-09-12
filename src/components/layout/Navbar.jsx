import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

/**
 * Komponen Bilah Navigasi Atas (`Navbar`)
 * 
 * Menampilkan logo brand, menu navigasi desktop, tombol penutup menu responsif seluler (drawer/sheet),
 * serta tombol aksi CTA kontak.
 * 
 * @param {Object} props Props komponen Navbar.
 * @param {string} [props.activeSection='hero'] ID section yang sedang aktif untuk penanda gaya visual terdekat.
 * @returns {JSX.Element} Elemen header navigasi fixed.
 */
export const Navbar = ({ activeSection = 'hero' }) => {
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} Status apakah posisi scroll > 20px (untuk penambahan latar kaca blur) */
  const [isScrolled, setIsScrolled] = useState(false);

  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} Status keterbukaan menu mobile sheet drawer */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /** Daftar tautan menu navigasi */
  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    /**
     * Handler scroll untuk mengubah style Navbar menjadi backdrop blur + shadow saat di-scroll down.
     */
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Handler klik tautan navigasi.
   * 
   * Mengatur animasi smooth scroll jika berada di halaman utama (`/`), atau mengarahkan kembali ke `/` jika berada di halaman lain (contoh: detail project).
   * 
   * @param {React.MouseEvent<HTMLAnchorElement>} e Event klik tautan.
   * @param {string} href URL hash atau path rute yang dituju (contoh: `#projects`).
   */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + href;
      }
    } else {
      window.location.href = href;
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft-sm py-3 border-b border-soft/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2 py-1"
          >
            <div className="w-9 h-9 rounded-xl bg-primary text-accent flex items-center justify-center font-bold text-lg shadow-soft-sm group-hover:bg-primary-light transition-colors">
              IS
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-primary group-hover:text-primary-light transition-colors">
              Ikhsan<span className="text-secondary font-normal ml-1">Salsabilly</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-primary font-bold bg-soft-light'
                      : 'text-gray-600 hover:text-primary hover:bg-soft-light/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              variant="accent"
              size="sm"
            >
              Kontak Saya
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-primary hover:bg-soft-light focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Buka menu navigasi"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sheet Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-soft/40 shadow-soft-lg p-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-primary font-bold bg-soft-light border-l-4 border-accent'
                      : 'text-gray-700 hover:text-primary hover:bg-soft-light/40'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </a>
              );
            })}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Button
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                variant="accent"
                className="w-full justify-center"
              >
                Kontak Saya
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
