import { CodeIcon } from "@heroicons/react/solid";
import { FaGithub, FaDev } from "react-icons/fa";
import React from "react";
// import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="before:content:'' before:block before:mt-[-72px] before:h-[72px]"
    >
      <div className="bg-background body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 xl:w-[1280px]">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4 text-accent" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-accent">
              Apps I've Built
            </h1>
          </div>
          <div className="text-center text-xl leading-relaxed -m-4 pb-10 text-slate-600">
            <p>Under construction! Ask me about my work.</p>
            <p>
              Or, follow my progress on{" "}
              <a
                href="https://dev.to/cboveda"
                className="text-primary inline hover:text-secondary hover:underline relative transition-colors duration-300 ease-in-out"
              >
                <FaDev className="inline pb-1" />
                DEV
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/cboveda"
                className="text-primary inline hover:text-secondary hover:underline relative transition-colors duration-300 ease-in-out"
              >
                <FaGithub className="inline-block pb-1" />
                GitHub
              </a>
              .
            </p>
            <div className="flex flex-row justify-center space-x-2"></div>
          </div>
          <div className="flex flex-wrap -m-4 h-50vh">
            {/* {projects.map((project) => {
                            return (<a
                                href={project.link}
                                key={project.image}
                                className="sm:w-1/2 w-100 p-4">
                                <div className="flex relative border border-accent">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                        src={project.image}
                                    />
                                    <div className="px-8 py-10 relative z-8 w-full bg-header opacity-0 hover:opacity-90 ">
                                        <h2 className="tracking-widest text-sm title-font font-bold text-primary mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-background mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="leading-relaxed py-8 text-background">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>)
                        })} */}
          </div>
        </div>
      </div>
    </section>
  );
}
