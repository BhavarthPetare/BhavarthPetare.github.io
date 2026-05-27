import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import image from "../assets/profilepic.jpg";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  // Mouse position relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform smooth values to a small fixed radius (e.g., -20px to 20px)
  const translateX = useTransform(smoothX, [-300, 300], [-20, 20]);
  const translateY = useTransform(smoothY, [-300, 300], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const paragraph = "I'm a Web Developer having intermediate knowledge of React.js and Javascript. I've been creating websites since my first year of engineering. I'm passionate about creating user-friendly and visually appealing websites. I'm always eager to learn and improve my skills.";

  return (
    <div
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="mt-8"
        >
          <motion.div
            style={{ x: translateX, y: translateY }}
          >
            <motion.img
              src={image}
              alt="profile"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-full w-[250px] cursor-pointer shadow-xl shadow-indigo-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[300px]"
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Bhavarth Petare
          </motion.h1>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl md:text-3xl"
          >
            Web Developer
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="md:text-base text-pretty text-sm text-gray-400"
          >
            <p>{paragraph}</p>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
