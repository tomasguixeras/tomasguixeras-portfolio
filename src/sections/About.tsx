"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AboutButtons from "@/components/AboutButtons";
import { languageValidator } from "@/utils/languageValidator";
import { AboutInterface, AboutTexts } from "@/types/json-data/about-types";
import aboutData from "@/data/about-texts.json";
import { useTranslations } from "next-intl";

interface AboutProps {
  screenSize: number;
}

function About({ screenSize }: AboutProps) {
  const t = useTranslations("About");
  const keys = ["calendly", "curriculum"] as const;
  const [aboutText, setAboutText] = useState<AboutTexts>();

  useEffect(() => {
    setAboutText(languageValidator(aboutData as AboutInterface) as AboutTexts);
  }, []);

  return (
    <div id="services" className="mt-20 w-full">
      <div className="w-full flex flex-row items-center">
        <div className="flex-1 flex flex-col h-fit lg:mr-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl">
            {t("title")}
          </h3>
          <p>{t("text")}</p>
          {screenSize >= 1024 && (
            <div className="flex flex-row mt-12">
              {typeof aboutText !== "undefined" &&
                keys.map((key: string) => {
                  return (
                    <AboutButtons
                      key={key}
                      icon={t(`actionButtons.${key}.icon`)}
                      title={t(`actionButtons.${key}.title`)}
                      url={t(`actionButtons.${key}.url`)}
                    />
                  );
                })}
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
