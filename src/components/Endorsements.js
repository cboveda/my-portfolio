import React from 'react';
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { endorsements } from "../data";

export default function Endorsements() {
    return (
        <section id="endorsements" className="bg-slate-800 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-stone-50 mb-12">
                    Endorsements
                </h1>
                <div className="flex flex-wrap m-4">
                    {endorsements.map((endorsement) => {
                        return (
                            <div className="p-4 lg:w-1/2 w-full">
                                <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                    <TerminalIcon className="inline w-8 text-gray-500 mb-4" />
                                    <p className="leading-relaxed mb-6 text-justify">
                                        {endorsement.quote}
                                    </p>
                                    <div className="inline-flex items-center">
                                        <img
                                            alt="endorsement"
                                            src={endorsement.image}
                                            className="w-16 rounded-full flex-shrink-0 object-cover object-center border-1"
                                        />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-stone-50">
                                                {endorsement.name}
                                            </span>
                                            <span className="text-gray-200 text-sm uppercase">
                                                {endorsement.title}
                                            </span>
                                            <span className="text-sky-200 text-sm uppercase">
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