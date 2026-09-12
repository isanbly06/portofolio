import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Palette, FileCode, Atom, Layers, Server, Cpu, Database,
  Terminal, Binary, Code2, GitBranch, Laptop, HardDrive, Monitor,
  Brain, MessageSquare, ShieldCheck, HeartHandshake
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { skillsData } from '../../data/skills';

/**
 * Komponen Section Keahlian & Kemampuan (`SkillsSection`)
 * 
 * Menampilkan daftar keahlian teknis (Web Development, Backend/Database, Tools & VM)
 * serta soft skills interpersonal dalam bentuk kartu grid interaktif.
 * 
 * @returns {JSX.Element} Elemen section Skills dengan ID `skills`.
 */
export const SkillsSection = () => {
  /**
   * Helper pemeta nama string ikon menjadi komponen Ikon Lucide React.
   * Fallback ke ikon `Code` jika nama ikon tidak terdaftar.
   * 
   * @param {string} iconName Nama string ikon (contoh: 'Server', 'Atom', 'Database').
   * @returns {React.ElementType} Komponen ikon Lucide React.
   */
  const getIconComponent = (iconName) => {
    const icons = {
      Code, Palette, FileCode, Atom, Layers, Server, Cpu, Database,
      Terminal, Binary, Code2, GitBranch, Laptop, HardDrive, Monitor
    };
    return icons[iconName] || Code;
  };


  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white via-soft-light/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Keahlian & Kemampuan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Skill Teknis & <span className="text-secondary">Soft Skills</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Ringkasan penguasaan alat, bahasa pemrograman, framework, dan kemampuan interpersonal.
          </p>
        </div>

        {/* Technical Skills Categorized Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <Code className="w-5 h-5 text-accent" />
            <span>Technical Capabilities</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.technical.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-soft-sm hover:shadow-soft-md hover:border-soft transition-all duration-200"
              >
                <h4 className="font-bold text-lg text-primary mb-1">{cat.category}</h4>
                <p className="text-xs text-gray-500 mb-4">{cat.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const IconComp = getIconComponent(skill.icon);
                    return (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-soft-light/60 border border-soft/50 text-xs font-semibold text-primary hover:bg-soft transition-colors"
                      >
                        <IconComp className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills Cards */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            <span>Interpersonal & Soft Skills</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.softSkills.map((soft, sIdx) => (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                className="p-4 rounded-xl bg-white border border-gray-100 shadow-soft-sm hover:border-accent/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-bold text-sm text-primary">{soft.title}</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{soft.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
