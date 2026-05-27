import {
  BiLogoAngular,
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { icon: <BiLogoPostgresql />, color: "text-sky-500", label: "Postgresql" },
    { icon: <BiLogoJavascript />, color: "text-yellow-500", label: "Javascript" },
    { icon: <BiLogoReact />, color: "text-sky-500", label: "React" },
    { icon: <BiLogoTailwindCss />, color: "text-blue-500", label: "Tailwind" },
    { icon: <BiLogoMongodb />, color: "text-green-500", label: "Mongodb" },
    { icon: <BiLogoPython />, color: "text-yellow-500", label: "Python" },
    { icon: <BiLogoCPlusPlus />, color: "text-blue-500", label: "C++" },
    { icon: <BiLogoAngular />, color: "text-red-500", label: "Angular" },
  ];

  return (
    <div
      id="skills"
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-16 py-20"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Skills
      </motion.h1>

      <div className="relative w-full max-w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-fit whitespace-nowrap gap-20 py-10 px-10"
        >
          {/* Duplicated icons for continuous loop */}
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-6 transition-transform duration-300 hover:scale-110"
            >
              <div className={`${skill.color} text-[100px] sm:text-[120px] md:text-[140px]`}>
                {skill.icon}
              </div>
              <span className="text-base font-medium text-gray-400 md:text-lg">
                {skill.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
