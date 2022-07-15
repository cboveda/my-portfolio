import React from 'react';
import { ChipIcon } from '@heroicons/react/solid';
import { skills } from '../data';
import SkillBadge from './SkillBadge';

export default function Skills() {
    return (
        <section id="skills" className="before:content:'' before:block before:mt-[-72px] before:h-[72px]">
            <div className="container px-5 py-10 mx-auto xl:w-[1280px]">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4 text-accent" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-accent">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Just a few of the many things I've learned over the course of my professional and academic careers.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill, i) => {
                        return (
                            <SkillBadge skill={skill} key={i} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}