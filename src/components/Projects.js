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
              Work
            </h1>
          </div>
          <div className="flex flex-wrap m-4">
            {projects.map((project, i) => {
              return (<div
                key={i}
                className="lg:w-1/2 w-full p-4 mx-auto text-left">
                <div className="w-full flex relative rounded-lg overflow-hidden">
                  <div className="w-full">
                  <div className="relative">
                      <img className="w-full h-60 object-cover object-center" src={project.header} alt={project.title} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-secondary opacity-70" />
                      <div className="absolute inset-0 px-8 py-4 flex flex-col justify-end">
                          <h1 className="title-font text-2xl font-medium text-background mb-1 ">
                            {project.title}
                          </h1>
                          <h2 className="tracking-widest text-sm title-font text-background mb-1">
                            {project.type + " | " + project.date}
                          </h2>
                      </div>
                  </div>
                    <div className="px-8 py-8 bg-background2 relative">
                      <p className="leading-relaxed text-main">
                        {project.description}
                      </p>
                      <p className="pt-6">
                        <a className="text-primary text-sm font-medium inline hover:text-secondary relative transition-colors duration-300 ease-in-out" href={project.link}>
{project.link.slice(12)}
                        </a>
                      </p>
                      <p className="pt-4 flex-wrap">
                        {project.tags?.map((tag, i) => {
                          return (<span key={i} className="break-none bg-background text-main text-xs rounded-lg overflow-hidden px-2 py-1 mr-2">
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
