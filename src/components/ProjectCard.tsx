import React from "react";

interface cardInfo {
  name: string;
  description: string;
  image: string;
  technologies?: string[];
}

function ProjectCard({ name, description, image, technologies }: cardInfo) {
  return (
    <div className="mb-2">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`border w-full h-44 rounded-lg`}
      ></div>
      <p className="ml-2 font-bold text-md md:text-2xl">{name}</p>
      <p className="ml-2 text-sm italic md:text-lg">{description}</p>
    </div>
  );
}

export default ProjectCard;
