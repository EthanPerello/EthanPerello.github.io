import React, { useState } from "react";
import { mlProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const MLSection = () => {
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
        ML & Data Science
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Real-world data projects using predictive modeling, statistical analysis, and data visualization.
        These projects showcase my ability to extract insights from complex datasets and build practical machine learning solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {mlProjects.map((project, index) => (
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

export default MLSection;