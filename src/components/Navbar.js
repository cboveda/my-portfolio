import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
            className="mr-5 hover:text-primary transition-colors duration-300 ease-in-out"
          >
            Past Work
          </a>
          <a
            href="/Chris_Boveda_-_Software_Engineer.pdf"
            className="hover:text-primary"
          >
            Resume
          </a>
        </nav>
        {/* {                <a
                    href="#contact"
                    className="group inline-flex items-center bg-background border-0 border-main py-1 px-3 focus:outline-none hover:bg-primary hover:text-background text-base mt-4 md:mt-0 text-secondary transition duration-100 ease-in-out"
                >
                    <p>Hire Me</p>
                    <ArrowRightIcon className="w-4 h-4 ml-1 relative group-hover:translate-x-1 transition ease-in-out duration-300" />
                </a>} */}
        <nav className="flex mt-5 md:mt-0">
          <a href="#contact">
            <GrMail className="hover:text-primary relative text-2xl mr-5 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/cboveda">
            <FaGithub className="hover:text-primary relative text-2xl mr-5 transition-colors duration-300 ease-in-out" />
          </a>
          <a href="https://www.linkedin.com/in/chris-boveda/">
            <FaLinkedin className="hover:text-primary relative text-2xl transition-colors duration-300 ease-in-out" />
          </a>
        </nav>
      </div>
    </header>
  );
}
