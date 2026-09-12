import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Server, Globe, GraduationCap } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';

/**
 * Komponen Section Pengalaman Teknis & Aktivitas (`ExperienceSection`)
 * 
 * Menampilkan linimasa (timeline) vertikal pengalaman konfigurasi server VM, proyek freelance web,
 * dan proyek akademik dengan kartu detail bernode ikon di tengah.
 * 
 * @returns {JSX.Element} Elemen section Experience dengan ID `experience`.
 */
export const ExperienceSection = () => {
  /**
   * Helper penentu ikon node berdasarkan ID pengalaman.
   * 
   * @param {string} id ID pengalaman (contoh: 'server-vm', 'freelance-web').
   * @returns {React.ElementType} Komponen ikon Lucide.
   */
  const getExperienceIcon = (id) => {
    switch (id) {
      case 'server-vm':
        return Server;
      case 'freelance-web':
        return Globe;
      default:
        return GraduationCap;
    }
  };


  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white via-soft-light/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pengalaman Teknis & Proyek</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Pengalaman & <span className="text-secondary">Aktivitas</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Rekam jejak eksperimen server VM, proyek web freelance, dan pengembangan akademik.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-soft/40">
          {experienceData.map((exp, idx) => {
            const IconComp = getExperienceIcon(exp.id);
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Central Node Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-primary shadow-soft-sm flex items-center justify-center text-primary z-10">
                  <IconComp className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? 'sm:pr-4' : 'sm:pl-4'}`}>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-soft-sm hover:shadow-soft-md hover:border-soft transition-all duration-200">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                        {exp.category}
                      </span>
                      <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-secondary-dark font-medium mb-3">
                      {exp.location}
                    </p>
                    
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-xs text-gray-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badge Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-50">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded-md bg-soft-light text-[11px] text-primary font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
