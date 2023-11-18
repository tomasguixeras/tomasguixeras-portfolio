import Image from "next/image";
import React from "react";
import { Calendly } from "./SVGs/Calendly";
import { Curriculum } from "./SVGs/Curriculum";

interface AboutButtonsProps {
  icon: string;
  title: string;
  url: string;
}

function AboutButtons({ icon, title, url }: AboutButtonsProps) {
  return (
    <a
      target="_blank"
      href={url}
      className="w-full max-w-md border-2 border-black dark:border-white rounded-full flex items-center justify-center py-3 px-3 relative lg:text-lg hover:shadow hover:shadow-slate-300"
    >
      <div className="mr-4">
        {icon === "calendly" && <Calendly />}
        {icon === "curriculum" && <Curriculum />}
      </div>
      <p>{`${title}`}</p>
    </a>
  );
}

export default AboutButtons;
