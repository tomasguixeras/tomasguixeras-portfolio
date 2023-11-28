"use client";
import React from "react";
import { useTranslations } from "next-intl";

import ProjectCard from "@/components/ProjectCard";

function Projects() {
  const t = useTranslations("Portfolio");
  const projects = [
    "HenryDogApp",
    "MarketsCenter",
    "42iCripto",
    "ColorTester",
    "reverseWords",
    "tomasGuixeras",
    "gamePlugins",
  ];
  return (
    <div className="w-11/12 grid grid-cols-1 gap-4 my-10 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-10 lg:mb-12">
      {projects &&
        projects.map((project: string) => {
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
  );
}

export default Projects;
