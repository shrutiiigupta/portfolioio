"use client";
import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/Bounded";
import Shapes from "./Shapes";
import emailjs from "@emailjs/browser";
// import { nextConfig } from 'next/config';

import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

import { MdCircle } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaBehance, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
/*for skill cards */
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";

/*exprience */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

/*for projects-blogs*/
import ContentList from "@/components/ContentList";

import Globlyy from "@/components/Globlyy";
import { SiLeetcode } from "react-icons/si";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Hero = (): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1, 0.3)",
          duration: 1,
          transformOrigin: "left top",
          delay: 0.5,
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".job-title",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scale: 1,
          ease: "elastic.out(1,0.3)",
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderletters = (name: string) =>
    name.split("").map((letter, index) => (
      <span
        key={index}
        className="name-animation inline-block opacity-0 animate"
      >
        {letter}
      </span>
    ));

  const techList = [
    { tech_name: "JavaScript", tech_color: "#EFD81D" },
    { tech_name: "Figma", tech_color: "#F18C61" },
    { tech_name: "Java", tech_color: "#F388E7" },
    { tech_name: "Illustrator", tech_color: "#5DFC78" },
    { tech_name: "React", tech_color: "#61DAFB" },
    { tech_name: "three.js", tech_color: "#5DFC78" },
  ];

  const images = [
    "/images/java.png",
    "/images/html5.png",
    "/images/sassy2.png",
    "/images/tail.png",
    "/images/githubb.png",
    "/images/javascript.png",
    "/images/react.png",
    "/images/python.png",
    "/images/npm.png",
    "/images/gti.png",
    "/images/figma.png",
    "/images/illu.png",
    "/images/gsap.png",
    "/images/sql.png",
    "/images/css.png",
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/shrutiiigupta",
      alt: "GitHub Profile",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shrutigupta0806/",
      alt: "LinkedIn Profile",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/202151151/",
      alt: "Leetcode Profile",
    },
    {
      icon: <FaDribbble />,
      url: "https://dribbble.com/gupta_shruti08",
      alt: "Dribbble Profile",
    },
    {
      icon: <FaBehance />,
      url: "https://www.behance.net/gupta_shruti",
      alt: "Behance Profile",
    },
    {
      icon: <BsMedium />,
      url: "https://guptashruti08.medium.com/",
      alt: "Medium Profile",
    },
    // Add more links as needed
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create GSAP animation and ScrollTrigger here
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true, // pin the trigger element while active
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
          // duration: 1,
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  // const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // e.preventDefault();
    e.stopPropagation();
    console.log(e);
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("blalalal");
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.NEXT_PUBLIC__EMAILJS_SERVICE_ID,
        "service_w2q2vqq",
        // import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        "template_yhwv43v",
        {
          from_name: form.name,
          to_name: "Shruti Gupta",
          from_email: form.email,
          to_email: "shrutigupta.kin@gmail.com",
          message: form.message,
        },
        // import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        "ZzRyDMbWT6HALWNVj"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <Bounded ref={component}>
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Shapes />
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
            <span className="block text-slate-300">
              {renderletters("Shruti")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderletters("Gupta")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {"Crafting Code, Designing Experiences"}
          </span>
        </div>
      </div>

      <section id="about">
        <br />
        <br />
        <br />
        {/* <br /> */}
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading size="xl" className="col-start-1">
            About Shruti
          </Heading>

          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            <p>
              Hey, I’m Shruti! I grew up in the North India and love all things
              creative. My mum, being the creative person of the house have
              always fueled my passion for design and coding.
            </p>
            <p>
              I am a pre-final year student from IIIT Vadodara. I craft
              interactive experiences that are not just functional, but also
              visually stunning.
            </p>
            <p>
              When I am not coding, you will find me exploring the latest tech
              or playing badminton!
            </p>
            <p>
              Join me as I continue to push the boundaries in the digital world!
            </p>

            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.alt}
                  className="text-3xl hover:text-slate-500"
                  aria-label={link.alt}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <Button />

          <Avatar />
        </div>
      </section>

      <section id="skills" className="mt-20 wrapper overflow-hidden">
        <Heading size="xl" className="mb-8" as="h2">
          What I use
        </Heading>

        {techList.map(({ tech_color, tech_name }, index) => (
          <div
            key={index}
            className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
            aria-label={tech_name || ""}
          >
            {Array.from({ length: 14 }, (_, index) => (
              <React.Fragment key={index}>
                <span
                  className={
                    "tech-item text-6xl font-extrabold uppercase tracking-tighter "
                  }
                  style={{
                    color: index === 7 && tech_color ? tech_color : "inherit",
                  }}
                >
                  {tech_name}
                </span>
                <span className="text-2xl">
                  <MdCircle />
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </section>

      <Heading size="sm" className="mb-8" as="h2">
        More in my toolbox:
      </Heading>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 ">
        {images.map((image, index) => (
          <CardContainer key={index} className="group">
            <CardBody
              className="bg-gray-50 relative group-hover:shadow-2xl group-hover:shadow-emerald-500/[0.1] 
            dark:bg-slate-800 dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border"
            >
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={image}
                  height="1000"
                  width="1000"
                  className="h-16 w-16 object-cover rounded-xl group-hover:shadow-xl"
                  alt={`Project ${index + 1}`}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <section id="experience">
        <br />
        <Heading size="xl" className="mb-8 mt-20" as="h2">
          Experience - Education
        </Heading>

        <VerticalTimeline>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(98, 216, 78)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(98, 216, 78)" }}
            date="May 2024 - July 2024"
            iconStyle={{ background: "rgb(3, 45, 66)", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={"/images/servicenow.png"}
                  alt={"ServiceNow"}
                  className="w-[68%] h-[68%] object-contain"
                />
              </div>
            }
          >
            <h3 className="text-slate-900 text-[24px] font-extrabold">
              Associate Software Engineer Intern
            </h3>
            <h4 className="text-green-950 text-secondary text-[20px] font-bold">
              ServiceNow
            </h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                Details comming soon
              </li>
              <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                Intern will start in may
              </li>
              <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                No info yet
              </li>
            </ul>
            <p className="text-slate-900 tracking-wide">
              Dummy text, Awesome Intern, Lovable, Will grab PPO, Fun
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#d6b588", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #d6b588" }}
            date="Aug 2023 - Dec 2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={"/images/zeit.png"}
                  alt={"ServiceNow"}
                  className="w-[96%] h-[96%] object-contain"
                />
              </div>
            }
          >
            <h3 className="text-slate-900 text-[24px] font-extrabold">
              UI/UX Designer
            </h3>
            <h4 className="text-red-950 text-secondary text-[20px] font-bold">
              Zeitgeist-IIT Ropar
            </h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                Designed a website that perfectly captures the essence of
                Zeitgeist IIT Ropars Cultural Fest, prioritizing user experience
                and visual appeal.
              </li>
              <li className="text-slate-900 font-semibold text-[14px] pl-1 tracking-wide">
                Collaborated with the core team members of Zeitgeist and
                integrated their persepectives to maximise experience and
                customer success.
              </li>
            </ul>
            <p className="text-slate-900 tracking-wide">
              Figma, Creative Direction, User Experience, Visual Design, Team
              Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#e93572", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #e93572" }}
            date="Jun 2023 - Present"
            iconStyle={{ background: "#37dbff", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={"/images/freelan.png"}
                  alt={"freelance"}
                  className="w-[86%] h-[86%] object-contain"
                />
              </div>
            }
          >
            <h3 className="text-white text-[24px] font-extrabold">
              UX Designer / Graphic Designer
            </h3>
            <h4 className="text-white text-secondary text-[20px] font-bold">
              Freelance
            </h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                Details comming soon
              </li>
              <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                Intern will start in may
              </li>
              <li className="text-white font-semibold text-[14px] pl-1 tracking-wide">
                No info yet
              </li>
            </ul>
            <p className="text-white tracking-wide">
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#5FB4FA", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #5FB4FA" }}
            date="Aug 2022 - Aug 2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={"/images/gdsc.png"}
                  alt={"gdsc"}
                  className="w-[82%] h-[82%] object-contain"
                />
              </div>
            }
          >
            <h3 className="text-slate-900 text-[24px] font-extrabold">
              Design Volunteer
            </h3>
            <h4 className="text-cyan-950 text-secondary text-[20px] font-bold">
              Google Developer Student Clubs-IIIT Vadodara
            </h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                Empowered fellow students by conducting impactful design
                workshops, fostering active participation.
              </li>
              <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                Led the design team for College fest websites, ensuring
                impactful visuals and a successful user experience.
              </li>
              <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                Designed engaging posters for various events, effectively
                promoting activities.
              </li>
            </ul>
            <p className="text-slate-950 tracking-wide">
              UX design principles, Graphic designing, Workshop facilitation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffdd3c", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #ffdd3c" }}
            date="Dec 2021 - May 2025"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={"/images/iiitv.png"}
                  alt={"gdsc"}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
            }
          >
            <h3 className="text-slate-900 text-[24px] font-extrabold">
              B.Tech, CSE
            </h3>
            <h4 className="text-black text-secondary text-[20px] font-bold">
              Indian Institute of Information Technology Vadodara
            </h4>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              <li className="text-slate-950 font-semibold text-[14px] pl-1 tracking-wide">
                Grade: 7.23/10
              </li>
            </ul>
            <p className="text-slate-950 tracking-wide">
              DSA, Algorithms, Operating Systems, OOPs, DBMS, Computer Networks,
              Cryptography, AI
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      <section id="projects" className=" overflow-hidden">
        <br />
        <br />
        <br />
        <Heading size="xl" className="mb-8" as="h2">
          Projects
        </Heading>
        <ContentList />
      </section>

      <section id="contact" className="overflow-hidden">
        <br />
        <br />
        <br />
        <Heading>Contact Me</Heading>

        {/* blogs */}
        <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
          <Globlyy />
          <div className="col-start-1 md:row-start-1">
            <div
              className={`xl:mt-8 flex xl:flex-row gap-10 overflow-hidden outline-dashed`}
            >
              <form
                // ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8 ml-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-bold mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    // onChange={handleChange}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="What's your good name?"
                    className="bg-tertiary py-4 px-24 pl-4 pr-56 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your web address?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">
                    Your Message
                  </span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What you want to say?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                  />
                </label>

                <button
                  type="submit"
                  className="bg-slate-800 py-3 px-8 rounded-xl outline-white w-fit text-white font-bold shadow-md shadow-primary mb-8"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <br />
        <br />
      </section>

      <Footer />
    </Bounded>
  );
};

export default Hero;
