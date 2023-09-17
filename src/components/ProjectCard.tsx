import React from "react";
import Image from "next/image";
import { cardInfo } from "@/types/projects";

function ProjectCard({ name, description, image }: cardInfo) {
  return (
    <div className="mb-2 cursor-pointer">
      <div className={"border w-full h-44 rounded-lg overflow-hidden"}>
        <Image
          src="/demo-full-page.png"
          alt="demo"
          width={500}
          height={500}
          className="w-full hover:scale-110 transition-all duration-500 "
        />
      </div>
      <p className="ml-2 font-bold text-md md:text-xl">{name}</p>
      <p className="ml-2 text-sm italic md:text-md">{description}</p>
    </div>
  );
}

export default ProjectCard;
