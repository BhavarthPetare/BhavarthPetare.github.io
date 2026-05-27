import { BiMenu, BiX } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white md:backdrop:focus-visible:text-center "
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Bhavarth
      </motion.a>

      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, staggerChildren: 0.1 }}
        className="hidden md:flex gap-5 px-4"
      >
        {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ scale: 1.1, color: "#a855f7" }}
            className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
          >
            <li>{item}</li>
          </motion.a>
        ))}
      </motion.ul>
      
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="hidden md:flex gap-5 px-4"
      >
        <motion.li whileHover={{ y: -3 }} className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
          <a href="https://instagram.com/bhavarth.in/" target="_blank">
            <FaInstagram className="size-7 duration-200 hover:text-fuchsia-600" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -3 }} className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
          <a href="https://www.linkedin.com/in/bhavarthpetare/" target="_blank">
            <FaLinkedin className="size-7 duration-200 hover:text-blue-500" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -3 }} className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
          <a href="https://github.com/BhavarthPetare/" target="_blank">
            <FaGithub className="size-7 duration-200 hover:text-white" />
          </a>
        </motion.li>
      </motion.ul>

      {isOpen ? (
        <BiX
          className="block size-10 md:hidden text-4xl opacity-80 hover:opacity-100 transition-all duration-300"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block size-10 md:hidden text-4xl opacity-80 hover:opacity-100 transition-all duration-300"
          onClick={menuOpen}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed md:hidden right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 bg-black/90 p-12"
          >
            <ul className="flex flex-col gap-8">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
                >
                  <li>{item}</li>
                </a>
              ))}
              <ul className="flex flex-wrap gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                  <a href="https://instagram.com/bhavarth.in/" target="_blank">
                    <FaInstagram className="size-7 duration-200 hover:text-fuchsia-600" />
                  </a>
                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                  <a href="https://www.linkedin.com/in/bhavarthpetare/" target="_blank">
                    <FaLinkedin className="size-7 duration-200 hover:text-blue-500" />
                  </a>
                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                  <a href="https://github.com/BhavarthPetare/" target="_blank">
                    <FaGithub className="size-7 duration-200 hover:text-white" />
                  </a>
                </li>
              </ul>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
