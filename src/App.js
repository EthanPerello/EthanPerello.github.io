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
    video: "https://www.youtube.com/watch?v=CufS2USIR1Y",
    github: "https://github.com/EthanPerello/SpaceGame",
    play: "https://ethanperello.itch.io/space-game"
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
  { title: "Dungeon Explorer", image: dungeonExplorerImage, description: "React roguelike with authentication, procedural maps, keyboard control, and state-based UI." },
  { title: "Space Shooter", image: spaceShooterImage, description: "Classic arcade shooter with score tracking, physics movement, and particle-based effects." },
  { title: "Match-3 Puzzle Game", image: match3Image, description: "React/TypeScript game with combo scoring, special tiles, and tested hook-based architecture." }
];

const miniWebApps = [
  { title: "Grid Resource Management", image: gridBuilderImage, description: "Tile-based game for managing and harvesting grid resources." },
  { title: "Election Simulation", image: electionSimImage, description: "Polling simulation app with randomized candidates and result tallying." },
  { title: "User Manager Dashboard", image: userManagerImage, description: "React/TypeScript admin panel with toast messages and role-based control." },
  { title: "Restaurant Website", image: restaurantImage, description: "Multi-page site with menu display, routing, and contact location features." },
  { title: "Fast Food Finder", image: fastFoodImage, description: "Mobile-first app with nutrition info, store locator, and adaptive design." },
  { title: "Email Design System", image: emailSystemImage, description: "Responsive email builder with cross-client tested templates." },
  { title: "Well Validation Toolkit", image: wellValidationImage, description: "Data visualizer for oil well time series forecasting using PyTorch." }
];

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

export default function App() {
  useEffect(() => {
    document.title = "Ethan Perello Projects";
  }, []);

  return (
    <Layout>
      <CollapsibleSection title="🔥 Featured Game Projects">
        {featuredGames.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🧠 Machine Learning & Data Science">
        {mlProjects.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🎮 Mini Game Projects">
        {miniGames.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
      <CollapsibleSection title="🌐 Web Applications & Tools">
        {miniWebApps.map((project, i) => <ProjectCard key={i} project={project} />)}
      </CollapsibleSection>
    </Layout>
  );
}
