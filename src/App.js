
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
import asteroidPatrolImage from "./images/space-shooter.svg";
import dreadHallsImage from "./images/dreadhalls.png";
import portalsImage from "./images/portals.png";
import helicopterImage from "./images/helicopter.png";
import pongImage from "./images/pong.png";

// COMPONENTS
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

export default function App() {
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  const featuredGames = [
    { title: "On-Chain City Builder", image: cityBuilderImage, description: "...", github: "...", play: "...", video: "..." },
    { title: "Space Adventure", image: spaceGameImage, description: "...", github: "...", play: "...", video: "..." },
    { title: "Medieval Fantasy RPG", image: rpgImage, description: "..." }
  ];

  const mlProjects = [
    { title: "NYC School Closure Predictor", image: nycImage, description: "...", github: "...", website: "..." },
    { title: "March Madness Outcome Predictor", image: marchMadnessImage, description: "...", kaggle: "..." }
  ];

  const miniGames = [
    { title: "Dungeon Explorer", image: dungeonExplorerImage, description: "..." },
    { title: "Space Shooter", image: spaceShooterImage, description: "..." },
    { title: "Match-3 Puzzle Game", image: match3Image, description: "..." },
    { title: "Café Dash", image: cafeDashImage, description: "..." },
    { title: "Asteroid Patrol", image: asteroidPatrolImage, description: "..." }
  ];

  const miniWebApps = [
    { title: "Grid Resource Management", image: gridBuilderImage, description: "..." },
    { title: "Election Simulation", image: electionSimImage, description: "..." },
    { title: "User Manager Dashboard", image: userManagerImage, description: "..." },
    { title: "Restaurant Website", image: restaurantImage, description: "..." },
    { title: "Fast Food Finder", image: fastFoodImage, description: "..." },
    { title: "Email Design System", image: emailSystemImage, description: "..." },
    { title: "Well Validation Toolkit", image: wellValidationImage, description: "..." }
  ];

  const cs50Games = [
    { title: "Flappy Bird", image: flappyBirdImage, description: "..." },
    { title: "Breakout", image: breakoutImage, description: "..." },
    { title: "Match-3", image: match3CS50Image, description: "..." },
    { title: "Pokémon", image: pokemonImage, description: "..." },
    { title: "The Legend of Zelda", image: zeldaImage, description: "..." },
    { title: "Super Mario Bros", image: marioImage, description: "..." },
    { title: "Angry Birds", image: angryBirdsImage, description: "..." },
    { title: "Dread Halls", image: dreadHallsImage, description: "..." },
    { title: "Portals", image: portalsImage, description: "..." },
    { title: "3D Helicopter Game", image: helicopterImage, description: "..." },
    { title: "Pong", image: pongImage, description: "..." }
  ];

  return (
    <Layout>
      <CollapsibleSection title="🔥 Featured Game Projects" description="Top-tier Unity and blockchain-integrated games.">
        {featuredGames.map((p, i) => <ProjectCard key={i} project={p} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🧠 Machine Learning & Data Science" description="Real-world data projects using predictive modeling.">
        {mlProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🎮 Mini Game Projects" description="Quick-hit gameplay with strong mechanics and polish.">
        {miniGames.map((p, i) => <ProjectCard key={i} project={p} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🌐 Web Applications & Tools" description="Frontend tools and dashboards with React, TypeScript, and design systems.">
        {miniWebApps.map((p, i) => <ProjectCard key={i} project={p} />)}
      </CollapsibleSection>
      <CollapsibleSection title="👾 CS50 Game Development Projects" description="Games built during Harvard’s CS50 course using LÖVE2D.">
        {cs50Games.map((p, i) => <ProjectCard key={i} project={p} />)}
      </CollapsibleSection>
    </Layout>
  );
}
