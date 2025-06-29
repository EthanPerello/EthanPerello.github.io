import React, { useState } from "react";
import { mainFeaturedProjects, additionalFeaturedProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const FeaturedSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        🎮 Main Game Projects
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        My core game development projects showcasing cutting-edge AI integration, blockchain innovation, and sophisticated game systems.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {mainFeaturedProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={handleProjectClick} 
          />
        ))}
      </div>

      {/* Additional Notable Projects */}
      <h3 className="text-2xl font-bold mb-6 text-gray-300">Additional Notable Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {additionalFeaturedProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={handleProjectClick} 
          />
        ))}
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default FeaturedSection;