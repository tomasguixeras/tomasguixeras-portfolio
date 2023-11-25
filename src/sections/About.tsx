"use client";
import React from "react";
import Image from "next/image";
import AboutButtons from "@/components/AboutButtons";
import { useTranslations } from "next-intl";

interface AboutProps {
  screenSize: number;
}

function About({ screenSize }: AboutProps) {
  const t = useTranslations("About");
  const keys = ["calendly", "curriculum"] as const;

  return (
    <div id="services" className="mt-20 w-full">
      <div className="w-full flex flex-row items-center">
        <div className="flex-2 flex flex-col h-fit lg:mr-6 lg:basis-2/3">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-black to-[#242531] dark:from-white dark:to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl">
            {t("title")}
          </h3>
          <p>{t("text")}</p>
          {screenSize >= 1024 && (
            <div className="flex flex-row mt-12 gap-4">
              {keys.map((key: string) => {
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
        {screenSize >= 1024 && (
          <div className="flex-1 w-fit basis-1/3">
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
