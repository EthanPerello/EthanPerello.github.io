// FULLY UPDATED FILE WITH FINAL STRUCTURE

import React, { useEffect, useState } from "react";
import nycImage from "./images/NYC_School_Closures.png";
import marchMadnessImage from "./images/March_Madness_Predictor.png";
import cityBuilderImage from "./images/City_Builder_Game.png";
import rpgImage from "./images/Midieval_Fantasy_RPG.png";
import spaceGameImage from "./images/Space_Game.png";

const featuredGames = [
  {
    title: "On-Chain City Builder",
    image: cityBuilderImage,
    description: `Blockchain-integrated multiplayer city-building game using Unity and Dojo. Persistent online world with on-chain economy, real-time simulation, tile management, and strategic gameplay.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure",
    image: spaceGameImage,
    description: `3D Unity action-adventure with AI enemies, item collection, health and UI systems. Players navigate multi-scene space environments with persistent audio and polished combat.`,
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y",
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `Unity RPG with AI combat, leveling system, inventory management, quests, and pet companions. Real-time dynamic UI with scalable code structure.`
  }
];

const mlProjects = [
  {
    title: "NYC School Closure Predictor",
    image: nycImage,
    description: `Logistic regression model predicting NYC school closures using demographic outcome data. Achieved 99.1% accuracy on 2015 data, applied model to 2021 schools for at-risk detection.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `XGBoost and logistic regression models predicting NCAA results using betting odds, power rankings, and seed data. Validated with Kaggle competition cross-validation techniques.`,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }
];

const miniGames = [
  { title: "Dungeon Explorer", description: "React roguelike with authentication, procedural maps, keyboard control, and state-based UI." },
  { title: "Space Shooter", description: "Classic arcade shooter with score tracking, physics movement, and particle-based effects." },
  { title: "Match-3 Puzzle Game", description: "React/TypeScript game with combo scoring, special tiles, and tested hook-based architecture." },
  { title: "Tile Survival", description: "Strategic grid game with timed hazards, player tracking, and dynamic win/loss conditions." },
  { title: "Pig Shooters", description: "Target game with grid logic, animal sprites, shooting mechanics, and score-based difficulty." },
  { title: "Hopper Man", description: "Platformer with keyboard control, procedurally timed levels, and classic arcade physics." },
  { title: "Asteroid Patrol", description: "Vector space shooter with asteroid splitting, wraparound screen, and enemy AI UFOs." },
  { title: "Café Dash", description: "Restaurant time manager with multiple stations, score system, and rising difficulty." },
  { title: "Grid Resource Builder", description: "Tile-based economy game with resource harvesting, inventory system, and tile upgrades." },
  { title: "Bird Bounce", description: "Flappy-style game with procedural pipes, parallax scrolling, and single-button input." },
  { title: "Brick Blaster", description: "Breakout-style arcade game with powerups, multiball, and particle animations." },
  { title: "Gem Crafter", description: "Gem matching puzzle with chaining, power tiles, and progressive board layouts." },
  { title: "Creature Clash", description: "Turn-based battle game with XP, AI moves, health bar UI, and type effectiveness." },
  { title: "Dungeon Puzzle Quest", description: "Top-down dungeon puzzler with key items, enemies, and room-based exploration." },
  { title: "Platform Jumper", description: "Side-scroller with jump physics, coins, obstacles, and level win conditions." },
  { title: "Projectile Puzzler", description: "Destruction puzzler with physics, aiming, and multiple projectile abilities." },
  { title: "Grid Navigation Challenge", description: "React tile navigation game with randomized board, name input, and goal state." }
];

const miniWebApps = [
  { title: "Restaurant Website", description: "Multi-page site with menu display, routing, and contact location features." },
  { title: "Fast Food Finder", description: "Mobile-first app with nutrition info, store locator, and adaptive design." },
  { title: "Election Simulator", description: "Vote simulator with randomized candidates, dynamic ballot input, and results tally." },
  { title: "User Manager Dashboard", description: "Admin panel with role-based controls, toast alerts, and form validation via React Query." },
  { title: "React Email System", description: "Table-based responsive email template system with style encapsulation and fallback logic." },
  { title: "Well Validation Toolkit", description: "Oil well data visualizer with time-series prediction, boundary logic, and PyTorch forecasting." },
  { title: "Wallet Manager", description: "Web3 burner wallet utility with Dojo/Starknet identity state syncing and session persistence." }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transform hover:scale-[1.02] transition-transform duration-200">
    {project.image && (
      <img src={project.image} alt={project.title} className="rounded-xl mb-4 object-cover h-48 w-full" />
    )}
    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    <p className="text-sm text-gray-700 whitespace-pre-line mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.github && <a href={project.github} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank">GitHub</a>}
      {project.play && <a href={project.play} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank">Play</a>}
      {project.video && <a href={project.video} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank">Video</a>}
      {project.website && <a href={project.website} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank">Website</a>}
      {project.kaggle && <a href={project.kaggle} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank">Kaggle</a>}
    </div>
  </div>
);

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-2xl font-semibold mb-4 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200"
      >
        {open ? `▼ ${title}` : `▶ ${title}`}
      </button>
      {open && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>}
    </div>
  );
};

export default function App() {
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Ethan Perello Projects</h1>

      <CollapsibleSection title="🔥 Featured Game Projects">
        {featuredGames.map((project, index) => <ProjectCard key={index} project={project} />)}
      </CollapsibleSection>

      <CollapsibleSection title="🧠 Machine Learning & Data Science">
        {mlProjects.map((project, index) => <ProjectCard key={index} project={project} />)}
      </CollapsibleSection>

      <CollapsibleSection title="🎮 Mini Game Projects">
        {miniGames.map((project, index) => <ProjectCard key={index} project={project} />)}
      </CollapsibleSection>

      <CollapsibleSection title="🌐 Web Applications & Tools">
        {miniWebApps.map((project, index) => <ProjectCard key={index} project={project} />)}
      </CollapsibleSection>
    </div>
  );
}
