'use client'

import { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';


// Mock data untuk projects
const projectsData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    category: "Web Company",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Modern corporate website dengan design yang clean dan professional untuk perusahaan teknologi terdepan.",
    technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://techcorp.demo",
    githubUrl: "https://github.com/techcorp",
    completedDate: "2024-08-15",
    client: "TechCorp Ltd"
  },
  {
    id: 2,
    name: "StartupLaunch",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    description: "Landing page yang engaging untuk startup dengan animasi yang smooth dan konversi tinggi.",
    technologies: ["Vue.js", "Nuxt.js", "GSAP", "TailwindCSS"],
    demoUrl: "https://startuplaunch.demo",
    githubUrl: "https://github.com/startup",
    completedDate: "2024-07-22",
    client: "StartupLaunch Inc"
  },
  {
    id: 3,
    name: "FashionHub Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Platform e-commerce modern untuk fashion dengan fitur lengkap dan user experience yang optimal.",
    technologies: ["React", "Redux", "Stripe", "Node.js"],
    demoUrl: "https://fashionhub.demo",
    githubUrl: "https://github.com/fashion",
    completedDate: "2024-09-01",
    client: "FashionHub"
  },
  {
    id: 4,
    name: "HealthCare Plus",
    category: "Web Company",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    description: "Website untuk klinik kesehatan dengan sistem booking appointment online dan dashboard admin.",
    technologies: ["Angular", "TypeScript", "Firebase", "Bootstrap"],
    demoUrl: "https://healthcare.demo",
    githubUrl: "https://github.com/healthcare",
    completedDate: "2024-06-10",
    client: "HealthCare Plus"
  },
  {
    id: 5,
    name: "CryptoTracker Pro",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=400&fit=crop",
    description: "Real-time cryptocurrency tracking application dengan advanced charting dan portfolio management.",
    technologies: ["React", "Chart.js", "WebSocket", "Material-UI"],
    demoUrl: "https://cryptotracker.demo",
    githubUrl: "https://github.com/crypto",
    completedDate: "2024-08-30",
    client: "CryptoInvest"
  },
  {
    id: 6,
    name: "EduLearn Platform",
    category: "E-Learning",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    demoUrl: "https://edulearn.demo",
    githubUrl: "https://github.com/edulearn",
    completedDate: "2024-07-05",
    client: "EduTech Solutions"
  },
  {
    id: 7,
    name: "RestaurantPro",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    description: "Elegant landing page untuk restaurant mewah dengan menu online dan sistem reservasi.",
    technologies: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
    demoUrl: "https://restaurant.demo",
    githubUrl: "https://github.com/restaurant",
    completedDate: "2024-06-28",
    client: "Fine Dining Co"
  },
  {
    id: 8,
    name: "GadgetShop",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Toko online gadget dan elektronik dengan fitur comparison, review, dan payment gateway terintegrasi.",
    technologies: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    demoUrl: "https://gadgetshop.demo",
    githubUrl: "https://github.com/gadget",
    completedDate: "2024-08-12",
    client: "Tech Retail"
  }
];

const categories = ["All", "Web Company", "Landing Page", "E-Commerce", "Web App", "E-Learning"];

const ProjectGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

// Track window size → tentukan limit project
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

// Handle body scroll lock ketika modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);


  // Filter by category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  // Tentukan limit
  const projectLimit = windowWidth < 640 ? 3 : 6;
  const displayedProjects = filteredProjects.slice(0, projectLimit);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
   <div className='px-1 py-2'> 
   <div className="min-h-screen bg-gradient-to-br rounded-lg from-slate-900/50 via-purple-900/40 to-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            {"Discover the innovative solutions I've crafted with cutting-edge technologies"}
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
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 100}ms forwards`
              }}
            >
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
   </div>
   </div>
  );
};

// Extract Modal jadi komponen biar lebih clean
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
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
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
                    <p className="text-white font-medium">
                      {new Date(project.completedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
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
