import React from 'react';
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
    return (
        <header className="bg-slate-900 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <p className="title-font font-medium text-stone-50 mb-4 md:mb-0">
                    <a href="#about" className="text-2xl hover:text-sky-600">
                        Chris Boveda
                    </a>
                </p>
                <nav className="md:mr-auto md:ml-5 md:pt-1 md:pl-4 md:border-gray-700">
                    <a href="#projects" className="mr-5 hover:text-sky-500">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-sky-500">
                        Skills
                    </a>
                    <a href="#endorsements" className="hover:text-sky-500">
                        Endorsements
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-slate-600 border-0 py-1 px-3 focus:outline-none hover:bg-sky-600 rounded text-base mt-4 md:mt-0"
                >
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}