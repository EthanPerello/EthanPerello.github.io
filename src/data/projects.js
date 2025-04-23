// Image Imports
import cityBuilderImage from "../images/City_Builder_Game.png";
import spaceGameImage from "../images/Space_Game.png";
import rpgImage from "../images/Midieval_Fantasy_RPG.png";
import npcForgeImage from "../images/npc-forge.png";
import nycImage from "../images/NYC_School_Closures.png";
import marchMadnessImage from "../images/March_Madness_Predictor.png";
import dungeonExplorerImage from "../images/dungeon-explorer.png";
import spaceShooterImage from "../images/space-shooter.png";
import match3Image from "../images/match-3-puzzle.png";
import gridBuilderImage from "../images/grid-resource-management.png";
import electionSimImage from "../images/election-simulation.png";
import userManagerImage from "../images/user-management.png";
import restaurantImage from "../images/restaurant-website.png";
import fastFoodImage from "../images/fast-food-chain.png";
import emailSystemImage from "../images/email-design-system-no-code.png";
import wellValidationImage from "../images/well-validation-system-no-code.png";
import flappyBirdImage from "../images/flappy-bird.png";
import breakoutImage from "../images/breakout.png";
import match3CS50Image from "../images/match3.png";
import pokemonImage from "../images/pokemon.png";
import zeldaImage from "../images/zelda.png";
import marioImage from "../images/mario.png";
import angryBirdsImage from "../images/angry-birds.png";
import cafeDashImage from "../images/cafe-dash.png";
import dreadHallsImage from "../images/dreadhalls.png";
import portalsImage from "../images/portals.png";
import helicopterImage from "../images/helicopter.png";
import pongImage from "../images/pong.png";
import sealandLogoDraftsImage from "../images/sealand-logo-drafts.jpg";
import sealandFinalLogoImage from "../images/sealand-final-logo.png";
import sealandPosterImage from "../images/sealand-poster.png";
import sealandThumbnailImage from "../images/sealand_thumbnail.png";
import bowlingThumbnailImage from "../images/bowling_thumbnail.png";
// Video files
import grandBowlMontageVideo from "../videos/grand-bowl-montage.mp4";
import grandBowlStrikeVideo from "../videos/grand-bowl-strike.mp4";
import grandBowlBuildingVideo from "../videos/grand-bowl-building-preview.mp4";

// Featured Projects
export const featuredProjects = [
  {
    title: "NPC Forge",
    image: npcForgeImage,
    description: `AI-powered character generator for games using Next.js, TypeScript, and OpenAI APIs. Now at v0.2.0 with comprehensive documentation and enhanced user experience, developed from concept to working application in under two weeks.

The tool uses GPT-4o-mini for generating comprehensive character profiles with personalities, backstories, and abilities, while DALL-E 3 creates matching character portraits. Features include customizable character traits, quest generation, dialogue lines, and inventory items.

Built with a responsive design using Tailwind CSS and organized with React contexts for state management. Includes a complete documentation system with navigation, user guides, and JSON export functionality for integration with game development workflows.`,
    github: "https://github.com/EthanPerello/npc-forge",
    website: "https://npc-forge-ethan-perellos-projects.vercel.app"
  },
  {
    title: "On-Chain City Builder",
    image: cityBuilderImage,
    description: `A blockchain-integrated multiplayer city-building game developed in Unity using the Dojo engine. This project combines city simulation with blockchain technology for persistent data storage.

Players purchase land tiles on a dynamically expanding grid and construct residential, commercial, and industrial buildings that affect resident happiness and income rates. The game features real-time economy simulation where buildings must be strategically placed adjacent to roads.

All game data including player balances, tile ownership, and building states are recorded on-chain using Dojo and Starknet, ensuring verifiable ownership and persistent gameplay. The implementation includes comprehensive camera controls, building menus, and an interactive leaderboard.`,
    github: "https://github.com/EthanPerello/DojoCityBuilder",
    play: "https://ethanperello.github.io/DojoCityBuilder/",
    video: "https://www.youtube.com/watch?v=lORypXL-UwA"
  },
  {
    title: "Medieval Fantasy RPG",
    image: rpgImage,
    description: `A feature-rich RPG built in Unity showcasing character progression, AI systems, and custom assets. Players can battle enemies, complete quests, and level up characters in a medieval fantasy world.

The game features a comprehensive character customization system with selectable appearance options and equipment that affect gameplay stats. Combat mechanics support both melee weapons (swords) and ranged weapons (bows) with appropriate animations and projectile physics.

Enemy AI is implemented using Unity's NavMesh system, providing goblins and skeletons with patrol patterns, chase behaviors, and attack sequences. The game also includes quests with objectives and rewards, an inventory system, and AI companion pets that follow the player and assist in gameplay.`,
    github: "https://github.com/EthanPerello/MedievalFantasyRPG",
    play: "https://ethanperello.github.io/MedievalFantasyRPG/"
  }
];

// Game Development Projects
export const gameProjects = {
  featured: [
    featuredProjects.find(project => project.title === "On-Chain City Builder"),
    featuredProjects.find(project => project.title === "Medieval Fantasy RPG"),
    {
      title: "Space Adventure",
      image: spaceGameImage,
      description: `A 3D action-adventure game built in Unity for Harvard's edX Game Development course. This project demonstrates comprehensive Unity development with player mechanics, AI systems, and level design.

The game features NavMesh-driven enemy AI with multiple behavior states (wandering, chasing, attacking) based on proximity detection. Players navigate a 3D environment, engage in real-time combat with enemies, collect gems to progress, and manage their health resources.

Implemented systems include animation state management, collision detection for combat, UI elements like health bars and collectible counters, and game state transitions between menu, gameplay, win, and game over screens.`,
      github: "https://github.com/EthanPerello/SpaceGame",
      play: "https://ethanperello.github.io/SpaceGame/",
      video: "https://www.youtube.com/watch?v=CufS2USIR1Y"
    }
  ],
  other: [
    {
      title: "Grid Resource Management",
      image: gridBuilderImage,
      description: `A strategic simulation game focused on resource collection and tile management. Players interact with different tile types to harvest resources and modify the environment. Features include resource tracking, context menu interaction systems, and balanced game economy.`
    },
    {
      title: "Dungeon Explorer",
      image: dungeonExplorerImage,
      description: `A React-based roguelike featuring procedural dungeon generation and keyboard controls. Implements user authentication with secure credential storage and generated dungeon layouts that change with each playthrough.`
    },
    {
      title: "Space Shooter",
      image: spaceShooterImage,
      description: `An arcade-style space shooter with physics-based movement and particle effects. Features include high score tracking with local storage, progressive difficulty scaling, and visual effects for explosions and weapon fire.`
    },
    {
      title: "Matching Puzzle Game",
      image: match3Image,
      description: `A React/TypeScript puzzle game with scoring and combo mechanics. Players match tiles to create cascading effects with multipliers for consecutive matches. Implements custom React hooks for state management with TypeScript for type safety.`
    },
    {
      title: "Café Dash",
      image: cafeDashImage,
      description: `A time-management game where players serve customers and manage restaurant workflow. Features customer patience mechanics, multi-stage service processes, and progressive difficulty with increasing customer frequency.`
    }
  ],
  cs50: [
    {
      title: "Pong",
      image: pongImage,
      video: "https://www.youtube.com/watch?v=r5pTh3Sn_Pk",
      github: "https://github.com/ethanperello/pong",
      description: "The first project in CS50's Game Development course, implemented in LÖVE2D with Lua. This recreation of the classic Atari game features two-player paddle control, collision detection systems, and basic game state management. The project demonstrates fundamental game development concepts including rendering, input handling, and simple physics."
    },
    {
      title: "Flappy Bird",
      image: flappyBirdImage,
      video: "https://www.youtube.com/watch?v=cguqEUa7aKc",
      github: "https://github.com/ethanperello/flappy-bird",
      description: "A LÖVE2D recreation of the popular mobile game, incorporating procedural generation for pipes, infinite scrolling, and collision detection. This project focuses on implementing gravity physics, randomized obstacles, and the game's signature one-button control scheme. Includes state machine logic for managing different game states (title screen, gameplay, game over)."
    },
    {
      title: "Breakout",
      image: breakoutImage,
      video: "https://www.youtube.com/watch?v=sVcEJVXvUBk&t=76s&pp=0gcJCb8Ag7Wk3p_U",
      github: "https://github.com/ethanperello/breakout",
      description: "An implementation of the Atari classic in LÖVE2D, featuring levels of increasing difficulty, brick layouts, powerups, and ball/paddle physics. This project demonstrates more complex game mechanics including bouncing physics based on collision angles and persistent progression between levels."
    },
    {
      title: "Match-3",
      image: match3CS50Image,
      video: "https://www.youtube.com/watch?v=uRAvr6jjvD4&t=2s",
      github: "https://github.com/ethanperello/match-3",
      description: "A Bejeweled-style matching puzzle game built in LÖVE2D that introduces tile-swapping mechanics, match detection algorithms, and animated transitions. This project focuses on grid-based gameplay and implementing timed game sessions with score tracking."
    },
    {
      title: "Pokémon",
      image: pokemonImage,
      video: "https://www.youtube.com/watch?v=vpGzT32EYfo&t=15s",
      github: "https://github.com/ethanperello/pokemon",
      description: "A turn-based battle system inspired by Pokémon, built in LÖVE2D. This project focuses on implementing state-based combat logic, menu systems, and entity statistics. Includes basic AI for opponent decisions and text-based battle narration."
    },
    {
      title: "The Legend of Zelda",
      image: zeldaImage,
      video: "https://www.youtube.com/watch?v=grg8zPM8IXQ",
      github: "https://github.com/ethanperello/legend-of-zelda",
      description: "A top-down adventure game inspired by early Legend of Zelda titles, implemented in LÖVE2D. Features room-based dungeon design, basic enemy AI, and player-world interaction. This project demonstrates tile-based level design and inter-room transitions."
    },
    {
      title: "Super Mario Bros",
      image: marioImage,
      video: "https://www.youtube.com/watch?v=EtEtVQGwuf4",
      github: "https://github.com/ethanperello/super-mario-bros",
      description: "A side-scrolling platformer based on the NES classic, built in LÖVE2D. This project incorporates tile-based level design, platforming physics with variable jump heights, and basic enemy behavior. Demonstrates techniques for handling sprite animation and scrolling camera systems."
    },
    {
      title: "Angry Birds",
      image: angryBirdsImage,
      video: "https://www.youtube.com/watch?v=O5gGkmil-Qg",
      github: "https://github.com/ethanperello/angry-birds",
      description: "A physics-based game created in LÖVE2D using Box2D for realistic physics simulation. This project focuses on implementing projectile trajectories, destructible structures, and the slingshot launch mechanic, introducing concepts of rigid body physics in game development."
    },
    {
      title: "Dread Halls",
      image: dreadHallsImage,
      video: "https://www.youtube.com/watch?v=K3X_o2Jlahg&t=2s",
      github: "https://github.com/ethanperello/dread-halls",
      description: "A first-person horror game built in Unity, marking the transition to 3D game development. Features procedurally generated maze-like environments, atmospheric lighting, and enemy AI. This project demonstrates 3D movement systems and creating tension through limited visibility and audio cues."
    },
    {
      title: "Portals",
      image: portalsImage,
      video: "https://www.youtube.com/watch?v=wftNRio_PEk",
      github: "https://github.com/ethanperello/portals",
      description: "A Unity-based 3D puzzle game inspired by Portal, focusing on teleportation mechanics and spatial puzzles. This project demonstrates advanced concepts in 3D rendering, teleportation effects, and physics-based puzzle design where objects maintain momentum through portals."
    },
    {
      title: "3D Helicopter Game",
      image: helicopterImage,
      video: "https://www.youtube.com/watch?v=l4muAD4axtU",
      github: "https://github.com/ethanperello/3d-helicopter-game",
      description: "A Unity 3D helicopter game where players navigate through obstacles. This project introduces rigidbody physics in 3D space, obstacle avoidance gameplay, and particle systems. Features procedurally generated terrain and obstacle courses with increasing difficulty."
    }
  ]
};

// Web Applications
export const webProjects = {
  featured: [
    featuredProjects.find(project => project.title === "NPC Forge")
  ],
  other: [
    {
      title: "Election Simulation",
      image: electionSimImage,
      description: `An interactive election simulator built with React and D3.js for data visualization. Users can create simulated elections with dynamically generated candidates for different political positions and view real-time vote counts.

Features include customizable election parameters, polling data generation, demographic voting patterns, and interactive charts showing results as they come in. The application uses React context for state management and implements complex data processing logic to simulate realistic voting behaviors based on demographic factors.`
    },
    {
      title: "User Manager Dashboard",
      image: userManagerImage,
      description: `A TypeScript React admin dashboard for user management with form validation and role-based access control. Features include efficient data fetching with React Query, toast notifications for operation feedback, and responsive design across device sizes.

The application implements a modular component architecture with reusable UI elements, authentication flow with JWT handling, and dark/light theme support. Backend integration includes RESTful API consumption with error handling and retry logic.`
    },
    {
      title: "Restaurant Website",
      image: restaurantImage,
      description: `A React Router restaurant website with food menu categories, nutritional information, and location finder. Implements client-side routing for seamless navigation and accessibility-focused design adhering to WCAG guidelines.

Features include dynamic menu filtering by category, dietary restrictions, and price range, along with an interactive map for finding nearby locations. The site incorporates responsive design principles and performance optimization techniques like code splitting and lazy loading.`
    },
    {
      title: "Fast Food Finder",
      image: fastFoodImage,
      description: `A restaurant interface featuring detailed menu items with nutritional information and location services. Implements responsive layouts that adapt to different screen sizes and consistent component design across the application.

The application uses geolocation APIs to find nearby restaurant locations, implements search functionality with filters, and provides detailed nutritional information for all menu items. Built with React and styled-components for consistent theming.`
    },
    {
      title: "Email Design System",
      image: emailSystemImage,
      description: `A system for building responsive email templates with React components. Features reusable, email-client compatible components that render consistently across Gmail, Outlook, and Apple Mail with responsive design for different devices.

The system includes a visual editor for creating templates without code, a component library with drag-and-drop functionality, and preview modes for different email clients and device sizes. Implements best practices for email deliverability and accessibility.`
    },
    {
      title: "Well Validation Toolkit",
      image: wellValidationImage,
      description: `A data visualization application for analyzing oil well measurements using React, D3.js, and WebGL. Features interactive graphs with zoom capabilities, multi-well comparison functionality, and anomaly detection to identify potential issues in measurement data.

The toolkit processes large datasets efficiently with WebWorkers for background calculations, implements multi-layered visualizations for different data types, and provides export functionality for reports. Includes validation algorithms to verify data integrity and highlight potential measurement errors.`
    }
  ]
};

// ML & Data Science Projects
export const mlProjects = [
  {
    title: "NYC School Closure Predictor",
    image: nycImage,
    description: `A data science project analyzing patterns in New York high school closures using Python, Pandas, and scikit-learn. This research identified key performance indicators that predict school closures with high accuracy.

Data collection involved merging datasets from New York State and NYC databases, focusing on graduation rates, GED attainment, and dropout percentages across demographic subgroups. Statistical analysis revealed that dropout rates among male and Black/African American students were particularly strong indicators of future closures.

The predictive model achieved 99.1% accuracy in cross-validation using logistic regression, with feature importance analysis highlighting the most critical factors. The project includes interactive visualizations of findings and a dashboard for exploring at-risk schools.`,
    github: "https://github.com/EthanPerello/New-York-Student-Outcomes-and-School-Closures",
    website: "https://ethanperello.github.io/New-York-Student-Outcomes-and-School-Closures/"
  },
  {
    title: "March Madness Outcome Predictor",
    image: marchMadnessImage,
    description: `A machine learning project predicting NCAA basketball tournament outcomes using historical data, team statistics, and betting odds. This Kaggle competition entry explored various modeling approaches to minimize prediction error.

Feature engineering incorporated seed differences, win percentages, scoring statistics, and strength-of-schedule metrics, while also leveraging betting odds as a powerful predictor that captures market sentiment. The model pipeline implemented multiple algorithms including Logistic Regression, Random Forest, and XGBoost with hyperparameter tuning.

Evaluation used season-by-season cross-validation and the competition's log-loss metric to ensure robustness. The final ensemble model integrated multiple prediction approaches for optimal performance.`,
    github: "https://github.com/EthanPerello/march-madness-prediction",
    website: "https://ethanperello.github.io/march-madness-prediction/",
    kaggle: "https://www.kaggle.com/competitions/march-machine-learning-mania-2023"
  }  
];

// Graphic Design & Video Projects
export const graphicProjects = [
  {
    title: "Sealand Basketball",
    image: sealandThumbnailImage,
    description: "Brand identity for a fictional basketball organization based in Sealand. The project includes logo design, color scheme development, and promotional materials for a youth tournament using Photoshop and After Effects.",
    fullDescription: "Brand identity for a fictional basketball organization based in Sealand. The project includes logo design, color scheme development, and promotional materials for a youth tournament. The design uses blue and orange colors to represent the sea and basketball, with wave elements integrated into the visual identity. Created using Adobe Photoshop and After Effects.",
    media: [
      {
        id: "sealand-poster",
        type: "image",
        src: sealandPosterImage,
        caption: "Promotional poster for the Sealand Youth Basketball Tournament featuring the brand's visual identity."
      },
      {
        id: "sealand-final-logo",
        type: "image",
        src: sealandFinalLogoImage,
        caption: "Final Sealand Basketball logo featuring basketball and maritime design elements."
      },
      {
        id: "sealand-logo-drafts",
        type: "image",
        src: sealandLogoDraftsImage,
        caption: "Initial logo concepts exploring different approaches to the Sealand Basketball brand identity."
      }
    ]
  },
  {
    title: "Tokyo Grand Bowl Video Ads",
    image: bowlingThumbnailImage,
    description: "Motion graphics for a Tokyo bowling alley's exterior displays. Created with Premiere Pro, featuring vibrant purple-tinted bowling sequences, celebratory moments, and building display mockups.",
    fullDescription: "Series of video advertisements designed for the exterior displays of a Tokyo bowling alley. The videos feature bowling action sequences, strike celebrations with green screen effects, and a visualization of how the ads would appear on the building. Created using Adobe Premiere Pro with a consistent visual style featuring vibrant colors and purple tinting.",
    media: [
      {
        id: "grand-bowl-building",
        type: "video",
        src: grandBowlBuildingVideo,
        caption: "Visualization showing how the ads would appear on the Tokyo Grand Bowl building exterior."
      },
      {
        id: "grand-bowl-strike",
        type: "video",
        src: grandBowlStrikeVideo,
        caption: "Strike celebration sequence with green-screened performers and animated text overlay."
      },
      {
        id: "grand-bowl-montage",
        type: "video",
        src: grandBowlMontageVideo,
        caption: "Slow-motion bowling sequence from ball release to pin impact with vibrant color treatment."
      }
    ]
  }
];