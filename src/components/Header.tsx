import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center">
    <header
    
      className="rounded-lg bg-slate-300 text-black fixed top-2 w-[82%] px-4 py-2 md:px-8 md:py-4 z-50 transition-all duration-300 ease-in-out "
    > 
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Name */}
        <Link href="/" aria-label="Home Page">
          <h1 className="text-xl font-bold">Shruti Gupta</h1>
        </Link>

        {/* Navigation Links */}
        
        <nav className="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900">
          <Link href="#about" aria-label="About Page" className="px-4 py-4 hover:underline decoration-yellow-300 decoration-8 underline-offset-4">
            <span className="relative">About</span> 
          </Link>

          <span className=" text-4xl font-thin leading-[0] text-slate-400 md:inline">/</span>
          
          <Link href="#experience" aria-label="Experience Page" className="px-4 py-4 hover:underline decoration-yellow-300 decoration-8 underline-offset-4">
            Experience
          </Link>

          <span className=" text-4xl font-thin leading-[0] text-slate-400 md:inline">/</span>

          <Link href="#projects" aria-label="Projects Page" className="px-4 py-4 hover:underline decoration-yellow-300 decoration-8 underline-offset-4">
            Projects
          </Link>

          <span className=" text-4xl font-thin leading-[0] text-slate-400 md:inline">/</span>

          <Link href="#contact" aria-label="Contact Page" className="px-4 py-4 hover:underline decoration-yellow-300 decoration-8 underline-offset-4">
            Contact
          </Link>
        </nav>

        
      </div>
    </header>
    </div>
  );
}
