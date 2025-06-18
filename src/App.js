import React, { useEffect, useState } from "react";
import './App.css';

// Component imports
import Layout from './components/Layout';
import ProfileSection from './components/ProfileSection';
import FlagshipSection from './components/sections/FlagshipSection';
import TabNavigation from './components/TabNavigation';
import FeaturedSection from './components/sections/FeaturedSection';
import GameSection from './components/sections/GameSection';
import WebSection from './components/sections/WebSection';
import MLSection from './components/sections/MLSection';
import GraphicSection from './components/sections/GraphicSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('games');

  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'games':
        return <FeaturedSection />;
      case 'web':
        return <WebSection />;
      case 'ml':
        return <MLSection />;
      case 'graphics':
        return <GraphicSection />;
      default:
        return <FeaturedSection />;
    }
  };

  return (
    <Layout>
      {/* Profile Section */}
      <ProfileSection />
      
      {/* Flagship Project Section - Always Visible */}
      <FlagshipSection />
      
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Section */}
      <div className="content-container">
        {renderActiveSection()}
      </div>
    </Layout>
  );
}