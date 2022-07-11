import React from 'react';

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium">
                        Hello, I'm <span class="text-primary">Chris</span>.
                        <br className="lg:inline-block" />
                        I love to solve problems.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Experienced packaging engineer with over ten years in the aerospace, semiconductor, and medical industries. Graduating in December 2022 with B.S. in Software Engineering and with honors. Seeking opportunities to expand my robust problem solving skill set in to the software engineering field.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="bg-backgorund border border-main py-2 px-6 focus:outline-none text-lg text-primary hover:text-background hover:bg-primary transition-colors duration-400 ease-in-out">
                            Contact
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 bg-backgorund border border-main py-2 px-6 focus:outline-none text-lg text-primary hover:text-background hover:bg-primary transition-colors duration-400 ease-in-out">
                            Past Work
                        </a>
                    </div>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2">
                    <img
                        className="object-cover object-center rounded-full"
                        alt="hero"
                        src="./headshot.png"
                    />
                </div>
            </div>
        </section>
    )
}