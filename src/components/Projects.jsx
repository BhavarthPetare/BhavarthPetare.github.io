import { motion } from "framer-motion";

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const projectsData = [
  {
    title: "CurioHub",
    description:
      "Real-Time Web Application for Chat Rooms. A platform for users to create and join chat rooms based on shared interests.",
    technologies: ["React", "CSS", "JavaScript", "Python", "MongoDB"],
    link: "https://curiohub.onrender.com/"
  },
  {
    title: "Worqube",
    description:
      "Placement and TNP Management Platform. A streamlined placement process, increasing operational efficiency and data accuracy.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Supabase"],
    link: "https://www.google.com/"
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
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="flex flex-wrap items-stretch justify-center gap-10 p-5"
      >
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
            className="flex flex-col bg-blue-900 border border-blue-800 rounded-xl shadow-lg p-6 w-80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-blue-200">
                {project.title}
              </h2>
              <p className="mb-4 text-blue-100">{project.description}</p>
              <div className="mb-6">
                <span className="font-medium text-blue-300">Technologies:</span>
                <ul className="list-disc pl-5 mt-2 text-blue-200">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto px-5 py-3 rounded-lg bg-white text-black font-medium text-center hover:bg-slate-400 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
