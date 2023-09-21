import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { portfolioTexts, projectsInfo } from "@/types/projects";
import Link from "next/link";
import { languageValidator } from "@/utils/languageValidator";
import portfolioData from "@/data/projects.json";

interface projectsProps {
  screenSize: number;
}

function Projects({ screenSize }: projectsProps) {
  const [portfolioInfo, setPortfolioInfo] = useState<portfolioTexts>();
  const [renderProjects, setRenderProjects] = useState<Array<projectsInfo>>();

  useEffect(() => {
    setPortfolioInfo(languageValidator(portfolioData) as portfolioTexts);
    if (screenSize && portfolioInfo) {
      if (screenSize >= 1024) {
        setRenderProjects(portfolioInfo.projects.slice(0, 6));
      } else if (screenSize <= 640) {
        setRenderProjects(portfolioInfo.projects.slice(0, 3));
      } else {
        setRenderProjects(portfolioInfo.projects.slice(0, 4));
      }
    }
  }, [screenSize, portfolioInfo]);

  return (
    <div id="Portfolio-section" className="mt-20 w-full lg:mb-20">
      {typeof portfolioInfo !== "undefined" && (
        <>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl lg:mb-10">
            {portfolioInfo.title}
          </h3>
          <div className="grid grid-cols-1 gap-2 mb-10 md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mb-7">
            {renderProjects &&
              renderProjects.map((project: projectsInfo) => {
                return (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
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
            {portfolioInfo.moreProjects}
          </Link>
        </>
      )}
    </div>
  );
}

export default Projects;
