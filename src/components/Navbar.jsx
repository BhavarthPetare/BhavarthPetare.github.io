import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white md:backdrop:focus-visible:text-center ">
      <a
        href="/"
        className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Bhavarth
      </a>

      <ul className="hidden md:flex gap-5 px-4">
        <a
          href="#home"
          className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
        >
          <li>Home</li>
        </a>
        <a
          href="#skills"
          className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
        >
          <li>Skills</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
        >
          <li>Contact</li>
        </a>
      </ul>
      <ul className="hidden md:flex gap-5 px-4">
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

      {isOpen && (
        <div
          className={`fixed md:hidden right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 bg-black/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
            >
              <li>Home</li>
            </a>
            <a
              href="#skills"
              className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
            >
              <li>Skills</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 hover:opacity-100 text-xl transition-all duration-300"
            >
              <li>Contact</li>
            </a>
            <ul className="flex flex-wrap gap-5">
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                <a href="https://instagram.com/bhavarth.in/" target="_blank">
                  <FaInstagram className="size-7 duration-200 hover:text-fuchsia-600" />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                <a
                  href="https://www.linkedin.com/in/bhavarthpetare/"
                  target="_blank"
                >
                  <FaLinkedin className="size-7 duration-200 hover:text-blue-500" />
                </a>
              </li>
              <li className="cursor-pointer text-xl opacity-70 transition-all duration-200 hover:opacity-100">
                <FaGithub className="size-7 duration-200 hover:text-white" />
              </li>
            </ul>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
