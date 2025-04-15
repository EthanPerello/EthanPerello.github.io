import React, { useState } from "react";
import { featuredProjects } from "../../data/projects";
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
        Featured Projects
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Highlighted projects showcasing my expertise in game development, AI integration, and web applications.
        These projects represent the pinnacle of my work, combining complex technologies and polished user experiences.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
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