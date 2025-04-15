import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-5 flex flex-col transition-all duration-300 hover:transform hover:scale-102 hover:shadow-xl hover:shadow-blue-800/10 cursor-pointer overflow-hidden group"
      onClick={() => onClick(project)}
    >
      {project.image && (
        <div className="h-48 overflow-hidden rounded-lg mb-4 bg-gray-900 flex items-center justify-center">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
          />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300 transition-colors">{project.title}</h2>
      <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.github && <a href={project.github} className="text-xs bg-gray-700 hover:bg-gray-600 text-blue-300 px-3 py-1 rounded hover:text-blue-200 transition-colors" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>GitHub</a>}
        {project.play && <a href={project.play} className="text-xs bg-gray-700 hover:bg-gray-600 text-green-300 px-3 py-1 rounded hover:text-green-200 transition-colors" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Play</a>}
        {project.video && <a href={project.video} className="text-xs bg-gray-700 hover:bg-gray-600 text-red-300 px-3 py-1 rounded hover:text-red-200 transition-colors" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Video</a>}
        {project.website && <a href={project.website} className="text-xs bg-gray-700 hover:bg-gray-600 text-purple-300 px-3 py-1 rounded hover:text-purple-200 transition-colors" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Website</a>}
        {project.kaggle && <a href={project.kaggle} className="text-xs bg-gray-700 hover:bg-gray-600 text-cyan-300 px-3 py-1 rounded hover:text-cyan-200 transition-colors" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Kaggle</a>}
      </div>
    </div>
  );
};

export default ProjectCard;