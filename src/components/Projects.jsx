import React from "react";
import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const projectsData = [
  {
    title: "CurioHub",
    description:
      "Real-Time Web Application for Chat Rooms. A platform for users to create and join chat rooms based on shared interests.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Worqube",
    description:
      "Placement and TNP Management Platform. A streamlined placement process, increasing operational efficiency and data accuracy.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Supabase"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 pt-24"
    >
      <motion.h1
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            className="bg-blue-900 border border-blue-800 rounded-xl shadow-lg p-6 w-80 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-200">
              {project.title}
            </h2>
            <p className="mb-4 text-blue-100">{project.description}</p>
            <div>
              <span className="font-medium text-blue-300">Technologies:</span>
              <ul className="list-disc pl-5 mt-2 text-blue-200">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
