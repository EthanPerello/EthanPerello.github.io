import React, { useEffect } from "react";
import ProjectMediaSlider from "./ProjectMediaSlider";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);
  
  // Click outside to close
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 modal-overlay overflow-auto backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto animate-modalFadeIn">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{project.title}</h2>
            <button 
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          
          {project.media ? (
            <ProjectMediaSlider media={project.media} />
          ) : project.image && (
            <div className="flex justify-center mb-6 bg-gray-900 p-4 rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-lg max-h-96 object-contain" 
              />
            </div>
          )}
          
          <div className="text-gray-300 whitespace-pre-line mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </div>
          
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a 
                href={project.github} 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-blue-300 hover:text-blue-200 px-4 py-2 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.play && (
              <a 
                href={project.play} 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-green-300 hover:text-green-200 px-4 py-2 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Play Game
              </a>
            )}
            {project.video && (
              <a 
                href={project.video} 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-red-300 hover:text-red-200 px-4 py-2 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Watch Video
              </a>
            )}
            {project.website && (
              <a 
                href={project.website} 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-purple-300 hover:text-purple-200 px-4 py-2 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Visit Website
              </a>
            )}
            {project.kaggle && (
              <a 
                href={project.kaggle} 
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-cyan-300 hover:text-cyan-200 px-4 py-2 rounded-lg transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                View on Kaggle
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;