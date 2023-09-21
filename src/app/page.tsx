"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import About from "@/sections/About";
import Footer from "@/components/Footer";
import Projects from "@/sections/Projects";
import IconButton from "@/components/IconButton";
import Technologies from "@/components/Technologies";

import links from "@/data/external-links.json";

export default function Home() {
  const heroButtons = links.slice(0, 3);

  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const screen = localStorage.getItem("screen-size");
    screen && setScreenSize(parseInt(screen));
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

        <About screenSize={screenSize} />

        <Projects screenSize={screenSize} />
      </main>
      <Footer />
    </div>
  );
}
