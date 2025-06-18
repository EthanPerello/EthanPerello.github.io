import React, { useState } from "react";
import { flagshipProject } from "../../data/projects";
import ProjectModal from "../ProjectModal";

const FlagshipSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleProjectClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        🏆 Flagship Project
      </h2>
      
      <p className="text-gray-300 mb-8 max-w-4xl">
        My flagship achievement: a production-ready AI platform that revolutionizes character creation for game developers and storytellers.
      </p>
      
      {/* Flagship Project Card - Larger, Hero Style */}
      <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-800/20 cursor-pointer overflow-hidden group"
           onClick={handleProjectClick}>
        
        {/* Header with Title and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors mb-2">
              {flagshipProject.title}
            </h3>
            <p className="text-lg text-purple-400 font-medium">AI Character Platform for Game Developers (v0.30.0)</p>
          </div>
          
          {/* Action Links */}
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            {flagshipProject.github && (
              <a 
                href={flagshipProject.github} 
                className="bg-gray-700 hover:bg-gray-600 text-blue-300 px-4 py-2 rounded-lg hover:text-blue-200 transition-colors flex items-center" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View Code
              </a>
            )}
            {flagshipProject.website && (
              <a 
                href={flagshipProject.website} 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        {flagshipProject.image && (
          <div className="h-64 md:h-80 overflow-hidden rounded-lg mb-6 bg-gray-900 flex items-center justify-center">
            <img 
              src={flagshipProject.image} 
              alt={flagshipProject.title} 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        )}

        {/* Project Description */}
        <p className="text-gray-300 leading-relaxed text-lg line-clamp-4">
          {flagshipProject.description}
        </p>
        
        {/* Click to read more indicator */}
        <div className="mt-4 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
          Click to read more and view additional details →
        </div>
      </div>
      
      <ProjectModal 
        project={flagshipProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default FlagshipSection;