import React, { useEffect, useState } from "react";
import nycImage from "./images/NYC_School_Closures.png";
import marchMadnessImage from "./images/March_Madness_Predictor.png";
import cityBuilderImage from "./images/City_Builder_Game.png";
import rpgImage from "./images/Midieval_Fantasy_RPG.png";
import spaceGameImage from "./images/Space_Game.png";
import spaceShooterImage from "./images/space-shooter.svg";
import match3Image from "./images/match-3-puzzle.svg";
import dungeonExplorerImage from "./images/dungeon-explorer.svg";
import gridBuilderImage from "./images/grid-resource-management.svg";
import electionSimImage from "./images/election-simulation.svg";
import userManagerImage from "./images/user-management.svg";
import restaurantImage from "./images/restaurant-website.svg";
import fastFoodImage from "./images/fast-food-chain.svg";
import emailSystemImage from "./images/email-design-system-no-code.svg";
import wellValidationImage from "./images/well-validation-system-no-code.svg";

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 font-sans">
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-900 drop-shadow-sm">
        Ethan Perello Projects
      </h1>
      {children}
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col transition duration-200 transform hover:scale-105">
    {project.image && (
      <img src={project.image} alt={project.title} className="rounded-xl mb-4 object-cover h-48 w-full" />
    )}
    <h2 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h2>
    <p className="text-sm text-gray-700 whitespace-pre-line mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.github && <a href={project.github} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank">GitHub</a>}
      {project.play && <a href={project.play} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank">Play</a>}
      {project.video && <a href={project.video} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank">Video</a>}
      {project.website && <a href={project.website} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank">Website</a>}
      {project.kaggle && <a href={project.kaggle} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank">Kaggle</a>}
    </div>
  </div>
);

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-2xl font-semibold mb-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-200"
      >
        {open ? `▼ ${title}` : `▶ ${title}`}
      </button>
      {open && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>}
    </div>
  );
};

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
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game",
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
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
  { title: "Dungeon Explorer", image: dungeonExplorerImage, description: "React roguelike with authentication, procedural maps, keyboard control, and state-based UI." },
  { title: "Space Shooter", image: spaceShooterImage, description: "Classic arcade shooter with score tracking, physics movement, and particle-based effects." },
  { title: "Match-3 Puzzle Game", image: match3Image, description: "React/TypeScript game with combo scoring, special tiles, and tested hook-based architecture." },
  { title: "Café Dash", description: "Time management game where players serve customers across multiple stations. Includes scoring, difficulty scaling, and drag/drop serving." },
  { title: "Asteroid Patrol", description: "Vector space shooter with momentum-based controls, UFO enemies, and asteroid splitting. Wraparound screen, classic mechanics." }
];

const cs50Games = [
  { title: "Flappy Bird", description: "Recreation of the viral mobile game using LÖVE2D. Features procedural pipes, parallax backgrounds, and single-button gameplay." },
  { title: "Breakout", description: "Modern take on the classic Atari game. Includes powerups, multiball, paddle modifiers, and scoring combos." },
  { title: "Match-3", description: "Tile-matching puzzle game inspired by Bejeweled. Features cascading matches, power tiles, and level system." },
  { title: "Pokémon", description: "Turn-based RPG inspired by the Pokémon franchise. Type matchups, experience leveling, status effects, and animated health bars." },
  { title: "The Legend of Zelda", description: "Top-down dungeon adventure with puzzles, room transitions, enemies, and collectible items." },
  { title: "Super Mario Bros", description: "Classic side-scrolling platformer with physics-based jumping, enemies, and collectible coins and powerups." },
  { title: "Angry Birds", description: "Physics-based puzzle game with destructible environments and different projectile abilities." }
];

// App component
export default function App() {
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  return (
    <Layout>
      <p className="text-center text-gray-600 text-lg mb-8">A showcase of my software engineering portfolio across game development, data science, and web applications. Built with React, Tailwind, and real-world development practices.</p>

      <CollapsibleSection title="🔥 Featured Game Projects">
        <p className='text-gray-600 mb-6'>My most complex Unity and on-chain games, featuring rich simulations, AI, combat systems, and multiplayer infrastructure.</p>
        {featuredGames.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🧠 Machine Learning & Data Science">
        <p className='text-gray-600 mb-6'>Projects involving predictive modeling, feature engineering, and real-world data from education and sports analytics.</p>
        {mlProjects.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🎮 Mini Game Projects">
        <p className='text-gray-600 mb-6'>Smaller interactive games developed with React, Unity, and other engines, showcasing quick mechanics and polished execution.</p>
        {miniGames.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🌐 Web Applications & Tools">
        <p className='text-gray-600 mb-6'>Web utilities and responsive sites using React, TypeScript, and modern design systems to build full-stack features and UIs.</p>
        {miniWebApps.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="👾 CS50 Game Development Projects">
        <p className='text-gray-600 mb-6'>Built as part of Harvard's CS50G course. Remakes and inspired versions of classic games demonstrating AI, physics, and game architecture.</p>
        {cs50Games.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
    </Layout>
  );
}
