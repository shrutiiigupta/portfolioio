"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
// import clsx from "clsx";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Avatar() {
  const component = useRef(null);

useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component.current, // Element to trigger animation on scroll
        start: " bottom", // Start animation when element reaches center of viewport
        end: "top  ", // End animation when element leaves center of viewport
        scrub: 1, // Animation speed relative to scroll speed
      },
    });

    tl.fromTo(
      ".avatar",
      {
        opacity: 0,
        scale: 1.2,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power3.inOut",
      }
    );
    

    window.onmousemove = (e) => {
            if (!component.current) return; // no component, no animation!
            const componentRect = (
              component.current as HTMLElement
            ).getBoundingClientRect();
            const componentCenterX = componentRect.left + componentRect.width / 2;
    
            let componentPercent = {
              x: (e.clientX - componentCenterX) / componentRect.width / 2,
            };
    
            let distFromCenterX = 1 - Math.abs(componentPercent.x);
    
            gsap
              .timeline({
                defaults: { duration: 0.5, overwrite: "auto", ease: "power3.out" },
              })
              .to(
                ".avatar",
                {
                  rotation: gsap.utils.clamp(-2, 2, 5 * componentPercent.x),
                  duration: 0.5,
                },
                0,
              )
              .to(
                ".highlight",
                {
                  opacity: distFromCenterX - 0.7,
                  x: -10 + 20 * componentPercent.x,
                  duration: 0.5,
                },
                0,
              );
          };

  }, component);

  return () => ctx.revert(); // cleanup!
}, []);

  return (
    <div ref={component} className="row-start-1 max-w-sm md:col-start-2 md:row-end-3">
      <div
        className="avatar aspect-square overflow-hidden rounded-3xl border-2 border-slate-700 opacity-0"
        style={{ perspective: "500px", perspectiveOrigin: "150% 150%" }}
      >
        <img
          src="/images/s4edit_501.png"
          className="avatar-image h-full w-full object-fill"
          alt="Avatar"
        />
        <div className="highlight absolute inset-0 hidden w-full scale-110 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 md:block"></div>
      </div>
    </div>
  );
}