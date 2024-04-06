import React from "react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function Navbar() {
  return (
    <header className="bg-header md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 px-10 flex-col md:flex-row items-center text-background xl:w-[1280px]">
        <p className="title-font mb-4 md:mb-0 font-bold">
          <a
            href="#about"
            className="text-2xl hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Chris Boveda
          </a>
        </p>
        <nav className="md:mr-auto md:ml-5 md:pt-1 md:pl-4 font-medium">
          <a
            href="#endorsements"
            className="mr-5 hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Endorsements
          </a>
          <a
            href="#projects"
            className="hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Projects
          </a>
        </nav>
        <nav className="flex mt-5 md:mt-0">
          <a href="https://github.com/cboveda">
            <FaGithub className="hover:text-primary relative text-2xl mr-5 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/chris-boveda/">
            <FaLinkedin className="hover:text-primary relative text-2xl mr-5 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://dev.to/cboveda">
            <FaDev className="hover:text-primary relative text-2xl transition-colors duration-300 ease-in-out" />
          </a>
        </nav>
      </div>
    </header>
  );
}
