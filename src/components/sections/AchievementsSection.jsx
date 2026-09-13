import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Eye, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { achievementsData } from '../../data/achievements';

/**
 * Komponen Section Prestasi & Penghargaan Kompetisi (`AchievementsSection`)
 * 
 * Menampilkan pencapaian kompetisi ilmiah (seperti Juara Peneliti Belia CYS Aceh)
 * beserta modal pop-up pratinjau sertifikat gambar/SVG saat tombol "Lihat Dokumentasi Sertifikat" diklik.
 * 
 * @returns {JSX.Element} Elemen section Achievements dengan ID `achievements`.
 */
export const AchievementsSection = () => {
  /** @type {[import('../../data/achievements').AchievementItem | null, React.Dispatch<React.SetStateAction<import('../../data/achievements').AchievementItem | null>>]} Data sertifikat terpilih yang sedang ditampilkan di modal dialog */
  const [selectedCertificate, setSelectedCertificate] = useState(null);


  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white via-soft-light/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Prestasi & Penghargaan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Penghargaan <span className="text-secondary">Kompetisi Ilmiah</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Pencapaian penelitian dan karya inovasi ilmiah pada ajang Peneliti Belia Center for Young Scientists.
          </p>
        </div>

        {/* Achievements Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft-sm hover:shadow-soft-md hover:border-soft transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="accent" icon={Trophy} className="font-extrabold text-xs px-3 py-1">
                    {item.rank} — {item.level}
                  </Badge>
                  <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  Penyelenggara: {item.organizer}
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Certificate Action */}
              <div className="pt-4 border-t border-gray-100">
                <Button
                  onClick={() => setSelectedCertificate(item)}
                  variant="secondary"
                  size="sm"
                  icon={Eye}
                  className="w-full justify-center text-xs font-bold"
                >
                  Lihat Dokumentasi Sertifikat
                </Button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate ? `${selectedCertificate.title} — ${selectedCertificate.rank}` : ''}
        >
          {selectedCertificate && (
            <div className="space-y-6">
              <div className={`bg-soft-light p-2 rounded-2xl border border-soft/50 overflow-hidden shadow-soft-sm ${selectedCertificate.certificateSvg.toLowerCase().endsWith('.pdf') ? 'h-[60vh]' : ''}`}>
                {selectedCertificate.certificateSvg.toLowerCase().endsWith('.pdf') ? (
                  <iframe
                    src={selectedCertificate.certificateSvg}
                    title={`Sertifikat ${selectedCertificate.title}`}
                    className="w-full h-full rounded-xl"
                  />
                ) : (
                  <img
                    src={selectedCertificate.certificateSvg}
                    alt={`Sertifikat ${selectedCertificate.title}`}
                    className="w-full h-auto rounded-xl object-contain max-h-[60vh]"
                  />
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-500">Penyelenggara:</span>
                  <span className="font-bold text-primary">{selectedCertificate.organizer}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-500">Tingkat & Tahun:</span>
                  <span className="font-bold text-primary">{selectedCertificate.level} ({selectedCertificate.year})</span>
                </div>
                <p className="text-xs text-gray-600 pt-2 border-t border-gray-200">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
