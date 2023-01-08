import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-20 py-20 md:flex-row flex-col items-center xl:w-[1280px]">
        <div className="lg:flex-grow md:w-1/2 xl:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium">
            Hello, I'm{" "}
            <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              Chris.
            </span>
            <br className="lg:inline-block" />I love to solve problems.
          </h1>
          <p className="mb-8 leading-relaxed">
            <ul className="list-disc ml-5">
              <li>
                Graduated <i>summa cum laude</i> with B.S. in Software
                Engineering in December 2022 from Arizona State University.
              </li>
              <li>
                Experienced packaging engineer with over ten years supporting
                the aerospace, semiconductor, and medical industries.
              </li>
              <li>
                Seeking opportunities to expand my robust problem solving skill
                set in to the software engineering field.
              </li>
            </ul>
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 flex xl:justify-center lg:justify-end md:justify-center">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./headshot2.png"
          />
        </div>
      </div>
    </section>
  );
}
