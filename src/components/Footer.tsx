
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa6";

export default async function Footer() {


  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            Shruti Gupta
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © 2024 Shruti Gupta
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
        <ul className="flex items-center gap-1">
            
            <Link
                href="#about"
                className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
            >
                About
            </Link>
            <Link
                href="#experience"
                className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
            >
                Experience
            </Link>
            
            <Link
                href="#projects"
                className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400"
            >
                Projects
            </Link>
        </ul>
        </nav>

        <div className="socials inline-flex justify-center sm:justify-end">
            <a href="https://github.com/shrutiiigupta" 
            target="_blank"
                className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400">
                <FaGithub />
            </a>

            <a href="https://dribbble.com/gupta_shruti08" target="_blank"
                className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400">
                <FaDribbble/>
            </a>

            <a href="https://www.linkedin.com/in/shrutigupta0806/" target="_blank"
                className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400">
                <FaLinkedin />
            </a>
        </div>

      </div>
    </Bounded>
  );
}