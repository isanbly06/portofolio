import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Komponen Dialog Pop-up Overlay (`Modal`)
 * 
 * Komponen dialog modal interaktif yang dilengkapi dengan animasi kemunculan (framer-motion),
 * penutup backdrop klik luar, tombol silang (close button), penguncian scroll background body,
 * serta penangan tombol papan ketik `Escape` untuk menutup dialog secara otomatis.
 * 
 * @param {Object} props Props komponen Modal.
 * @param {boolean} props.isOpen Status visibilitas modal (true jika terbuka).
 * @param {() => void} props.onClose Callback fungsi penutup modal saat diklik atau menekan Escape.
 * @param {string} props.title Judul header modal dialog.
 * @param {React.ReactNode} props.children Elemen konten di dalam area modal body.
 * @param {string} [props.maxWidth='max-w-3xl'] Klas kelas Tailwind penentu batas lebar maksimum dialog.
 * @returns {JSX.Element} Elemen overlay modal animasi.
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-3xl'
}) => {
  useEffect(() => {
    /**
     * Listener keyboard untuk menutup modal secara instan ketika pengguna menekan tombol `Escape`.
     * @param {KeyboardEvent} e Event tombol keyboard.
     */
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Mencegah background body dari scrolling saat modal aktif terbuka
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      // Mengembalikan scrolling normal body saat modal tertutup
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-dark/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-soft-lg border border-soft/50 z-10 overflow-hidden my-8`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-soft-light/40">
              <h3 id="modal-title" className="text-lg font-bold text-primary">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-gray-500 rounded-lg hover:text-primary hover:bg-soft/40 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
