// hooks/forComponentsTemplate/useProjectsGallery.js
import { useState, useEffect } from "react";
import { projectsData } from "@/constants/forTemplate2/projectsData";

export const useProjectsGallery = () => {
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
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
  }, [isModalOpen]);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

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

  return {
    activeCategory,
    setActiveCategory,
    selectedProject,
    isModalOpen,
    displayedProjects,
    openModal,
    closeModal,
    filteredProjects
  };
};
