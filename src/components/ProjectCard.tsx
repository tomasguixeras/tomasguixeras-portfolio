import React from "react";
import { cardInfo } from "@/types/projects";

function ProjectCard({ name, description, image }: cardInfo) {
  return (
    <div className="mb-2">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
        className={`border w-full h-44 rounded-lg`}
      ></div>
      <p className="ml-2 font-bold text-md md:text-2xl">{name}</p>
      <p className="ml-2 text-sm italic md:text-lg">{description}</p>
    </div>
  );
}

export default ProjectCard;
