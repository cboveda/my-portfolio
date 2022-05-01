import React from 'react';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import { skills } from '../data';

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-stone-50">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Just a few of the many things I've learned over the course of my professional and academic careers.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => {
                        return (
                            <div key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-900 rounded flex p-4 full items-center">
                                    <BadgeCheckIcon className="text-sky-600 w-6 h-6 flex-shrink-0 mr-4" />
                                    <span className="title-font font-medium text-stone-50">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}