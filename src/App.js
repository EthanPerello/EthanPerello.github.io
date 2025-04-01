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
    description: `A blockchain-integrated multiplayer city-building game developed in Unity using Dojo. Players manage currency, purchase land, and construct zones with effects on in-game economy and happiness. Real-time simulation, leaderboard, and fully on-chain data persistence.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure",
    image: spaceGameImage,
    description: `A 3D Unity action-adventure game featuring AI enemies, combat, item collection, and multiple scenes. Players navigate a space environment with real-time movement, animated transitions, health and UI systems, and persistent audio.`,
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y",
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `A full-featured Unity RPG game with AI combat, leveling system, pet companions, quests, inventory, and custom characters. Includes real-time UI updates, persistent states, and scalable architecture.`
  }
];

const miniGameProjects = [
  {
    title: "Dungeon Explorer",
    description: `A React roguelike with secure user authentication, procedurally generated dungeons, keyboard movement, and state machine logic. Includes Tailwind-styled responsive UI.`
  },
  {
    title: "Space Shooter",
    description: `Arcade-style shooter with physics movement, local high score storage, difficulty scaling, explosion effects, and multiple states.`
  },
  {
    title: "Match-3 Puzzle Game",
    description: `Advanced puzzle game built with React/TypeScript. Features combo multipliers, special tiles, custom hooks, and tested logic.`
  },
  {
    title: "Bird Bounce",
    description: `A Flappy Bird-style game built in LÖVE2D. Includes one-button controls, procedural obstacles, score tracking, and scrolling parallax background.`
  },
  {
    title: "Brick Blaster",
    description: `Brick-breaking arcade game with power-ups, multi-ball mechanics, particle effects, and dynamic levels using LÖVE2D.`
  },
  {
    title: "Gem Crafter",
    description: `Bejeweled-style Match-3 built in LÖVE2D. Supports cascading matches, score combos, timer mode, and level progression.`
  },
  {
    title: "Creature Clash",
    description: `Turn-based RPG inspired by Pokémon. Includes AI battles, type advantages, experience leveling, and animated health bars.`
  },
  {
    title: "Dungeon Puzzle Quest",
    description: `Zelda-inspired top-down adventure with enemy AI, item usage, room transitions, and health/puzzle systems.`
  },
  {
    title: "Platform Jumper",
    description: `Side-scrolling platformer with coin collection, variable jump physics, enemy patterns, and retro-style level design.`
  },
  {
    title: "Projectile Puzzler",
    description: `Physics-based destruction puzzle game inspired by Angry Birds. Features projectile aiming, destructible environments, and level-based progression.`
  },
  {
    title: "Grid Navigation Challenge",
    description: `Tile-based logic game built in React. Features random grid generation, movement rules, win/lose conditions, and name entry.`
  }
];

const featuredOtherProjects = [
  {
    title: "NYC School Closure Risk Predictor",
    image: nycImage,
    description: `Data science project analyzing student outcomes across subgroups to predict school closures. Built a logistic regression model with 99.1% accuracy and applied to current data to identify at-risk schools.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `ML models using seed data, power rankings, and scraped betting odds to predict NCAA tournament results. Top-performing XGBoost model with cross-validation and ensemble features.`,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }
];

const miniOtherProjects = [
  {
    title: "Restaurant Website",
    description: `Full React/TypeScript restaurant website with multi-page routing, interactive food menu, location finder, and WCAG accessibility.`
  },
  {
    title: "Election Survey App",
    description: `React app that simulates multi-race voting with user choices and aggregate result summaries.`
  },
  {
    title: "Dojo Player Wallet Manager",
    description: `Web3 utility for managing burner wallets using Dojo and Starknet. Real-time wallet state management and on-chain identity tools.`
  }
];

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
    {project.image && (
      <img src={project.image} alt={project.title} className="rounded-xl mb-4 object-cover h-48 w-full" />
    )}
    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
    <p className="text-sm text-gray-700 whitespace-pre-line mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.github && (
        <a href={project.github} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank" rel="noopener noreferrer">GitHub</a>
      )}
      {project.play && (
        <a href={project.play} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank" rel="noopener noreferrer">Play</a>
      )}
      {project.video && (
        <a href={project.video} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank" rel="noopener noreferrer">Video</a>
      )}
      {project.website && (
        <a href={project.website} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank" rel="noopener noreferrer">Website</a>
      )}
      {project.kaggle && (
        <a href={project.kaggle} className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300" target="_blank" rel="noopener noreferrer">Kaggle</a>
      )}
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

      <CollapsibleSection title="🎮 Game Development Projects">
        {featuredGames.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        {miniGameProjects.map((project, index) => (
          <ProjectCard key={`mini-${index}`} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="🧠 Data Science & Machine Learning">
        {featuredOtherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="🌐 Web Applications">
        {miniOtherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CollapsibleSection>
    </div>
  );
}
