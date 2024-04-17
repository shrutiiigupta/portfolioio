"use client";

import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);


export default function ContentList() {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });


  const items = [
    {
      title: "YouText- Youtube Summarizer",
      tags: ["Python", "Machine Learning", "NLP"],
      loc: "Github",
      imageUrl: "/images/youtex.png", // Replace with your image URL
      githubUrl: "https://github.com/shrutiiigupta/youtube-summarizer",
    },
    {
      title: "Portfolio Website",
      tags: ["NextJS", "ThreeJS", "GSAP"],
      loc: "Github",
      imageUrl: "/images/port.png", // Replace with your image URL
      githubUrl: "https://github.com/shrutiiigupta/LibraryManagement-NetBeans",
    },
    {
      title: "Library Management System",
      tags: ["Java", "MySQL", "DBMS"],
      loc: "Github",
      imageUrl: "https://github.com/shrutiiigupta/LibraryManagement-NetBeans/raw/main/newBook.jpg?raw=true", // Replace with your image URL
      githubUrl: "https://github.com/shrutiiigupta/LibraryManagement-NetBeans",
    },
    {
        title: "Zeitgeist- IIT Ropar Cultural Fest",
        tags: ["Figma", "Prototyping", "User Interface"],
        loc: "Figma",
        imageUrl: "/images/seit.png", // Replace with your image URL
        githubUrl: "https://www.figma.com/file/WqD1GkGOAyFvLJlWkYmWk8/ZeitgeistMyFiles?type=design&node-id=0%3A1&mode=design&t=IBWsv5ftE02rEm18-1",
      },
    {
        title: "Flight Booking App",
        tags: ["React", "Responsive", "Animations"],
        loc: "Github",
        imageUrl: "/images/flyy.png", // Replace with your image URL
        githubUrl: "https://github.com/shrutiiigupta/Flight-Booking",
      },
    // Add more items to the array
  ];

  useEffect(() => {
    
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });

      return () => ctx.revert(); // cleanup!
    }, component);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1), // Apply rotation based on speed and direction
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);

  const onMouseEnter = (index: number) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  const contentImages = items.map((item) => item.imageUrl);
  const handleItemRef = (el: HTMLLIElement | null) => {
    // You don't need to return anything here
    itemsRef.current.push(el);
  };

  return (
    <>
      <ul
        ref={component}
        className="grid border-b border-b-slate-100"
        onMouseLeave={onMouseLeave}
      >
        {items.map((item, index) => (
          <li
            key={index}
            ref={handleItemRef}
            onMouseEnter={() => onMouseEnter(index)}
            className="list-item opacity-0"
          >
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between border-t border-t-slate-100 py-10  text-slate-200 md:flex-row"
              aria-label={item.title || ""}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{item.title}</span>
                <div className="flex gap-3 text-yellow-400 overflow-hidden">
                  {item.tags?.map((tag, index) => (
                    <span key={index} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0 overflow-hidden">
                {"View on"} {`${item.loc}`} <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}

        {/* Hover element */}
        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[260px] w-[380px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
}