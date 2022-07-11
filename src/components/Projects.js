import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';

export default function Projects() {
    return (
        <section id="projects" className="bg-background2 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4 text-accent" />
                    <h1 className="sm:text4xl text-3xl font-medium title-font mb-4 text-accent">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        A collection of applications that demonstrate my ability to adapt to complex requirements and new tech stacks.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 h-50vh">
                    {projects.map((project) => {
                        return (<a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative border-2 border-accent">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-top"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full bg-header opacity-0 hover:opacity-90 ">
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
                    })}
                </div>
            </div>
        </section>
    );
}