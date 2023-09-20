import ProjectCard from "@/components/ProjectCard";
import { cardInfo } from "@/types/projects";
import Link from "next/link";
import React from "react";

function Projects({ renderProjects }: any) {
  return (
    <div id="Portfolio-section" className="mt-20 w-full lg:mb-20">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-6 md:text-4xl lg:mb-10">
        Portfolio
      </h3>
      <div className="grid grid-cols-1 gap-2 mb-10 md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:mb-7">
        {renderProjects &&
          renderProjects.map((project: cardInfo) => {
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
  );
}

export default Projects;
