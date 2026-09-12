import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

/**
 * Halaman Kesalahan 404 (`NotFound`)
 * 
 * Ditampilkan ketika pengguna mengakses rute URL yang tidak terdaftar di aplikasi.
 * Menyediakan tombol navigasi untuk kembali ke halaman utama (`/`).
 * 
 * @returns {JSX.Element} Elemen tampilan kesalahan 404.
 */
export const NotFound = () => {

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <Helmet>
        <title>Halaman Tidak Ditemukan (404) — Ikhsan Salsabilly</title>
      </Helmet>

      <div className="w-20 h-20 rounded-3xl bg-soft-light text-primary flex items-center justify-center text-3xl font-extrabold mb-6 shadow-soft-sm">
        404
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-3">
        Halaman Tidak Ditemukan
      </h1>

      <p className="text-sm sm:text-base text-gray-600 max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak tersedia atau alamat URL telah dipindahkan.
      </p>

      <Button href="/" variant="primary" icon={Home}>
        Kembali ke Beranda
      </Button>
    </div>
  );
};
