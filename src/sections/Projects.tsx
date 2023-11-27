import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

interface projectsProps {
  screenSize: number;
}

function Projects({ screenSize }: projectsProps) {
  const t = useTranslations("Portfolio");
  const keys = [
    "HenryDogApp",
    "MarketsCenter",
    "42iCripto",
    "ColorTester",
    "reverseWords",
    "tomasGuixeras",
    "gamePlugins",
  ];

  const [renderProjects, setRenderProjects] = useState<Array<string>>(keys);

  useEffect(() => {
    if (screenSize) {
      if (screenSize >= 1024) {
        setRenderProjects(renderProjects.slice(0, 6));
      } else if (screenSize <= 640) {
        setRenderProjects(renderProjects.slice(0, 3));
      } else {
        setRenderProjects(renderProjects.slice(0, 4));
      }
    }
  }, [screenSize]);

  return (
    <div id="portfolio" className="mt-20 w-full lg:mb-20">
      <>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-black to-[#242531] dark:from-white dark:to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl lg:mb-10">
          {t("title")}
        </h3>
        <div className="grid grid-cols-1 gap-2 mb-10 md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mb-7">
          {renderProjects &&
            renderProjects.map((project: string) => {
              return (
                <ProjectCard
                  key={project}
                  id={t(`projects.${project}.id`)}
                  name={t(`projects.${project}.name`)}
                  description={t(`projects.${project}.description`)}
                  image={t(`projects.${project}.image`)}
                  link={t(`projects.${project}.link`)}
                />
              );
            })}
        </div>
        <Link
          className="underline pl-2 md:text-xl hover:text-slate-600 dark:hover:text-slate-200 "
          href="/portfolio"
        >
          {t("moreProjects")}
        </Link>
      </>
    </div>
  );
}

export default Projects;
