"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import IconButton from "@/components/IconButton";
import ProjectCard from "@/components/ProjectCard";
import Technologies from "@/components/Technologies";
import AboutButtons from "@/components/AboutButtons";

import links from "@/data/external-links.json";
import projects from "@/data/projects.json";

interface projectsStructure {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
}

export default function Home() {
  const heroButtons = links.slice(0, 3);

  const [screenSize, setScreenSize] = useState(0);
  const [renderProjects, setRenderProjects] = useState<
    Array<projectsStructure>
  >([]);

  useEffect(() => {
    const screen = localStorage.getItem("screen-size");
    screen && setScreenSize(parseInt(screen));
    if (screen) {
      if (parseInt(screen) >= 1024) {
        setRenderProjects(projects.slice(0, 6));
      } else if (parseInt(screen) <= 640) {
        setRenderProjects(projects.slice(0, 3));
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
            alt="Tomas Bohn Guixeras profile picture"
            src="/tomas-hero-sin-fondo.png"
            draggable="false"
            height={500}
            width={500}
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
              {heroButtons.map((button) => {
                return (
                  <IconButton
                    key={button.slug}
                    icon={button.icon}
                    url={button.url}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-screen m-0 p-0">
          <Technologies />
        </div>

        <div id="about-section" className="mt-20 w-full">
          <div className="w-full flex flex-row items-center">
            <div className="flex-1 flex flex-col h-fit lg:mr-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl">
                About Me
              </h3>
              <p>
                Desarrollador junior en constante búsqueda de la simplicidad
                elegante en la programación y el diseño. <br /> Mi objetivo es
                crear conexiones virtuales que inspiren y resuelvan problemas.
              </p>
              {screenSize >= 1024 && (
                <div className="flex flex-row mt-12">
                  <AboutButtons
                    icon={"calendly"}
                    title={"Book a Meeting"}
                    url={
                      "https://calendly.com/tomasguixeras/reunion-con-tomas-bohn-guixeras?month=2023-09"
                    }
                  />
                  <AboutButtons
                    icon={"curriculum"}
                    title={"Download cv"}
                    url={
                      "/curriculum/CV Tomas Bohn Guixeras | Fullstack Developer | Español.pdf"
                    }
                  />
                </div>
              )}
            </div>
            {screenSize >= 700 && (
              <div className="flex-1 m-6">
                <Image
                  src="/computer-about-me.png"
                  alt="demo bla bla"
                  draggable="false"
                  height={500}
                  width={500}
                />
              </div>
            )}
          </div>
        </div>

        <div id="Portfolio-section" className="mt-20 w-full lg:mb-20">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl lg:mb-10">
            Portfolio
          </h3>
          <div className="grid grid-cols-1 gap-2 mb-10 md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mb-7">
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
          <Link
            className="underline pl-2 md:text-xl hover:text-slate-200 hover:drop-shadow-white"
            href="/portfolio"
          >
            See more projects
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
