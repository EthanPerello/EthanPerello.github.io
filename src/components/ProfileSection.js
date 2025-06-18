import React from "react";
import profileImage from "../images/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <div className="mb-12" id="profile">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Picture */}
          <div className="w-48 h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/20">
            <img 
              src={profileImage} 
              alt="Ethan Perello" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Bio and Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a software developer and game developer specializing in AI-powered applications, game development, 
              and interactive tools. I create immersive experiences and developer tools that combine advanced AI 
              capabilities with intuitive design, always focusing on robust systems and exceptional user experience.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My flagship project is <strong className="text-blue-400">NPC Forge</strong>, a full-stack AI platform 
              I built to revolutionize character creation for game developers and storytellers (v0.30.0 with 30+ releases). 
              It integrates 6+ OpenAI models to generate detailed characters with AI portraits, real-time chat conversations, 
              and advanced editing capabilities. I also develop games across multiple genres, from blockchain-integrated 
              multiplayer simulations to complex RPGs with AI systems.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Contact Information</h3>
              <p className="text-gray-300">
                <span className="font-medium text-white">Email:</span> ethanperello@gmail.com<br />
                <span className="font-medium text-white">Location:</span> New York, New York
              </p>
            </div>
            
            {/* Links Section */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="/resume.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center shadow-md shadow-blue-600/20"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a 
                href="https://npc-forge.vercel.app" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center shadow-md shadow-purple-600/20"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                NPC Forge Demo
              </a>
              <a 
                href="https://github.com/EthanPerello" 
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center shadow-md"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a 
                href="http://linkedin.com/in/EthanPerello" 
                className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center shadow-md shadow-blue-700/20"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;