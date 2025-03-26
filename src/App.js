import React from "react";

const projects = [
  {
    title: "NYC School Closures Prediction",
    image: "placeholder-image-url",
    description:
      "A data science project analyzing and predicting school closures in NYC using Python and public datasets.",
    github: "https://github.com/yourusername/nyc-closures",
    youtube: "https://youtube.com/yourvideo",
    live: "https://yourusername.github.io/nyc-closures",
  },
  {
    title: "March Madness Predictor",
    image: "placeholder-image-url",
    description:
      "Machine learning project to predict outcomes of NCAA March Madness games.",
    github: "https://github.com/yourusername/march-madness",
    youtube: "",
    live: "",
  },
  {
    title: "City Builder Game (Dojo)",
    image: "placeholder-image-url",
    description: "A city building game developed using the Dojo game engine.",
    github: "https://github.com/yourusername/city-builder",
    youtube: "",
    live: "",
  },
  {
    title: "Space Game",
    image: "placeholder-image-url",
    description: "A 2D space shooter game built from scratch.",
    github: "",
    youtube: "",
    live: "",
  },
  {
    title: "Medieval Themed Game",
    image: "placeholder-image-url",
    description: "A medieval fantasy game with RPG elements.",
    github: "",
    youtube: "",
    live: "",
  },
  {
    title: "Mini Projects",
    image: "placeholder-image-url",
    description:
      "A collection of smaller web and game projects demonstrating a variety of skills.",
    github: "",
    youtube: "",
    live: "",
  },
];

export default function Portfolio() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-4 flex flex-col bg-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 object-cover h-48 w-full"
            />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="mt-auto flex gap-2 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.youtube && (
                <a
                  href={project.youtube}
                  className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  className="text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
