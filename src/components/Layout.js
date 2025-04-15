import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Ethan Perello Projects
          </h1>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ethan Perello. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="mailto:ethanperello@gmail.com" className="hover:text-blue-400 transition-colors">
              ethanperello@gmail.com
            </a>
            <a href="https://github.com/EthanPerello" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="http://linkedin.com/in/EthanPerello" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;