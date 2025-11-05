import React from "react";
import {
  BiLogoAngular,
  BiLogoCPlusPlus,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Skills = () => {
  const variant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="skills"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={variant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Skills
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoPython className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoCPlusPlus className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={variant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
        >
          <BiLogoAngular className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
