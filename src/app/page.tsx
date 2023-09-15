"use client";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import IconButton from "@/components/IconButton";
import ProjectCard from "@/components/ProjectCard";
import Technologies from "@/components/Technologies";

import projects from "@/data/projects.json";
import { useState, useEffect } from "react";

interface projectsStructure {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function Home() {
  // const [screenSize, setScreenSize] = useState(0);
  const [renderProjects, setRenderProjects] = useState<
    Array<projectsStructure>
  >([]);

  useEffect(() => {
    const screen = localStorage.getItem("screen-size");
    // screen && setScreenSize(parseInt(screen));
    if (screen) {
      if (parseInt(screen) >= 1024) {
        setRenderProjects(projects.slice(0, 6));
      } else {
        setRenderProjects(projects.slice(0, 4));
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full p-0 m-0 overflow-hidden">
      <main
        id="container"
        className="w-5/6 flex flex-col justify-center items-center"
      >
        <div
          id="hero-section"
          className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:gap-6 lg:my-12 font-display"
        >
          <Image
            src="/tomas-hero-sin-fondo.png"
            width={500}
            height={500}
            alt="Tomas Bohn Guixeras profile picture"
          />

          <div className="flex flex-col items-center my-4 md:my-7 lg:flex-1 lg:items-start">
            <div id="text-container" className="text-center lg:text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFC25C] to-[#ffe551] text-transparent bg-clip-text md:text-5xl lg:text-6xl">
                Tomas Bohn Guixeras
              </h1>
              <h4 className="text-2xl italic font-semibold md:text-3xl lg:text-4xl">
                Fullstack Developer
              </h4>
            </div>

            <div id="icon-buttons-container" className="flex w-fit my-5">
              <IconButton
                icon={"linkedin"}
                url={"https://www.linkedin.com/in/tomasbohnguixeras/"}
              />
              <IconButton
                icon={"github"}
                url={"https://github.com/tomasguixeras"}
              />
              <IconButton
                icon={"x"}
                url={"https://twitter.com/tomasguixeras"}
              />
            </div>
          </div>
        </div>
        <div className="w-screen m-0 p-0">
          <Technologies />
        </div>

        <div id="about-section" className="mt-20 w-full">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-4 md:text-4xl">
            About Me
          </h3>
          <p>
            Desarrollador junior en constante búsqueda de la simplicidad
            elegante en la programación y el diseño. Mi objetivo es crear
            conexiones virtuales que inspiren y resuelvan problemas.
          </p>
        </div>

        <div id="Portfolio-section" className="mt-20 w-full lg:mb-20">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-4 md:text-4xl">
            Portfolio
          </h3>
          <div className="grid grid-cols-2 gap-2 mb-10 md:gap-4 lg:grid-cols-3">
            {renderProjects &&
              renderProjects.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                  />
                );
              })}
          </div>
          <Link className="underline pl-2 md:text-2xl" href="/portfolio">
            See more projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
