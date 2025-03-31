import React, { useEffect, useState } from "react";
import nycImage from "./images/NYC_School_Closures.png";
import marchMadnessImage from "./images/March_Madness_Predictor.png";
import cityBuilderImage from "./images/City_Builder_Game.png";
import rpgImage from "./images/Midieval_Fantasy_RPG.png";
import spaceGameImage from "./images/Space_Game.png";

const mainProjects = [
  {
    title: "NYC School Closure Risk Predictor",
    image: nycImage,
    description: `
This data science project was a school project at Tulane, where I analyzed student outcome data and school closures in New York City. I gathered data from public sources including the NYC Department of Education, focusing on metrics such as graduation rates, dropout percentages, and GED attainment across racial, gender, and socioeconomic subgroups.

I discovered stark disparities in student performance and identified dropout rates among male and Black students as strong indicators of school closures. I built a logistic regression model with 99.1% accuracy using 2015 data and applied it to 2021 schools to identify potential at-risk closures. This project demonstrated the impact of predictive modeling in education policy, showing that while student outcomes provide valuable insight, closures are also influenced by budget, charter transitions, and administrative decisions.
    `,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `
This project was part of a Kaggle competition involving building machine learning models to predict NCAA March Madness tournament outcomes. I collected data from past seasons, including team ratings (KenPom, FiveThirtyEight), seedings, and scraped betting odds for extra context.

I engineered features like seed difference, win percentage, average margin of victory, and betting line movement. I trained and validated logistic regression and XGBoost models using season-by-season cross-validation. My top model, an XGBoost classifier with betting odds and power rankings, achieved strong log-loss performance and reflected real-world predictive patterns. This project taught me feature engineering, ensemble modeling, and the value of external signals like market sentiment in sports prediction.
    `,
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  },
  {
    title: "On-Chain City Builder Game",
    image: cityBuilderImage,
    description: `
This project started as a submission for a Dojo Game Jam and evolved into a full game. It is a blockchain-integrated multiplayer city-building game developed in Unity using the Dojo engine. Players manage in-game currency, purchase land tiles on a dynamically expanding grid, and construct residential, industrial, and commercial buildings.

Each tile has its own internal build grid, and structures affect resident happiness and income rates. Players compete for profitability and tile control in a persistent online world. All game data including player balance, tile ownership, and building states is recorded on-chain using Dojo and Starknet. Includes full camera controls, building menus, real-time economy simulation, and an interactive leaderboard.
    `,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Space Adventure Game",
    image: spaceGameImage,
    description: `
A 3D action-adventure game made in Unity for Harvard's edX Game Development course. Features real-time combat, AI-driven enemies, gem collection, health bars, game state transitions, and UI integration.

Players explore a space-themed map, collect items, and destroy enemies while navigating through multiple game scenes like menus, win/game-over screens. Enemies use Unity's NavMesh AI to wander and attack the player. Built with animator triggers, collider logic, sound effects, and persistent music systems.
    `,
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `
A fully featured Unity RPG game with Blender-crafted characters, AI combat, leveling system, quest tracking, and customizable character appearance. Players battle goblins and skeletons, gain experience, upgrade stats, and accept quests from NPCs.

Includes ranged and melee combat, persistent object states, pet companions, inventory/equipment system, and a dynamic UI that updates in real time. Game logic is modular and scalable for future expansion (bosses, new zones, advanced items). Demonstrates game design, AI architecture, and C# systems integration.
    `
  }
];

const miniProjects = [
  {
    title: "3D Helicopter Side-Scroller",
    image: "placeholder-helicopter",
    description:
      "Unity 3D game where players fly a helicopter through scrolling terrain, dodging obstacles in a fast-paced environment."
  },
  {
    title: "Simplified Pokémon (LÖVE2D)",
    image: "placeholder-pokemon",
    description:
      "Turn-based RPG inspired by Pokémon. Built using Lua and LÖVE2D with overworld navigation, battle logic, and wild encounters."
  },
  {
    title: "Arcade Shooter Game",
    image: "placeholder-arcade",
    description:
      "React-based space shooter featuring blaster mechanics, asteroid collisions, multiple screens, and local high score tracking."
  },
  {
    title: "Grid Navigation Game",
    image: "placeholder-grid",
    description:
      "Tile-based movement game built in React with random tile generation, name input, win/lose conditions, and simple game state logic."
  },
  {
    title: "Election Survey App",
    image: "placeholder-election",
    description:
      "A React app simulating a US election survey. Users vote for candidates across multiple races and see summarized results."
  },
  {
    title: "Dojo Player Wallet Manager",
    image: "placeholder-dojo",
    description:
      "A Web3 utility app using Dojo and Starknet for managing burner wallet creation, login sessions, and player account initialization on-chain. Built to test identity flows and real-time wallet state updates."
  }
];

const ExpandableProject = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-4 object-cover h-48 w-full"
      />
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p
        className={`text-sm text-gray-700 whitespace-pre-line mb-4 ${
          expanded ? "" : "line-clamp-6"
        }`}
      >
        {project.description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 text-sm hover:underline mb-2"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>
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
};

const MiniProjectCard = ({ project }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
    <img
      src={project.image}
      alt={project.title}
      className="rounded-xl mb-4 object-cover h-40 w-full"
    />
    <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
    <p className="text-sm text-gray-600">{project.description}</p>
  </div>
);

export default function App() {
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Ethan Perello Projects</h1>

      {/* === Main Projects === */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Main Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project, index) => (
            <ExpandableProject key={index} project={project} />
          ))}
        </div>
      </section>

      {/* === Mini Projects === */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mini Projects</h2>
        <p className="text-gray-600 mb-6">
          A curated selection of smaller creative and technical builds, each focused, polished, and showcasing diverse skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project, index) => (
            <MiniProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
