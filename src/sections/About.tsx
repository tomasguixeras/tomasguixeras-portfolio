"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AboutButtons from "@/components/AboutButtons";
import { languageValidator } from "@/utils/languageValidator";
import { AboutInterface, AboutTexts } from "@/types/json-data/about-types";
import aboutData from "@/data/about-texts.json";

interface AboutProps {
  screenSize: number;
}

function About({ screenSize }: AboutProps) {
  const [aboutText, setAboutText] = useState<AboutTexts>();

  useEffect(() => {
    setAboutText(languageValidator(aboutData as AboutInterface) as AboutTexts);
  }, []);

  return (
    <div id="about-section" className="mt-20 w-full">
      <div className="w-full flex flex-row items-center">
        <div className="flex-1 flex flex-col h-fit lg:mr-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl">
            {aboutText && aboutText.title}
          </h3>
          <p>{aboutText && aboutText.description}</p>
          {screenSize >= 1024 && (
            <div className="flex flex-row mt-12">
              {typeof aboutText !== "undefined" && (
                <>
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
                </>
              )}
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
  );
}

export default About;
