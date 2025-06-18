import React from "react";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'games', label: 'Featured Games' },
    { id: 'web', label: 'Web Applications' },
    { id: 'ml', label: 'ML & Data Science' },
    { id: 'graphics', label: 'Graphic Design & Video' }
  ];

  return (
    <div className="mb-10 overflow-x-auto">
      <div className="min-w-max border-b border-gray-700">
        <nav className="flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-6 font-medium text-sm focus:outline-none transition-all duration-200 relative
              ${activeTab === tab.id 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></span>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;