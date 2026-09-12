import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowRight, Star, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projectsData, projectCategories } from '../../data/projects';

/**
 * Komponen Galeri Proyek & Portfolio (`ProjectsSection`)
 * 
 * Menampilkan kartu daftar proyek portofolio dengan filter kategori interaktif (Tab menu).
 * Fitur:
 * - Filter kategori proyek berdasarkan state `selectedCategory` ('Semua', 'Web App', 'Database', dll).
 * - Animasi pergantian filter menggunakan `framer-motion` `AnimatePresence`.
 * - Tautan menuju halaman detail case study (`/projects/:slug`).
 * - Tautan luar ke repository GitHub proyek.
 * 
 * @returns {JSX.Element} Elemen section Projects dengan ID `projects`.
 */
export const ProjectsSection = () => {
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} Kategori proyek yang terpilih */
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  /** @type {Array<import('../../data/projects').ProjectItem>} Daftar proyek yang disaring berdasarkan kategori */
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'Semua') return true;
    return (
      project.category === selectedCategory ||
      (project.secondaryCategories && project.secondaryCategories.includes(selectedCategory))
    );
  });


  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-light text-primary font-semibold text-xs uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Karya & Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Galeri <span className="text-secondary">Project Terpilih</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Eksplorasi hasil pengerjaan aplikasi web, basis data, eksplorasi AI, dan proyek perkuliahan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ${
                  isSelected
                    ? 'bg-primary text-white shadow-soft-sm scale-105'
                    : 'bg-soft-light/70 text-gray-700 hover:bg-soft hover:text-primary'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-soft-sm hover:shadow-soft-lg hover:border-soft transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Header / Media Thumbnail */}
                  <div>
                    <div className="relative aspect-video bg-soft-light overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={`Thumbnail ${project.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/projects/portfolio.svg';
                        }}
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="accent" icon={Star} className="shadow-soft-sm font-bold">
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <Badge variant="primary" className="bg-white/90 backdrop-blur-xs font-semibold">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0, 4).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-gray-100 text-[11px] font-medium text-gray-500">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer / Actions */}
                  <div className="px-6 pb-6 pt-0 border-t border-gray-50 mt-auto flex items-center justify-between">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors group/btn"
                    >
                      <span>Lihat Detail (Case Study)</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                        title="Repository GitHub"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 px-4 bg-soft-light/30 rounded-3xl border border-dashed border-soft max-w-md mx-auto"
            >
              <FolderGit2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-primary mb-2">Belum ada project pada kategori ini</h3>
              <p className="text-xs text-gray-500 mb-6">
                Tidak ada project yang sesuai dengan filter "{selectedCategory}". Silakan tampilkan semua project.
              </p>
              <Button
                onClick={() => setSelectedCategory('Semua')}
                variant="primary"
                size="sm"
                icon={RefreshCw}
              >
                Tampilkan Semua Project
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
