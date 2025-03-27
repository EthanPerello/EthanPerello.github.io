import React, { useState } from "react";

// MAIN PROJECTS (detailed with expand/collapse)
const mainProjects = [
  {
    title: "NYC School Closures Prediction",
    image: "placeholder-image-url",
    description: `
In this data science project, I analyzed student outcome data and school closures in New York City. I gathered data from public sources including the NYC Department of Education, focusing on metrics such as graduation rates, dropout percentages, and GED attainment across racial, gender, and socioeconomic subgroups.

I discovered stark disparities in student performance and identified dropout rates among male and Black students as strong indicators of school closures. I built a logistic regression model with 99.1% accuracy using 2015 data and applied it to 2021 schools to identify potential at-risk closures. This project demonstrated the impact of predictive modeling in education policy, showing that while student outcomes provide valuable insight, closures are also influenced by budget, charter transitions, and administrative decisions.
    `,
    github: "https://github.com/yourusername/nyc-closures",
  },
  {
    title: "March Madness Predictor",
    image: "placeholder-image-url",
    description: `
This project involved building machine learning models to predict NCAA March Madness tournament outcomes. I collected data from past seasons, including team ratings (KenPom, FiveThirtyEight), seedings, and even scraped betting odds for extra context.

I engineered features like seed difference, win percentage, average margin of victory, and betting line movement. I trained and validated logistic regression and XGBoost models using season-by-season cross-validation. My top model—an XGBoost classifier with betting odds and power rankings—achieved strong log-loss performance and reflected real-world predictive patterns. This project taught me feature engineering, ensemble modeling, and the value of external signals like market sentiment in sports prediction.
    `,
    github: "https://github.com/yourusername/march-madness",
  },
  {
    title: "City Builder Game (Dojo)",
    image: "placeholder-image-url",
    description: `
A blockchain-integrated multiplayer city-building game developed in Unity and powered by the Dojo engine. Players manage in-game currency, purchase land tiles on a dynamically expanding grid, and construct residential, industrial, and commercial buildings.

Each tile has its own internal build grid, and structures affect resident happiness and income rates. Players compete for profitability and tile control in a persistent online world. All game data—including player balance, tile ownership, building states—is recorded on-chain using Dojo and Starknet. Includes full camera controls, building menus, real-time economy simulation, and an interactive leaderboard.
    `,
    github: "https://github.com/yourusername/city-builder",
  },
  {
    title: "Space Game",
    image: "placeholder-image-url",
    description: `
A 3D action-adventure game made in Unity for Harvard's edX Game Development course. Features real-time combat, AI-driven enemies, gem collection, health bars, game state transitions, and UI integration.

Players explore a space-themed map, collect items, and destroy enemies while navigating through multiple game scenes like menus, win/game-over screens. Enemies use Unity's NavMesh AI to wander and attack the player. Built with animator triggers, collider logic, sound effects, and persistent music systems.
    `,
  },
  {
    title: "Medieval Fantasy RPG",
    image: "placeholder-image-url",
    description: `
A fully featured Unity RPG game with Blender-crafted characters, AI combat, leveling system, quest tracking, and customizable character appearance. Players battle goblins and skeletons, gain experience, upgrade stats, and accept quests from NPCs.

Includes ranged and melee combat, persistent object states, pet companions, inventory/equipment system, and a dynamic UI that updates in real time. Game logic is modular and scalable for future expansion (bosses, new zones, advanced items). Demonstrates game design, AI architecture, and C# systems integration.
    `,
  },
];

// MINI PROJECTS
const miniGameProjects = [
  {
    title: "3D Helicopter Side-Scroller",
    image: "placeholder-helicopter",
    description:
      "Unity 3D side-scroller where players pilot a helicopter, dodge enemies, and survive scrolling terrain.",
  },
  {
    title: "Simplified Pokémon",
    image: "placeholder-pokemon",
    description:
      "Turn-based RPG built in Lua/LÖVE2D, inspired by early Pokémon mechanics including wild encounters and map traversal.",
  },
  {
    title: "Retro Game Pack",
    image: "placeholder-retro",
    description:
      "Collection of simplified classics using Lua/LÖVE2D: Mario, Zelda, Angry Birds, Pong, Match-3, Breakout, and more.",
  },
  {
    title: "Arcade Shooter",
    image: "placeholder-arcade",
    description:
      "Space shooter game with blaster mechanics, asteroid collision, and local storage high scores.",
  },
  {
    title: "Grid Navigation Game",
    image: "placeholder-grid",
    description:
      "Tile-based movement game with win/lose conditions and timed random tile spawns.",
  },
  {
    title: "Platformer Collectathon",
    image: "placeholder-platformer",
    description:
      "Arrow-key controlled platformer with score-boosting collectibles and enemies.",
  },
];

const miniWebApps = [
  {
    title: "User Management System",
    image: "placeholder-user",
    description:
      "React app using React Query for real-time user listing, form validation, and toast notifications.",
  },
  {
    title: "Election Survey App",
    image: "placeholder-election",
    description:
      "Survey app for simulating U.S. election votes. Users select candidates, submit, and view results.",
  },
  {
    title: "Restaurant Website",
    image: "placeholder-food",
    description:
      "Multi-page responsive site with menus, nutrition info, contact form, and location details.",
  },
];

const miniWeb3Projects = [
  {
    title: "Dojo Engine Game",
    image: "placeholder-dojo",
    description:
      "Blockchain-based game using Dojo + Starknet. Movement, wallet integration, and on-chain position updates.",
  },
  {
    title: "Web3 Auth App",
    image: "placeholder-auth",
    description:
      "Simple DApp with account creation, login, and protected route display inside a mock game interface.",
  },
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
      {project.github && (
        <a
          href={project.github}
          className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 self-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      )}
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

export default function ProjectsPage() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

      {/* === MAIN PROJECTS === */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Main Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainProjects.map((project, index) => (
            <ExpandableProject key={index} project={project} />
          ))}
        </div>
      </section>

      {/* === MINI PROJECTS === */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mini Projects</h2>
        <p className="text-gray-600 mb-6">
          A mix of smaller creative experiments and focused technical builds across game dev, frontend, and blockchain.
        </p>

        {/* Game Dev */}
        <h3 className="text-xl font-semibold mb-4">🎮 Game Development</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {miniGameProjects.map((project, i) => (
            <MiniProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Web Apps */}
        <h3 className="text-xl font-semibold mb-4">💻 Web Applications</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {miniWebApps.map((project, i) => (
            <MiniProjectCard key={i} project={project} />
          ))}
        </div>

        {/* Web3 */}
        <h3 className="text-xl font-semibold mb-4">🔗 Blockchain & Web3</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniWeb3Projects.map((project, i) => (
            <MiniProjectCard key={i} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
