import React from "react";
import { cardInfo } from "@/types/projects";

function ProjectCard({ name, description, image }: cardInfo) {
  return (
    <div className="mb-2">
      <div
        style={{
          backgroundImage: "url(demo-full-page.png)",
          // backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
        className={`border w-full h-44 rounded-lg`}
      ></div>
      <p className="ml-2 font-bold text-md md:text-xl">{name}</p>
      <p className="ml-2 text-sm italic md:text-md">{description}</p>
    </div>
  );
}

export default ProjectCard;
