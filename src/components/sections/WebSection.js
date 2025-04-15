import React, { useState } from "react";
import { webProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const WebSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSubsection, setActiveSubsection] = useState("featured");

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
        Web Applications
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Frontend and full-stack apps including AI tools, admin dashboards, simulations, and production-quality interfaces.
      </p>
      
      {/* Subsection Navigation */}
      <div className="mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-wrap">
          <button
            className={`px-5 py-3 font-medium focus:outline-none transition-colors ${
              activeSubsection === "featured" 
                ? "bg-gray-700 text-blue-400" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveSubsection("featured")}
          >
            Featured Web Apps
          </button>
          <button
            className={`px-5 py-3 font-medium focus:outline-none transition-colors ${
              activeSubsection === "other" 
                ? "bg-gray-700 text-blue-400" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveSubsection("other")}
          >
            Other Web Apps
          </button>
        </div>
      </div>
      
      {/* Current Subsection Content */}
      {activeSubsection === "featured" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.featured.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={handleProjectClick} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.other.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={handleProjectClick} />
          ))}
        </div>
      )}
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default WebSection;