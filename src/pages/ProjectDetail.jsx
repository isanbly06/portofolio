import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowLeft, Github, ExternalLink, Star, CheckCircle2, ShieldAlert,
  Cpu, Wrench, Layers, Award, Image as ImageIcon
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Footer } from '../components/layout/Footer';
import { projectsData } from '../data/projects';

/**
 * Halaman Detail Proyek / Case Study Teknis (`ProjectDetail`)
 * 
 * Menampilkan informasi lengkap case study proyek berdasarkan parameter URL `:slug`.
 * Fitur:
 * - Mengambil data proyek dari `projectsData` sesuai `slug`.
 * - Melakukan reset posisi scroll ke paling atas (`window.scrollTo(0, 0)`) saat slug berubah.
 * - Menampilkan tampilan fallback 404 jika slug tidak terdaftar di `projectsData`.
 * - Menyajikan metadata rincian: Peran (Role), Tech Stack, Overview, Masalah (Problem),
 *   Solusi (Solution), Tantangan Teknis (Challenges), Dampak/Hasil (Result), serta Link Repository/Demo.
 * 
 * @returns {JSX.Element} Elemen tampilan detail proyek atau tampilan tidak ditemukan.
 */
export const ProjectDetail = () => {
  /** @type {{ slug: string }} Parameter URL slug proyek */
  const { slug } = useParams();
  /** Hook navigasi React Router untuk berpindah halaman */
  const navigate = useNavigate();

  /** @type {import('../data/projects').ProjectItem | undefined} Data proyek yang cocok dengan slug */
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    // Reset posisi scroll layar ke paling atas saat halaman dibuka
    window.scrollTo(0, 0);
  }, [slug]);


  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <Helmet>
          <title>Project Tidak Ditemukan — Ikhsan Salsabilly</title>
        </Helmet>
        <h1 className="text-3xl font-extrabold text-primary mb-3">Case Study Tidak Ditemukan</h1>
        <p className="text-sm text-gray-600 mb-6">Project dengan URL slug "{slug}" tidak ditemukan dalam direktori karya.</p>
        <Button onClick={() => navigate('/')} variant="primary" icon={ArrowLeft}>
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} — Case Study | Ikhsan Salsabilly`}</title>
        <meta name="description" content={project.shortDescription} />
        <meta property="og:title" content={`${project.title} — Case Study Teknis`} />
        <meta property="og:description" content={project.shortDescription} />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col font-sans">
        
        {/* Header Top Bar */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-soft-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Daftar Projects</span>
            </Link>

            <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
              Technical Case Study
            </span>
          </div>
        </header>

        <main className="grow py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Hero Project Section */}
            <div className="bg-gradient-to-br from-primary-dark via-primary to-secondary p-8 sm:p-12 rounded-3xl text-white shadow-soft-lg relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="accent" className="font-bold">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge variant="soft" icon={Star} className="bg-white/20 text-white border-white/30 font-bold">
                    Featured Case Study
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-soft leading-relaxed max-w-3xl mb-8">
                {project.shortDescription}
              </p>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/15">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    icon={Github}
                  >
                    Repository GitHub
                  </Button>
                )}

                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    icon={ExternalLink}
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Live Demo Project
                  </Button>
                )}
              </div>
            </div>

            {/* 2. Project Thumbnail / Visual Showcase */}
            <div className="bg-white p-3 rounded-3xl border border-gray-100 shadow-soft-md overflow-hidden">
              <img
                src={project.thumbnail}
                alt={`Case Study ${project.title}`}
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
              />
            </div>

            {/* 3. Key Case Study Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-soft-light/40 p-6 rounded-2xl border border-soft/50">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span>Peran / Role</span>
                </div>
                <p className="text-xs text-gray-700 font-semibold leading-relaxed">
                  {project.role}
                </p>
              </div>

              <div className="bg-soft-light/40 p-6 rounded-2xl border border-soft/50 md:col-span-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm mb-2">
                  <Layers className="w-4 h-4 text-accent" />
                  <span>Tech Stack Utama</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-soft/60 text-xs font-bold text-primary shadow-soft-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* 4. Overview, Problem & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Overview & Features */}
              <div className="lg:col-span-7 space-y-8">
                
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft-sm">
                  <h2 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span>Project Overview</span>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft-sm">
                  <h2 className="text-xl font-extrabold text-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span>Fitur Utama Sistem</span>
                  </h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Problem & Solution */}
              <div className="lg:col-span-5 space-y-8">
                
                <div className="bg-red-50/60 p-6 rounded-3xl border border-red-100">
                  <h3 className="text-base font-extrabold text-red-900 mb-2 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Masalah / Problem</span>
                  </h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-soft-light/60 p-6 rounded-3xl border border-soft">
                  <h3 className="text-base font-extrabold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Solusi yang Diterapkan</span>
                  </h3>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

              </div>

            </div>

            {/* 5. Technical Challenges & Implementation */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft-sm space-y-6">
              <h2 className="text-xl font-extrabold text-primary flex items-center gap-2">
                <Wrench className="w-5 h-5 text-accent" />
                <span>Tantangan Teknis & Solusi Kode</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tantangan Utamanya:</h3>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-soft-light/50 border border-soft">
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Pendekatan Solusi Teknis:</h3>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {project.technicalSolution}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="p-5 rounded-2xl bg-primary text-white flex items-start gap-4">
                <div className="p-2 rounded-xl bg-accent text-primary shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-sm text-accent mb-1">Hasil Akhir & Dampak:</h4>
                  <p className="text-xs text-soft leading-relaxed">{project.result}</p>
                </div>
              </div>
            </div>

            {/* 6. Bottom Navigation CTA */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
              <Button
                onClick={() => navigate('/#projects')}
                variant="outline"
                icon={ArrowLeft}
              >
                Kembali ke Daftar Projects
              </Button>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    icon={Github}
                  >
                    GitHub Code
                  </Button>
                )}
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};
