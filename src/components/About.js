import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-20 py-20 lg:flex-row flex-col items-center xl:w-[1280px]">
        <div className="lg:flex-grow lg:w-1/2 xl:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl mb-4 font-medium">
            Hello, I'm{" "}
            <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              Chris.
            </span>
            <br className="lg:inline-block" />
            <span className="md:text-4xl text-2xl">
              I love to solve problems.
            </span>
          </h1>

          <ul className="my-8 leading-relaxed list-none md:list-[square] list-outside md:pl-4">
            <li className="md:pb-0 pb-6">
              Engineer at Scopely on the Monopoly Go! team working on core experience improvements and client development.
            </li>
            <li className="md:pb-0 pb-6">
              Former packaging engineering manager with over ten years supporting the aerospace, semiconductor, and medical industries.
            </li>
            <li className="md:pb-0 pb-6">
              Graduated summa cum laude with B.S. in Software Engineering in December 2022 from Arizona State University.
            </li>
          </ul>

        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 flex xl:justify-center lg:justify-end md:justify-center">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="./headshot3.webp"
          />
        </div>
      </div>
    </section>
  );
}
