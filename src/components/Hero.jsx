import React from "react";
import { motion } from "framer-motion";
import image from "../assets/profilepic.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="profile"
            className="rounded-full w-[300px] cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Bhavarth Petare
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a Web Developer having intermediate knowledge of React.js and
            Javascript. I've been creating websites since my first year of
            engineering. I'm passionate about creating user-friendly and
            visually appealing websites. I'm always eager to learn and improve
            my skills.
          </p>
        </motion.div>
      </div>
      <p>Hero</p>
    </div>
  );
};

export default Hero;
