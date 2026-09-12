import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';

/**
 * Komponen Helper Penanganan Scroll berdasarkan Hash URL (`#section`) atau Perubahan Rute Path.
 * 
 * - Jika URL memiliki hash (contoh: `/#projects`), fungsi ini akan mencari elemen DOM terkait
 *   dan melakukan smooth scroll ke elemen tersebut.
 * - Jika rute berada di root (`/`) tanpa hash, posisi scroll dikembalikan ke paling atas (`top: 0`).
 * 
 * @returns {null} Komponen ini tidak me-render elemen UI.
 */
function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

/**
 * Komponen Root Utama Aplikasi (`App`)
 * 
 * Mengonfigurasi penyedia Context utama:
 * - `HelmetProvider`: Mengelola tag meta SEO & judul dokumen halaman.
 * - `BrowserRouter`: Mengelola routing aplikasi React Router.
 * - `ScrollToHashElement`: Memastikan navigasi smooth scroll antar hash/halaman.
 * 
 * Rute Aplikasi:
 * - `/` -> `Home` (Halaman landing page tunggal dengan berbagai section)
 * - `/projects/:slug` -> `ProjectDetail` (Halaman detail case study teknis proyek)
 * - `*` -> `NotFound` (Halaman 404 jika URL tidak terdaftar)
 * 
 * @returns {JSX.Element} Elemen pohon rute aplikasi.
 */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

