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

// === Components ===
const Layout = ({ children }) => {
  const sections = [
    { id: "featured-games", title: "Featured Game Projects" },
    { id: "ml-projects", title: "Machine Learning & Data Science" },
    { id: "mini-games", title: "Mini Game Projects" },
    { id: "web-apps", title: "Web Applications & Tools" },
    { id: "cs50-games", title: "CS50 Game Development Projects" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 font-sans flex">
      {/* Navigation Menu */}
      <div className="w-64 bg-white shadow-md fixed h-screen overflow-auto p-4 hidden md:block">
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
      
      <div className="md:ml-64 w-full">
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

// Project Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-90vh overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-blue-800">{project.title}</h2>
            <button 
              onClick={onClose}
              className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
            >
              ✕
            </button>
          </div>
          
          {project.image && (
            <div className="flex justify-center mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-xl w-full" 
              />
            </div>
          )}
          
          <div className="text-gray-700 whitespace-pre-line mb-6">{project.description}</div>
          
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
    description: `This project is a blockchain-integrated multiplayer city-building game developed in Unity using the Dojo engine. Initially created for a Dojo Game Jam, I expanded it into a full-featured game that demonstrates sophisticated systems integration between Unity and blockchain technologies.

The game is built around a dynamic, expanding grid system where players purchase tiles, each containing its own internal build grid for construction. Players strategically place residential, commercial, and industrial buildings that affect resident happiness and income generation rates. Buildings must be placed adjacent to roads, creating natural city planning constraints.

Key technical implementations include:
• Fully on-chain data storage via Dojo and Starknet for player balances, tile ownership, and building states
• Real-time economy simulation with continuous income generation based on resident happiness
• NavMesh-based AI for resident movement patterns
• Dynamic board expansion that creates new tiles when the existing grid is fully purchased
• Comprehensive camera controls (WASD movement, R/F zoom, T/G tilt)
• Responsive UI with real-time leaderboard displaying player rankings

The game features intricate economic balancing where resident happiness depends on proximity to jobs and entertainment, affecting income generation rates. Players compete for profitability in a persistent online world, demonstrating both blockchain integration skills and game design expertise.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure",
    image: spaceGameImage,
    description: `A complete 3D action-adventure game built in Unity as a final project for Harvard's edX Game Development course. This project showcases comprehensive Unity development skills including player mechanics, AI systems, UI development, and scene management.

Key technical implementations:
• Player systems with animation state management via Unity's Animator, collision detection, health tracking, and attack mechanics
• NavMesh-driven enemy AI with multiple behavior states (wandering, chasing, attacking) based on proximity detection
• Dynamic UI elements including responsive health bars and collectible counters
• Comprehensive game state management with transitions between main menu, gameplay, win, and game over screens
• Coroutine-based timing systems for attack cooldowns, animation sequencing, and scene transitions
• Physics-based interactions using Unity's collision system for attacks, damage, and item collection
• Audio management with persistent background music across scene transitions and contextual sound effects

The game features a complete gameplay loop where players navigate a 3D environment, engage in real-time combat with AI enemies, collect gems to progress, and manage health resources. Enemy encounters utilize Unity's NavMesh for pathfinding, showcasing AI implementation skills. Each enemy destroyed produces particle effects, plays sound effects, and contributes to the player's progression.

This project demonstrates strong foundational skills in Unity development, C# programming, and game design principles, all built independently from scratch.`,
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game",
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `A feature-rich RPG built in Unity featuring comprehensive character progression, AI systems, and custom assets. This project demonstrates advanced game development skills including complex state management, character customization, combat mechanics, and quest systems.

Key technical implementations:
• Character customization system with selectable gender, hairstyles, facial hair, skin color, and equipment, all dynamically affecting the player model
• Sophisticated combat mechanics supporting both melee (swords) and ranged weapons (bow) with projectile physics
• Advanced enemy AI for multiple enemy types (goblins, skeletons, bosses) with NavMesh-based movement, patrol patterns, chase behaviors, and attack sequences
• Complete progression system with experience points, leveling mechanics, and stat improvements
• Quest management system with objectives, rewards, and dynamic updates
• AI companion pets that follow players and assist in gameplay using NavMesh pathfinding
• Persistent data management across game sessions using Unity's PlayerPrefs system
• Inventory and equipment system with items affecting gameplay stats and combat effectiveness
• Physics-based environmental interactions using Unity's Rigidbody system
• Responsive third-person character controller with Cinemachine integration

The game integrates custom Blender-crafted models and animations with sophisticated game systems, creating a cohesive and immersive medieval fantasy experience. Players can battle enemies, complete quests for NPCs, manage inventory, and progress their character through a comprehensive leveling system.

This project showcases strong architecture skills through modular, expandable code design that enables future content expansion while maintaining system integrity.`,
    github: "https://github.com/EthanPerello/MidievalFantasyRPG",
    play: "https://ethanperello.itch.io/midieval-fantasy-rpg"
  }
];


const mlProjects = [
  {
    title: "NYC School Closure Predictor",
    image: nycImage,
    description: `In this data science project, I conducted an extensive analysis of New York high school student outcomes and school closures. The project's primary goal was to explore whether student performance data could predict school closures and understand how different student subgroups performed relative to each other.

Key technical implementation:
• Data acquisition from multiple authoritative sources (New York State Education System and City of New York databases)
• Comprehensive exploratory data analysis revealing significant performance disparities across demographic subgroups
• Data transformation and preprocessing to convert subgroup-specific metrics into variables suitable for statistical analysis
• Correlation analysis identifying key relationships between specific demographic performance metrics and school closure likelihood
• Development of a logistic regression predictive model achieving 99.1% accuracy in cross-validation tests
• Application of the trained model to new data (2021) to identify at-risk schools
• Comparative analysis between model predictions and historical closures to validate findings

The analysis revealed that dropout rates among male students and Black/African American students had stronger correlations with school closures than other metrics. The project demonstrated sophisticated predictive modeling techniques while acknowledging the limitations of statistical prediction in policy contexts.

This work showcases skills in data collection, transformation, statistical analysis, machine learning model development, and interpretation of results in a socially relevant context.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `In this project, I participated in the Kaggle machine learning competition focused on predicting NCAA March Madness basketball tournament outcomes. This annual single-elimination tournament features 68 Division I teams and represents a significant predictive challenge due to its notorious unpredictability.

Key technical implementations:
• Comprehensive data collection combining historical tournament data, team statistics, seedings, and ratings from FiveThirtyEight and KenPom
• Custom web scraper development to obtain pre-tournament betting data and historical ratings extending back to 2002
• Feature engineering creating predictive variables including seed differences, team ratings differences, win percentage discrepancies, average margin of victory, and championship probability disparities
• Implementation of multiple machine learning approaches including Logistic Regression, Linear Regression, and XGBoost
• Rigorous validation using k-fold methods structured with season-by-season validation to prevent data leakage
• Hyperparameter optimization for XGBoost models, adjusting tree depth, learning rates, and regularization terms
• Integration of betting odds data to capture real-world insights about team injuries, rankings, and public sentiment
• Model performance evaluation using log-loss metrics, the competition's official scoring method
• Iterative model refinement based on validation performance

The project's most significant innovation was incorporating betting odds data, which substantially improved predictive accuracy by capturing market insights. The final submission included two top-performing models: a Logistic Regression model and an XGBoost classification model.

This project demonstrates skills in data acquisition, feature engineering, machine learning model development, validation strategies, and applying domain knowledge to improve predictive performance.`,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }
];


const miniGames = [
  {
    title: "Grid Resource Management",
    image: gridBuilderImage,
    description: "A strategic simulation game focused on resource collection and grid transformation. Players interact with diverse tile types (water, grass, mountains, forest) to harvest resources and modify the environment. Implements a robust inventory system tracking multiple resource types with maximum capacities, a context menu system for tile interactions, and a balanced economic model for resource allocation. Demonstrates skills in state management, grid-based game design, and UI/UX development."
  },
  {
    title: "Dungeon Explorer",
    image: dungeonExplorerImage,
    description: "A React-based roguelike dungeon crawler featuring procedural level generation and user authentication. Implements secure credential storage with password validation, algorithmic dungeon generation creating unique layouts each playthrough, and grid-based movement using keyboard controls. The project utilizes React state management for game states (exploration, combat, inventory), local storage for progress tracking, and Tailwind CSS for responsive UI design. Demonstrates full-stack development skills combining front-end interfaces with backend authentication."
  },
  {
    title: "Space Shooter",
    image: spaceShooterImage,
    description: "An arcade-style space shooter with realistic physics simulation. Implements Newton's laws for movement, creating authentic momentum and inertia for both player ships and enemies. Features comprehensive local storage for high score persistence, progressive difficulty scaling, and particle systems for visual effects (explosions, engine thrust, weapon fire). Game state management handles transitions between menu, gameplay, and high score screens. Showcases skills in physics implementation, visual effects programming, and game progression design."
  },
  {
    title: "Matching Puzzle Game",
    image: match3Image,
    description: "A sophisticated React/TypeScript puzzle game with advanced scoring and combo mechanics. Players match tiles to create cascading effects with multipliers for consecutive matches and special tile combinations. Implements special power tiles activated through specific match patterns, comprehensive unit testing covering all game mechanics, and state management using custom React hooks. The TypeScript implementation ensures type safety throughout the codebase, while the component architecture follows best practices for reusability and maintenance."
  },
  {
    title: "Café Dash",
    image: cafeDashImage,
    description: "A time-management simulation game inspired by Diner Dash. Players manage multiple customers simultaneously, each with patience meters requiring strategic prioritization. Gameplay involves multi-stage service processes: taking orders, preparing food, serving, and cleaning tables. Features progressive difficulty with customer arrival timing, dynamic scoring based on efficiency and satisfaction, and visual feedback showing customer emotional states. Demonstrates skills in complex state management, timing-based gameplay mechanics, and resource allocation algorithms."
  }
];

const miniWebApps = [
  {
    title: "Election Simulation",
    image: electionSimImage,
    description: "An interactive polling and vote simulation platform featuring statistical analysis of election outcomes. Users can create simulated elections with dynamically generated candidates for multiple political positions. The system implements randomization algorithms for candidate generation, real-time vote tabulation, and visual representation of results. Features include position-specific voting options, \"None of the above\" selections, and comprehensive result analytics. Built with responsive design principles to ensure consistent functionality across device sizes, demonstrating skills in dynamic content generation, data visualization, and user interface design."
  },
  {
    title: "User Manager Dashboard",
    image: userManagerImage,
    description: "A comprehensive TypeScript React admin dashboard for user administration. Implements user creation with form validation for required fields and data formats, role-based access control with permission levels, and React Query for efficient data fetching with caching. Features include state management that preserves filters and pagination between sessions, toast notifications for successful operations, clear error handling, and fully responsive design that works across all device sizes. Demonstrates expertise in TypeScript, modern React patterns, state management, and secure user interface design principles."
  },
  {
    title: "Restaurant Website",
    image: restaurantImage,
    description: "A complete restaurant website built with React Router and TypeScript featuring seamless client-side routing. The site includes detailed menu sections with comprehensive nutritional information organized by category, an interactive location finder displaying restaurant branches with contact details, and accessibility-focused design adhering to WCAG guidelines. The component architecture follows best practices with reusable UI elements and proper type definitions. Demonstrates skills in modern front-end architecture, route management, responsive design, and accessibility implementation."
  },
  {
    title: "Fast Food Chain Site",
    image: fastFoodImage,
    description: "A modern fast-food restaurant interface with responsive design showcasing menu items with high-quality images and detailed descriptions. Each food item links to comprehensive nutritional facts pages with dietary information. Features include a location finder with geolocation to show nearby restaurants on interactive maps, mobile-responsive layouts that adapt for smaller screens, and a consistent component system for UI elements. This project demonstrates skills in geolocation integration, responsive design techniques, and component-based architecture."
  },
  {
    title: "Email Design System",
    image: emailSystemImage,
    description: "A comprehensive system for building responsive email templates using React components. Features reusable components specifically designed for email client compatibility including headers, footers, content sections, and CTA buttons. Each component is cross-tested in major email clients to ensure consistent rendering. Implements responsive design techniques functioning within email HTML constraints and includes visual preview capabilities for different devices. The system exports email-compatible HTML working across Gmail, Outlook, Apple Mail and other clients, demonstrating expertise in the challenging area of email template development."
  },
  {
    title: "Well Validation Toolkit",
    image: wellValidationImage,
    description: "A data processing application for analyzing oil well measurements with advanced visualization capabilities. The system processes complex well data including depth measurements, gamma ray readings, and porosity values. Implements anomaly detection algorithms to identify potential issues in well data, interactive graphs with zoom capabilities for detailed analysis, and multi-well comparison features to identify patterns across locations. Features data validation checks to ensure measurement accuracy and flag suspicious readings. Demonstrates skills in complex data processing, scientific visualization techniques, and building interfaces for technical specialists."
  }
];
const cs50Games = [
  {
    title: "Flappy Bird",
    image: flappyBirdImage,
    video: "https://www.youtube.com/watch?v=cguqEUa7aKc",
    description: "A LÖVE2D recreation of the viral mobile game focusing on core gameplay mechanics. Implements procedural pipe generation with randomized heights, physics-based gravity simulation for bird movement, parallax scrolling backgrounds for depth perception, and frame-independent gameplay ensuring consistent difficulty across devices. Features collision detection systems, state machine architecture for game states, and responsive audio feedback. This project demonstrates skills in procedural content generation and physics implementation in Lua."
  },
  {
    title: "Breakout",
    image: breakoutImage,
    video: "https://www.youtube.com/watch?v=sVcEJVXvUBk&t=76s&pp=0gcJCb8Ag7Wk3p_U",
    description: "A fully-featured brick-breaking arcade game featuring multiple levels with increasing difficulty. Implements varied power-up systems that modify paddle size, ball speed, and multi-ball effects. Features particle systems for visual feedback during brick destruction, score multipliers based on consecutive hits, and progressive level generation. Includes robust collision detection with directional response, paddle physics affecting ball trajectory based on hit position, and state persistence between levels. Demonstrates skills in game physics programming and progressive difficulty design."
  },
  {
    title: "Match-3",
    image: match3CS50Image,
    video: "https://www.youtube.com/watch?v=uRAvr6jjvD4&t=2s",
    description: "A Bejeweled-inspired matching puzzle game with sophisticated match detection and cascade systems. Implements grid-based tile management with swap validation, match detection algorithms for identifying patterns (horizontal, vertical, and special combinations), and cascading effects when matches clear space for new matches. Features include timer-based gameplay with visual countdown, scoring system with multipliers for consecutive matches, and board-clearing special combinations. The project demonstrates algorithm design for pattern recognition and animation sequencing skills."
  },
  {
    title: "Pokémon",
    image: pokemonImage,
    video: "https://www.youtube.com/watch?v=vpGzT32EYfo&t=15s",
    description: "A turn-based battle system inspired by the Pokémon franchise. Implements comprehensive battle mechanics including type advantages/weaknesses affecting damage calculations, status effects altering gameplay, and leveling systems with experience points. Features health bars with animated transitions, turn order management, and specially-animated attack sequences. The project includes a state machine for battle phases, a basic AI for computer-controlled opponents, and text system for battle narration. Demonstrates skills in complex game system design and turn-based mechanics implementation."
  },
  {
    title: "The Legend of Zelda",
    image: zeldaImage,
    video: "https://www.youtube.com/watch?v=grg8zPM8IXQ",
    description: "A top-down dungeon crawler inspired by The Legend of Zelda. Features room-based dungeon generation with puzzle elements, pathfinding AI for enemies with different behavior patterns, heart-based health system with collectible power-ups, and inventory management for collected items. Implements collision systems for environmental obstacles, combat mechanics with directional sword attacks, and state persistence between dungeon rooms. This project demonstrates skills in top-down gameplay design, AI implementation, and interconnected room-based level design."
  },
  {
    title: "Super Mario Bros",
    image: marioImage,
    video: "https://www.youtube.com/watch?v=EtEtVQGwuf4",
    description: "A side-scrolling platformer recreating core mechanics from Super Mario Bros. Implements sprite-based animation systems for character states (running, jumping, falling), tile-based level design with collision detection, and platform physics including variable jump heights based on button press duration. Features collectible coins with score tracking, special blocks that react to collision from below, power-up systems affecting player abilities, and enemy AI with specific movement patterns. Demonstrates platformer physics programming and tile-based level design skills."
  },
  {
    title: "Angry Birds",
    image: angryBirdsImage,
    video: "https://www.youtube.com/watch?v=O5gGkmil-Qg",
    description: "A physics-based puzzle game inspired by Angry Birds. Implements a projectile launching system with drag-and-release controls determining trajectory and power, realistic physics simulation for projectile movement, and collision systems for destructible environments. Features multiple projectile types with special abilities, structural integrity calculations for buildings, scoring based on efficiency and destruction percentage, and level progression systems. Demonstrates advanced physics implementation, destructible environment programming, and physics-based puzzle design."
  },
  {
    title: "Dread Halls",
    image: dreadHallsImage,
    video: "https://www.youtube.com/watch?v=K3X_o2Jlahg&t=2s",
    description: "A first-person horror game focused on atmosphere and tension. Implements procedural dungeon generation creating unique layouts each playthrough, sound-driven AI that reacts to player noise levels, and stealth mechanics requiring careful movement. Features dynamic lighting systems affecting visibility and mood, resource management with limited supplies, and progressive difficulty scaling as players progress deeper. The 3D environment uses Unity's navigation systems for enemy pathfinding. Demonstrates 3D environment design, procedural generation, and audio-reactive AI implementation."
  },
  {
    title: "Portals",
    image: portalsImage,
    video: "https://www.youtube.com/watch?v=wftNRio_PEk",
    description: "A puzzle platformer inspired by Portal's spatial mechanics. Implements a portal system allowing players to create linked teleportation points, physics continuity ensuring momentum preservation through portals, and puzzle rooms requiring creative use of portals to solve. Features object-portal interactions allowing items to be transported, button-and-door mechanisms for progression, and multiple puzzle types with increasing complexity. Demonstrates advanced spatial reasoning implementation and physics-based puzzle design."
  },
  {
    title: "3D Helicopter Game",
    image: helicopterImage,
    video: "https://www.youtube.com/watch?v=l4muAD4axtU",
    description: "A Unity-based 3D side-scrolling helicopter flight game. Implements realistic flight physics with lift, drag, and gravity forces, obstacle generation with increasing difficulty patterns, and collision detection with appropriate physical responses. Features camera systems that smoothly follow player movement, particle effects for engine exhaust and collisions, and scoring based on distance traveled and obstacles avoided. This project demonstrates 3D physics programming, procedural obstacle generation, and Unity's physics system utilization."
  },
  {
    title: "Pong",
    image: pongImage,
    video: "https://www.youtube.com/watch?v=r5pTh3Sn_Pk",
    description: "A recreation of the classic arcade game Pong. Implements paddle physics affecting ball trajectory based on hit position, ball speed acceleration as rallies continue, and two-player control systems. Features score tracking with visual and audio feedback, dynamic difficulty adjustment based on player performance, and AI for single-player mode with predictive movement. This foundational project demonstrates core game loop design, collision response systems, and basic game physics implementation."
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