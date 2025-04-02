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
    description: `This project started as a submission for a Dojo Game Jam and evolved into a full game. It is a blockchain-integrated multiplayer city-building game developed in Unity using the Dojo engine. Players manage in-game currency, purchase land tiles on a dynamically expanding grid, and construct residential, industrial, and commercial buildings.

Each tile has its own internal build grid, and structures affect resident happiness and income rates. Players compete for profitability and tile control in a persistent online world. All game data including player balance, tile ownership, and building states is recorded on-chain using Dojo and Starknet. Includes full camera controls, building menus, real-time economy simulation, and an interactive leaderboard.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure",
    image: spaceGameImage,
    description: `A 3D action-adventure game made in Unity for Harvard's edX Game Development course. Features real-time combat, AI-driven enemies, gem collection, health bars, game state transitions, and UI integration.

Players explore a space-themed map, collect items, and destroy enemies while navigating through multiple game scenes like menus, win/game-over screens. Enemies use Unity's NavMesh AI to wander and attack the player. Built with animator triggers, collider logic, sound effects, and persistent music systems.`,
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game",
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `A fully featured Unity RPG game with Blender-crafted characters, AI combat, leveling system, quest tracking, and customizable character appearance. Players battle goblins and skeletons, gain experience, upgrade stats, and accept quests from NPCs.

Includes ranged and melee combat, persistent object states, pet companions, inventory/equipment system, and a dynamic UI that updates in real time. Game logic is modular and scalable for future expansion (bosses, new zones, advanced items). Demonstrates game design, AI architecture, and C# systems integration.`
  }
];


const mlProjects = [
  {
    title: "NYC School Closure Predictor",
    image: nycImage,
    description: `This data science project was a school project at Tulane, where I analyzed student outcome data and school closures in New York City. I gathered data from public sources including the NYC Department of Education, focusing on metrics such as graduation rates, dropout percentages, and GED attainment across racial, gender, and socioeconomic subgroups.

I discovered stark disparities in student performance and identified dropout rates among male and Black students as strong indicators of school closures. I built a logistic regression model with 99.1% accuracy using 2015 data and applied it to 2021 schools to identify potential at-risk closures. This project demonstrated the impact of predictive modeling in education policy, showing that while student outcomes provide valuable insight, closures are also influenced by budget, charter transitions, and administrative decisions.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `This project was part of a Kaggle competition involving building machine learning models to predict NCAA March Madness tournament outcomes. I collected data from past seasons, including team ratings (KenPom, FiveThirtyEight), seedings, and scraped betting odds for extra context.

I engineered features like seed difference, win percentage, average margin of victory, and betting line movement. I trained and validated logistic regression and XGBoost models using season-by-season cross-validation. My top model, an XGBoost classifier with betting odds and power rankings, achieved strong log-loss performance and reflected real-world predictive patterns. This project taught me feature engineering, ensemble modeling, and the value of external signals like market sentiment in sports prediction.`,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }
];


const miniGames = [
  {
    title: "Grid Resource Management",
    image: gridBuilderImage,
    description: "Strategy simulation with tile harvesting, inventory tracking, and context menu interactions."
  },
  {
    title: "Dungeon Explorer",
    image: dungeonExplorerImage,
    description: "React roguelike with user authentication, procedural dungeon generation, keyboard movement, and Tailwind UI."
  },
  {
    title: "Space Shooter",
    image: spaceShooterImage,
    description: "Arcade-style blaster with asteroid collisions, particle effects, and high score tracking."
  },
  {
    title: "Matching Puzzle Game",
    image: match3Image,
    description: "React/TypeScript game with combo scoring, power tiles, and unit-tested logic using custom hooks."
  },
  {
    title: "Café Dash",
    image: cafeDashImage,
    description: "Time management restaurant game where players serve customers, juggle stations, and optimize workflow."
  }
];

const miniWebApps = [
  {
    title: "Election Simulation",
    image: electionSimImage,
    description: "Interactive polling and vote simulator with randomized candidates, result display, and responsive UI."
  },
  {
    title: "User Manager Dashboard",
    image: userManagerImage,
    description: "TypeScript React admin dashboard with toast feedback, access control, and editable user profiles."
  },
  {
    title: "Restaurant Website",
    image: restaurantImage,
    description: "Fully responsive React Router site with food menu, location finder, and accessible design."
  },
  {
    title: "Fast Food Finder",
    image: fastFoodImage,
    description: "Multi-location menu site with nutritional breakdowns and mobile-first adaptive layouts."
  },
  {
    title: "Email Design System",
    image: emailSystemImage,
    description: "Responsive email builder with cross-client tested table layouts and CSS-in-JS styles."
  },
  {
    title: "Well Validation Toolkit",
    image: wellValidationImage,
    description: "Time series forecasting and PyTorch integration for oil well hydration depth validation."
  }
];
const cs50Games = [
  {
    title: "Flappy Bird",
    image: flappyBirdImage,
    video: "https://www.youtube.com/watch?v=cguqEUa7aKc",
    description: "A recreation of the viral mobile game using LÖVE2D. One-button controls, procedural pipes, parallax backgrounds, and score tracking."
  },
  {
    title: "Breakout",
    image: breakoutImage,
    video: "https://www.youtube.com/watch?v=sVcEJVXvUBk&t=76s&pp=0gcJCb8Ag7Wk3p_U",
    description: "A brick-breaking arcade clone featuring multiple levels, power-ups, particle effects, and score multipliers."
  },
  {
    title: "Match-3",
    image: match3CS50Image,
    video: "https://www.youtube.com/watch?v=uRAvr6jjvD4&t=2s",
    description: "Bejeweled-inspired gem-matching puzzle game with cascades, timers, and board-clearing combos."
  },
  {
    title: "Pokémon",
    image: pokemonImage,
    video: "https://www.youtube.com/watch?v=vpGzT32EYfo&t=15s",
    description: "Turn-based battle system inspired by Pokémon. Type advantages, health bars, leveling, and animated sequences."
  },
  {
    title: "The Legend of Zelda",
    image: zeldaImage,
    video: "https://www.youtube.com/watch?v=grg8zPM8IXQ",
    description: "Top-down dungeon crawler with puzzle rooms, enemy AI, heart-based health, and item collection."
  },
  {
    title: "Super Mario Bros",
    image: marioImage,
    video: "https://www.youtube.com/watch?v=EtEtVQGwuf4",
    description: "Side-scrolling platformer with coins, pipes, power-ups, and Goomba-stomping physics."
  },
  {
    title: "Angry Birds",
    image: angryBirdsImage,
    video: "https://www.youtube.com/watch?v=O5gGkmil-Qg",
    description: "Physics-based puzzle game with projectile launching, destructible environments, and enemy clearing objectives."
  },
  {
    title: "Dread Halls",
    image: dreadHallsImage,
    video: "https://www.youtube.com/watch?v=K3X_o2Jlahg&t=2s",
    description: "First-person horror game with procedural level generation, sound-driven AI, and stealth mechanics."
  },
  {
    title: "Portals",
    image: portalsImage,
    video: "https://www.youtube.com/watch?v=wftNRio_PEk",
    description: "A logic puzzle platformer inspired by Portal. Players teleport between areas to solve spatial puzzles."
  },
  {
    title: "3D Helicopter Game",
    image: helicopterImage,
    video: "https://www.youtube.com/watch?v=l4muAD4axtU",
    description: "Unity 3D side-scrolling helicopter flight game. Navigate through obstacles with realistic physics."
  },
  {
    title: "Pong",
    image: pongImage,
    video: "https://www.youtube.com/watch?v=r5pTh3Sn_Pk",
    description: "Classic Pong clone with two-player controls, ball speed logic, and score tracking."
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
        title="🔥 Featured Game Projects"
        description="Featured Unity and blockchain-integrated games demonstrating system design, AI, multiplayer, and polished gameplay."
      >
        {featuredGames.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="ml-projects"
        title="🧠 Machine Learning & Data Science"
        description="Real-world data projects using predictive modeling, cross-validation, and data visualization."
      >
        {mlProjects.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="mini-games"
        title="🎮 Mini Game Projects"
        description="Smaller games built with strong mechanics and fast iteration. Arcade shooters, puzzle games, and UI polish."
      >
        {miniGames.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="web-apps"
        title="🌐 Web Applications & Tools"
        description="Frontend and full-stack apps including admin tools, simulations, dashboards, and production-quality interfaces."
      >
        {miniWebApps.map((project, i) => (
          <ProjectCard key={i} project={project} onClick={handleProjectClick} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        id="cs50-games"
        title="👾 CS50 Game Development Projects"
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