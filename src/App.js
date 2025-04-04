import React, { useEffect, useState, useRef } from "react";

// === Image Imports ===
import cityBuilderImage from "./images/City_Builder_Game.png";
import spaceGameImage from "./images/Space_Game.png";
import rpgImage from "./images/Midieval_Fantasy_RPG.png";
import nycImage from "./images/NYC_School_Closures.png";
import marchMadnessImage from "./images/March_Madness_Predictor.png";
import dungeonExplorerImage from "./images/dungeon-explorer.png";
import spaceShooterImage from "./images/space-shooter.png";
import match3Image from "./images/match-3-puzzle.png";
import gridBuilderImage from "./images/grid-resource-management.png";
import electionSimImage from "./images/election-simulation.png";
import userManagerImage from "./images/user-management.png";
import restaurantImage from "./images/restaurant-website.png";
import fastFoodImage from "./images/fast-food-chain.png";
import emailSystemImage from "./images/email-design-system-no-code.png";
import wellValidationImage from "./images/well-validation-system-no-code.png";
import flappyBirdImage from "./images/flappy-bird.png";
import breakoutImage from "./images/breakout.png";
import match3CS50Image from "./images/match3.png";
import pokemonImage from "./images/pokemon.png";
import zeldaImage from "./images/zelda.png";
import marioImage from "./images/mario.png";
import angryBirdsImage from "./images/angry-birds.png";
import cafeDashImage from "./images/cafe-dash.png";
import dreadHallsImage from "./images/dreadhalls.png";
import portalsImage from "./images/portals.png";
import helicopterImage from "./images/helicopter.png";
import pongImage from "./images/pong.png";
// Add your profile picture import
import profileImage from "./images/profile-photo.jpg"; // You'll need to add this image to your project

// === Components ===
const Layout = ({ children }) => {
  const sections = [
    { id: "profile", title: "About Me" }, // Added new section
    { id: "featured-games", title: "Featured Game Projects" },
    { id: "ml-projects", title: "Machine Learning & Data Science" },
    { id: "mini-games", title: "Mini Game Projects" },
    { id: "web-apps", title: "Web Applications & Tools" },
    { id: "cs50-games", title: "CS50 Game Development Projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 font-sans flex flex-col md:flex-row">
      {/* Navigation Menu - Fixed on left for larger screens, hidden on mobile */}
      <div className="md:w-64 md:min-w-64 bg-white shadow-md md:h-screen md:sticky md:top-0 overflow-auto p-4 hidden md:block">
        <h2 className="text-xl font-bold text-blue-900 mb-6">Navigation</h2>
        <ul className="space-y-2">
          {sections.map(section => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`} 
                className="block px-4 py-2 rounded hover:bg-blue-100 text-blue-800 transition duration-200"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Navigation Dropdown - Only visible on small screens */}
      <div className="bg-white p-3 shadow-md sticky top-0 z-40 md:hidden">
        <select 
          onChange={(e) => window.location.hash = e.target.value} 
          className="w-full p-2 border rounded text-blue-800 bg-white"
          defaultValue=""
        >
          <option value="" disabled>Jump to section...</option>
          {sections.map(section => (
            <option key={section.id} value={`#${section.id}`}>
              {section.title}
            </option>
          ))}
        </select>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-screen-xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-sm">
            Ethan Perello Projects
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

// Profile Section Component
const ProfileSection = () => {
  return (
    <div className="mb-16" id="profile">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Profile Picture */}
          <div className="w-48 h-48 flex-shrink-0">
            <img 
              src={profileImage} 
              alt="Ethan Perello" 
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>
          
          {/* Bio and Information */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              Hello! I'm Ethan Perello, a software engineer and game developer with a passion for creating
              interactive experiences. I specialize in Unity development, React applications, and machine
              learning projects. With a background in computer science and years of experience in software
              development, I bring creative solutions to complex problems.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Contact Information</h3>
              <p className="text-gray-700">
                <span className="font-medium">Email:</span> ethan.perello@example.com<br />
                <span className="font-medium">Location:</span> San Francisco, CA
              </p>
            </div>
            
            {/* Links Section */}
            <div className="flex flex-wrap gap-3">
              <a 
                href="/resume.pdf" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a 
                href="https://github.com/EthanPerello" 
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ethanperello" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-200 flex items-center"
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

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  // Click outside to close
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-overlay overflow-auto"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800">{project.title}</h2>
            <button 
              onClick={onClose}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          
          {project.image && (
            <div className="flex justify-center mb-4 sm:mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl w-full" 
              />
            </div>
          )}
          
          <div className="text-gray-700 whitespace-pre-line mb-4 sm:mb-6">{project.description}</div>
          
          <div className="flex flex-wrap gap-2">
            {project.github && <a href={project.github} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">GitHub</a>}
            {project.play && <a href={project.play} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Play</a>}
            {project.video && <a href={project.video} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Video</a>}
            {project.website && <a href={project.website} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Website</a>}
            {project.kaggle && <a href={project.kaggle} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Kaggle</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="bg-white rounded-2xl shadow-xl p-4 flex flex-col transition duration-200 transform hover:scale-105 cursor-pointer"
    onClick={() => onClick(project)}
  >
    {project.image && (
      <img 
        src={project.image} 
        alt={project.title} 
        className="rounded-xl mb-4 w-full" 
      />
    )}
    <h2 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h2>
    <p className="text-sm text-gray-700 whitespace-pre-line mb-4 line-clamp-3">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.github && <a href={project.github} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>GitHub</a>}
      {project.play && <a href={project.play} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Play</a>}
      {project.video && <a href={project.video} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Video</a>}
      {project.website && <a href={project.website} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Website</a>}
      {project.kaggle && <a href={project.kaggle} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Kaggle</a>}
    </div>
  </div>
);

const CollapsibleSection = ({ title, description, children, id }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-10" id={id}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-2xl font-semibold mb-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-200"
      >
        {open ? `▼ ${title}` : `▶ ${title}`}
      </button>
      {open && (
        <>
          {description && <p className="text-gray-600 mb-4">{description}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
        </>
      )}
    </div>
  );
};

const featuredGames = [
  {
    title: "On-Chain City Builder",
    image: cityBuilderImage,
    description: `A blockchain-integrated multiplayer city-building game developed in Unity using the Dojo engine. Originally created for a Dojo Game Jam and expanded into a full game, this project combines city simulation with blockchain technology.

Players purchase land tiles on a dynamically expanding grid and construct residential, commercial, and industrial buildings that affect resident happiness and income rates. The game features real-time economy simulation where buildings must be strategically placed adjacent to roads.

All game data including player balances, tile ownership, and building states are recorded on-chain using Dojo and Starknet. The game includes comprehensive camera controls, building menus, and an interactive leaderboard where players compete for profitability in a persistent online world.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure",
    image: spaceGameImage,
    description: `A 3D action-adventure game built in Unity for Harvard's edX Game Development course. This project demonstrates comprehensive Unity development with player mechanics, AI systems, and level design.

The game features NavMesh-driven enemy AI with multiple behavior states (wandering, chasing, attacking) based on proximity detection. Players navigate a 3D environment, engage in real-time combat with enemies, collect gems to progress, and manage their health resources.

Implemented systems include animation state management, collision detection for combat, UI elements like health bars and collectible counters, and game state transitions between menu, gameplay, win, and game over screens. Audio management includes persistent background music and contextual sound effects for player actions and enemy encounters.`,
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game",
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `A feature-rich RPG built in Unity showcasing character progression, AI systems, and custom assets. Players can battle enemies, complete quests, and level up characters in a medieval fantasy world.

The game features a comprehensive character customization system with selectable appearance options and equipment that affect gameplay stats. Combat mechanics support both melee weapons (swords) and ranged weapons (bows) with appropriate animations and projectile physics.

Enemy AI is implemented using Unity's NavMesh system, providing goblins and skeletons with patrol patterns, chase behaviors, and attack sequences. The game also includes quests with objectives and rewards, an inventory system, and AI companion pets that follow the player and assist in gameplay.`,
    github: "https://github.com/EthanPerello/MidievalFantasyRPG",
    play: "https://ethanperello.itch.io/midieval-fantasy-rpg"
  }
];


const mlProjects = [
  {
    title: "NYC School Closure Predictor",
    image: nycImage,
    description: `A data science project analyzing New York high school student outcomes and school closures, created in collaboration with Adam Goodman. This project explored whether performance metrics such as graduation and dropout rates could predict school closures and revealed key subgroup disparities.
  
  Data was collected from New York State and NYC databases, focusing on graduation rates, GED attainment, and dropout percentages across race and gender. Dropout rates among male and Black/African American students emerged as strong indicators of future closures.
  
  We used logistic regression to train a predictive model on 2015 data, achieving 99.1% accuracy in cross-validation, and applied it to 2021 school data to identify at-risk institutions.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `A Kaggle competition project focused on predicting NCAA March Madness basketball tournament outcomes. The project combined historical tournament data, team statistics, and pre-tournament betting odds to create predictive models for game results.

Feature engineering created predictive variables including seed differences, team ratings differences, win percentage discrepancies, and average margin of victory. Multiple machine learning approaches were implemented including Logistic Regression and XGBoost with rigorous validation using season-by-season cross-validation.

The project's most significant innovation was incorporating betting odds data, which substantially improved predictive accuracy by capturing market insights about team strengths, injuries, and public sentiment. The final submission included two top-performing models evaluated using the competition's log-loss metric.`,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }
];

const miniGames = [
  {
    title: "Grid Resource Management",
    image: gridBuilderImage,
    description: "A strategic simulation game focused on resource collection and tile management. Players interact with different tile types to harvest resources and modify the environment. Features include resource tracking, context menu interaction systems, and balanced game economy."
  },
  {
    title: "Dungeon Explorer",
    image: dungeonExplorerImage,
    description: "A React-based roguelike featuring procedural dungeon generation and keyboard controls. Implements user authentication with secure credential storage and generated dungeon layouts that change with each playthrough."
  },
  {
    title: "Space Shooter",
    image: spaceShooterImage,
    description: "An arcade-style space shooter with physics-based movement and particle effects. Features include high score tracking with local storage, progressive difficulty scaling, and visual effects for explosions and weapon fire."
  },
  {
    title: "Matching Puzzle Game",
    image: match3Image,
    description: "A React/TypeScript puzzle game with scoring and combo mechanics. Players match tiles to create cascading effects with multipliers for consecutive matches. Implements custom React hooks for state management with TypeScript for type safety."
  },
  {
    title: "Café Dash",
    image: cafeDashImage,
    description: "A time-management game where players serve customers and manage restaurant workflow. Features customer patience mechanics, multi-stage service processes, and progressive difficulty with increasing customer frequency."
  }
];

const miniWebApps = [
  {
    title: "Election Simulation",
    image: electionSimImage,
    description: "An interactive election simulator with polling and vote tabulation features. Users can create simulated elections with dynamically generated candidates for different political positions and view real-time vote counts with visual representations of results."
  },
  {
    title: "User Manager Dashboard",
    image: userManagerImage,
    description: "A TypeScript React admin dashboard for user management with form validation and role-based access control. Features include efficient data fetching with React Query, toast notifications for operation feedback, and responsive design across device sizes."
  },
  {
    title: "Restaurant Website",
    image: restaurantImage,
    description: "A React Router restaurant website with food menu categories, nutritional information, and location finder. Implements client-side routing for seamless navigation and accessibility-focused design adhering to WCAG guidelines."
  },
  {
    title: "Fast Food Finder",
    image: fastFoodImage,
    description: "A restaurant interface featuring detailed menu items with nutritional information and location services. Implements responsive layouts that adapt to different screen sizes and consistent component design across the application."
  },
  {
    title: "Email Design System",
    image: emailSystemImage,
    description: "A system for building responsive email templates with React components. Features reusable, email-client compatible components that render consistently across Gmail, Outlook, and Apple Mail with responsive design for different devices."
  },
  {
    title: "Well Validation Toolkit",
    image: wellValidationImage,
    description: "A data visualization application for analyzing oil well measurements. Features interactive graphs with zoom capabilities, multi-well comparison functionality, and anomaly detection to identify potential issues in measurement data."
  }
];
const cs50Games = [
  {
    title: "Pong",
    image: pongImage,
    video: "https://www.youtube.com/watch?v=r5pTh3Sn_Pk",
    description: "The first project in CS50's Game Development course, implemented in LÖVE2D with Lua. This recreation of the classic Atari game features two-player paddle control, collision detection systems, and basic game state management. The project demonstrates fundamental game development concepts including rendering, input handling, and simple physics."
  },
  {
    title: "Flappy Bird",
    image: flappyBirdImage,
    video: "https://www.youtube.com/watch?v=cguqEUa7aKc",
    description: "A LÖVE2D recreation of the popular mobile game, incorporating procedural generation for pipes, infinite scrolling, and collision detection. This project focuses on implementing gravity physics, randomized obstacles, and the game's signature one-button control scheme. Includes state machine logic for managing different game states (title screen, gameplay, game over)."
  },
  {
    title: "Breakout",
    image: breakoutImage,
    video: "https://www.youtube.com/watch?v=sVcEJVXvUBk&t=76s&pp=0gcJCb8Ag7Wk3p_U",
    description: "An implementation of the Atari classic in LÖVE2D, featuring levels of increasing difficulty, brick layouts, powerups, and ball/paddle physics. This project demonstrates more complex game mechanics including bouncing physics based on collision angles and persistent progression between levels."
  },
  {
    title: "Match-3",
    image: match3CS50Image,
    video: "https://www.youtube.com/watch?v=uRAvr6jjvD4&t=2s",
    description: "A Bejeweled-style matching puzzle game built in LÖVE2D that introduces tile-swapping mechanics, match detection algorithms, and animated transitions. This project focuses on grid-based gameplay and implementing timed game sessions with score tracking."
  },
  {
    title: "Pokémon",
    image: pokemonImage,
    video: "https://www.youtube.com/watch?v=vpGzT32EYfo&t=15s",
    description: "A turn-based battle system inspired by Pokémon, built in LÖVE2D. This project focuses on implementing state-based combat logic, menu systems, and entity statistics. Includes basic AI for opponent decisions and text-based battle narration."
  },
  {
    title: "The Legend of Zelda",
    image: zeldaImage,
    video: "https://www.youtube.com/watch?v=grg8zPM8IXQ",
    description: "A top-down adventure game inspired by early Legend of Zelda titles, implemented in LÖVE2D. Features room-based dungeon design, basic enemy AI, and player-world interaction. This project demonstrates tile-based level design and inter-room transitions."
  },
  {
    title: "Super Mario Bros",
    image: marioImage,
    video: "https://www.youtube.com/watch?v=EtEtVQGwuf4",
    description: "A side-scrolling platformer based on the NES classic, built in LÖVE2D. This project incorporates tile-based level design, platforming physics with variable jump heights, and basic enemy behavior. Demonstrates techniques for handling sprite animation and scrolling camera systems."
  },
  {
    title: "Angry Birds",
    image: angryBirdsImage,
    video: "https://www.youtube.com/watch?v=O5gGkmil-Qg",
    description: "A physics-based game created in LÖVE2D using Box2D for realistic physics simulation. This project focuses on implementing projectile trajectories, destructible structures, and the slingshot launch mechanic, introducing concepts of rigid body physics in game development."
  },
  {
    title: "Dread Halls",
    image: dreadHallsImage,
    video: "https://www.youtube.com/watch?v=K3X_o2Jlahg&t=2s",
    description: "A first-person horror game built in Unity, marking the transition to 3D game development. Features procedurally generated maze-like environments, atmospheric lighting, and enemy AI. This project demonstrates 3D movement systems and creating tension through limited visibility and audio cues."
  },
  {
    title: "Portals",
    image: portalsImage,
    video: "https://www.youtube.com/watch?v=wftNRio_PEk",
    description: "A Unity-based 3D puzzle game inspired by Portal, focusing on teleportation mechanics and spatial puzzles. This project demonstrates advanced concepts in 3D rendering, teleportation effects, and physics-based puzzle design where objects maintain momentum through portals."
  },
  {
    title: "3D Helicopter Game",
    image: helicopterImage,
    video: "https://www.youtube.com/watch?v=l4muAD4axtU",
    description: "A Unity 3D helicopter game where players navigate through obstacles. This project introduces rigidbody physics in 3D space, obstacle avoidance gameplay, and particle systems. Features procedurally generated terrain and obstacle courses with increasing difficulty."
  }
];
export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      {/* Added Profile Section */}
      <ProfileSection />
      
      <CollapsibleSection
        id="featured-games"
        title="Featured Game Projects"
        description="Featured Unity and blockchain-integrated games demonstrating system design, AI, multiplayer, and polished gameplay."
      >
        {featuredGames.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="ml-projects"
        title="Machine Learning & Data Science"
        description="Real-world data projects using predictive modeling, cross-validation, and data visualization."
      >
        {mlProjects.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="mini-games"
        title="Mini Game Projects"
        description="Smaller games built with strong mechanics and fast iteration. Arcade shooters, puzzle games, and UI polish."
      >
        {miniGames.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="web-apps"
        title="Web Applications & Tools"
        description="Frontend and full-stack apps including admin tools, simulations, dashboards, and production-quality interfaces."
      >
        {miniWebApps.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="cs50-games"
        title="CS50 Game Development Projects"
        description="Games built during Harvard's CS50 Game Dev course using LÖVE2D. Each game recreates core mechanics from a classic title."
      >
        {cs50Games.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={closeModal} 
      />
    </Layout>
  );
}