import React, { useEffect, useState } from "react";

// === Image Imports ===
import cityBuilderImage from "./images/City_Builder_Game.png";
import spaceGameImage from "./images/Space_Game.png";
import rpgImage from "./images/Midieval_Fantasy_RPG.png";
import nycImage from "./images/NYC_School_Closures.png";
import marchMadnessImage from "./images/March_Madness_Predictor.png";
import dungeonExplorerImage from "./images/dungeon-explorer.svg";
import spaceShooterImage from "./images/space-shooter.svg";
import match3Image from "./images/match-3-puzzle.svg";
import gridBuilderImage from "./images/grid-resource-management.svg";
import electionSimImage from "./images/election-simulation.svg";
import userManagerImage from "./images/user-management.svg";
import restaurantImage from "./images/restaurant-website.svg";
import fastFoodImage from "./images/fast-food-chain.svg";
import emailSystemImage from "./images/email-design-system-no-code.svg";
import wellValidationImage from "./images/well-validation-system-no-code.svg";
import flappyBirdImage from "./images/flappy-bird.png";
import breakoutImage from "./images/breakout.png";
import match3CS50Image from "./images/match3.png";
import pokemonImage from "./images/pokemon.png";
import zeldaImage from "./images/zelda.png";
import marioImage from "./images/mario.png";
import angryBirdsImage from "./images/angry-birds.png";
import cafeDashImage from "./images/cafe-dash.svg";
import dreadHallsImage from "./images/dreadhalls.png";
import portalsImage from "./images/portals.png";
import helicopterImage from "./images/helicopter.png";
import pongImage from "./images/pong.png";

// === Components ===
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
      {project.github && <a href={project.github} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">GitHub</a>}
      {project.play && <a href={project.play} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Play</a>}
      {project.video && <a href={project.video} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Video</a>}
      {project.website && <a href={project.website} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Website</a>}
      {project.kaggle && <a href={project.kaggle} className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200" target="_blank" rel="noopener noreferrer">Kaggle</a>}
    </div>
  </div>
);

const CollapsibleSection = ({ title, description, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="mb-10">
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
    title: "Match-3 Puzzle Game",
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
    title: "Grid Resource Management",
    image: gridBuilderImage,
    description: "Strategy simulation with tile harvesting, inventory tracking, and context menu interactions."
  },
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
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  return (
    <Layout>
      <CollapsibleSection
        title="🔥 Featured Game Projects"
        description="Top-tier Unity and blockchain-integrated games demonstrating system design, AI, multiplayer, and polished gameplay."
      >
        {featuredGames.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        title="🧠 Machine Learning & Data Science"
        description="Real-world data projects using predictive modeling, cross-validation, and data visualization."
      >
        {mlProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        title="🎮 Mini Game Projects"
        description="Smaller games built with strong mechanics and fast iteration. Arcade shooters, puzzle games, and UI polish."
      >
        {miniGames.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        title="🌐 Web Applications & Tools"
        description="Frontend and full-stack apps including admin tools, simulations, dashboards, and production-quality interfaces."
      >
        {miniWebApps.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </CollapsibleSection>

      <CollapsibleSection
        title="👾 CS50 Game Development Projects"
        description="Games built during Harvard's CS50 Game Dev course using LÖVE2D. Each game recreates core mechanics from a classic title."
      >
        {cs50Games.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </CollapsibleSection>
    </Layout>
  );
}
