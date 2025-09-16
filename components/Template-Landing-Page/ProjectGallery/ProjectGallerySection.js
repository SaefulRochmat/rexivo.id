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
    <div className='px-1 py-2'> 
      <div className="min-h-screen bg-gradient-to-br rounded-lg from-slate-900/50 via-purple-900/40 to-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Proyek Kami
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
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
                    ? "bg-white/20 text-white border-white/30 shadow-lg"
                    : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/15 hover:text-white"
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
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
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
                      <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-purple-400/50">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4 md:p-6">
                    <h3 className="font-bold text-white text-lg md:text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-xs rounded-md border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-gray-500/30">
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
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl text-gray-300 font-medium mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category</p>
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
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors duration-300 group"
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
                <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-purple-400/50">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
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
                      className="px-3 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 text-sm rounded-lg border border-blue-500/30 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <User className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-400">Client:</span>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-gray-400">Completed:</span>
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
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
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
