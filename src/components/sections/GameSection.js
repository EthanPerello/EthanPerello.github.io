import React, { useState } from "react";
import { gameProjects } from "../../data/projects";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

const GameSection = () => {
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

  const renderSubsectionContent = () => {
    switch (activeSubsection) {
      case "featured":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.featured.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        );
      case "other":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.other.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        );
      case "cs50":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameProjects.cs50.map((project, index) => (
              <ProjectCard key={index} project={project} onClick={handleProjectClick} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Game Development
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Games developed with Unity and other platforms, featuring system design, AI, multiplayer mechanics, and polished gameplay.
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
            Featured Games
          </button>
          <button
            className={`px-5 py-3 font-medium focus:outline-none transition-colors ${
              activeSubsection === "other" 
                ? "bg-gray-700 text-blue-400" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveSubsection("other")}
          >
            Other Games
          </button>
          <button
            className={`px-5 py-3 font-medium focus:outline-none transition-colors ${
              activeSubsection === "cs50" 
                ? "bg-gray-700 text-blue-400" 
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveSubsection("cs50")}
          >
            CS50 Games
          </button>
        </div>
      </div>
      
      {/* Current Subsection Content */}
      {renderSubsectionContent()}
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default GameSection;