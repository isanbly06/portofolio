import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { educationData } from '../../data/education';

/**
 * Komponen Section Riwayat Akademik / Pendidikan (`EducationSection`)
 * 
 * Menampilkan kartu riwayat studi formal dari perguruan tinggi (Politeknik Negeri Lhokseumawe)
 * hingga sekolah menengah atas/kejuruan dengan penanda status aktif/alumni.
 * 
 * @returns {JSX.Element} Elemen section Education dengan ID `education`.
 */
export const EducationSection = () => {

  return (
    <section id="education" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Riwayat Akademik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Jejak <span className="text-secondary">Pendidikan</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Perjalanan formal studi dari tingkat dasar hingga jenjang Pendidikan Tinggi Teknik Informatika.
          </p>
        </div>

        {/* Education Grid Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                edu.isCurrent
                  ? 'bg-soft-light/40 border-soft shadow-soft-md ring-2 ring-soft/50'
                  : 'bg-white border-gray-100 shadow-soft-sm hover:border-soft'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={edu.isCurrent ? 'accent' : 'neutral'} className="font-bold">
                    {edu.status}
                  </Badge>
                  <div className="inline-flex items-center gap-1 text-xs text-gray-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-primary mb-1">
                  {edu.institution}
                </h3>
                
                <p className="text-sm font-bold text-secondary mb-3">
                  {edu.degree}
                </p>

                {edu.description && (
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <span>{edu.location}</span>
                </div>
                {edu.isCurrent && (
                  <span className="font-semibold text-primary">PNL Lhokseumawe</span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
