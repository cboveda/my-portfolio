import { CodeIcon } from "@heroicons/react/solid";
import { FaGithub, FaDev } from "react-icons/fa";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="before:content:'' before:block before:mt-[-72px] before:h-[72px]"
    >
      <div className="bg-background body-font">
        <div className="container px-5 py-10 mx-auto text-center xl:w-[1280px]">
          <div className="flex flex-col w-full mb-10">
            <CodeIcon className="mx-auto inline-block w-10 mb-4 text-accent" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-accent">
              Projects
            </h1>
          </div>
          <div className="text-center text-xl leading-relaxed -m-4 pb-10 text-slate-600">
            <p>
              Follow my progress on{" "}
              <a
                href="https://github.com/cboveda"
                className="text-primary font-medium inline hover:text-secondary relative transition-colors duration-300 ease-in-out"
              >
                <FaGithub className="inline-block pb-1" />
                GitHub
              </a>
              {" "}
              and{" "}
              <a
                href="https://dev.to/cboveda"
                className="text-primary font-medium inline hover:text-secondary relative transition-colors duration-300 ease-in-out"
              >
                <FaDev className="inline pb-1" />
                DEV
              </a>
              .
            </p>
            <div className="flex flex-row justify-center space-x-2"></div>
          </div>
          <div className="flex flex-wrap m-4">
            {projects.map((project, i) => {
              return (<div
                key={i}
                className="lg:w-1/2 w-full p-4 mx-auto">
                <div className="w-full flex relative rounded-lg overflow-hidden">
                  <div className="w-full">
                    <div className="px-8 py-4 relative z-8 w-full bg-header">
                      <h1 className="title-font text-lg font-medium text-background mb-1">
                        {project.title}
                      </h1>
                      <h2 className="tracking-widest text-sm title-font text-primary mb-1">
                        {project.type + " | " + project.date}
                      </h2>
                    </div>
                    <div className="bg-background2">
                      <p className="leading-relaxed py-4 px-3 text-main">
                        {project.description}
                      </p>
                      <p>
                        {project.link === "" ?
                          <span className="text-sm inline">Ask me about this project!</span> :
                          <a className="text-primary text-sm font-medium inline hover:text-secondary relative transition-colors duration-300 ease-in-out" href={project.link}>
                            View on GitHub
                          </a>}
                      </p>
                      <p className="p-3 flex-wrap">
                        {project.tags?.map((tag, i) => {
                          return (<span key={i} className="break-none bg-background text-main text-xs rounded-lg overflow-hidden px-2 py-1 m-1">
                            {tag}
                          </span>)
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
