'use client'

import { X, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import Image from 'next/image';
import { categories } from "@/constants/forTemplate2/ProjectsCategories";
import { useProjectsGallery } from "@/hooks/forComponentsTemplate/useProjectsGallery";

const ProjectGallerySection = () => {
  const {
    activeCategory,
    setActiveCategory,
    selectedProject,
    isModalOpen,
    displayedProjects,
    openModal,
    closeModal,
    filteredProjects
  } = useProjectsGallery();

  return (
    <div id="Projects" className='px-1 py-2'> 
      <div className="min-h-screen rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 shadow-[0_0_60px_rgba(2,6,23,0.25)]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text">
              Proyek Kami
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto">
              Temukan solusi inovatif yang kita buat dengan teknologi terkini
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 backdrop-blur-md border transform hover:scale-105 ${
                  activeCategory === category
                    ? "bg-slate-800 text-white border-slate-600 shadow-lg"
                    : "bg-slate-900/70 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-slate-900/80 border border-slate-800 shadow-2xl hover:shadow-sky-500/10 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 md:h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      width={500}
                      height={500}
                      alt={project.name}
                      // ✅ gambar pertama priority untuk LCP
                      priority={index === 0}
                      // ✅ sisanya lazy
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-sky-500/15 backdrop-blur-sm text-sky-300 text-sm rounded-lg border border-sky-500/30 font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-white text-lg md:text-xl mb-2 group-hover:text-sky-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-sky-500/15 backdrop-blur-sm text-sky-300 text-sm rounded-lg border border-sky-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-sky-500/15 backdrop-blur-sm text-sky-300 text-sm rounded-lg border border-sky-500/30">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-500 text-6xl mb-4">🔍</div>
              <h3 className="text-xl text-slate-300 font-medium mb-2">No projects found</h3>
              <p className="text-slate-500">Try selecting a different category</p>
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <ProjectModal project={selectedProject} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

// Extract Modal
const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-3xl shadow-2xl">
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 backdrop-blur-sm rounded-full transition-colors duration-300 group border border-slate-700"
        >
          <X className="w-5 h-5 text-white group-hover:text-gray-200" />
        </button>

        <div className="p-6 md:p-8">
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl mb-6">
            <Image
              src={project.image}
              width={800}
              height={600}
              alt={project.name}
              loading="lazy" // ✅ modal gambar lazy
              sizes="100vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{project.name}</h2>
                <span className="px-3 py-1 bg-sky-500/15 backdrop-blur-sm text-sky-300 text-sm rounded-lg border border-sky-500/30 font-medium">
                  {project.category}
                </span>
              </div>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                  <Tag className="w-5 h-5 text-purple-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-sky-500/15 backdrop-blur-sm text-sky-300 text-sm rounded-lg border border-sky-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-slate-300">
                  <User className="w-5 h-5 text-sky-300 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-slate-500">Client:</span>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-5 h-5 text-sky-300 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-slate-500">Completed:</span>
                    {/* ✅ sebaiknya pre-format di data, bukan di client */}
                    <p className="text-white font-medium">{project.completedDateFormatted}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/20"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-sm text-white font-medium rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallerySection;
