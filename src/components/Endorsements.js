import React from 'react';
import { UsersIcon } from "@heroicons/react/solid";
import { endorsements } from "../data";

export default function Endorsements() {
    return (
        <section id="endorsements" className="bg-background2 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4 text-accent" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-accent mb-4">
                    Endorsements
                </h1>
                <div className="flex flex-wrap m-4">
                    {endorsements.map((endorsement) => {
                        return (
                            <div className="p-4 lg:w-1/2 w-full">
                                <div className="h-full py-8 px-6 rounded-lg bg-background">
                                    <p className="leading-relaxed mb-6 text-justify">
                                        &emsp;&emsp;{endorsement.quote}
                                    </p>
                                    <div className="inline-flex items-center align-middle">

                                        <img
                                            alt="endorsement"
                                            src={endorsement.image}
                                            className="w-16 rounded-full flex-shrink-0 object-cover object-center border-1"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-accent">
                                                {endorsement.name}
                                            </span>
                                            <span className="text-accent text-sm uppercase">
                                                {endorsement.title}
                                            </span>
                                            <span className="text-primary text-sm uppercase">
                                                {endorsement.company}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}