"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { languageValidator } from "@/utils/languageValidator";

import Footer from "@/components/Footer";
import Projects from "@/sections/Projects";
import IconButton from "@/components/IconButton";
import Technologies from "@/components/Technologies";
import AboutButtons from "@/components/AboutButtons";

import projects from "@/data/projects.json";
import links from "@/data/external-links.json";
import aboutData from "@/data/about-texts.json";

import { AboutInterface, AboutTexts } from "@/types/json-data/about-types";
import { cardInfo } from "@/types/projects";

export default function Home() {
  const aboutText = languageValidator(
    aboutData as AboutInterface
  ) as AboutTexts;

  const heroButtons = links.slice(0, 3);

  const [screenSize, setScreenSize] = useState(0);
  const [renderProjects, setRenderProjects] = useState<Array<cardInfo>>([]);

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
                {aboutText.title}
              </h3>
              <p>{`${aboutText.description}`}</p>
              {screenSize >= 1024 && (
                <div className="flex flex-row mt-12">
                  <AboutButtons
                    icon={aboutText.buttons.calendly.icon}
                    title={aboutText.buttons.calendly.title}
                    url={aboutText.buttons.calendly.url}
                  />
                  <AboutButtons
                    icon={aboutText.buttons.curriculum.icon}
                    title={aboutText.buttons.curriculum.title}
                    url={aboutText.buttons.curriculum.url}
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

        <Projects renderProjects={renderProjects} />
      </main>
      <Footer />
    </div>
  );
}
