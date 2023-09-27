import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import Calendly from "./svgComponents/Calendly";
import Curriculum from "./svgComponents/Curriculum";

interface AboutButtonsProps {
  icon: string;
  title: string;
  url: string;
}

function AboutButtons({ icon, title, url }: AboutButtonsProps) {
  const { theme, setTheme } = useTheme();
  return (
    <a
      target="_blank"
      href={url}
      className="w-full max-w-lg border-2 border-[#242531] rounded-full flex items-center justify-center py-3 px-3 relative m-4 md:py-4 lg:text-lg hover:shadow hover:shadow-slate-300 dark:border-[#f4f2ee]"
    >
      {icon === "calendly" ? (
        <Calendly color={theme === "dark" ? "#f4f2ee" : "#242531"} />
      ) : (
        <Curriculum color={theme === "dark" ? "#f4f2ee" : "#242531"} />
      )}
      <p className="ml-4">{`${title}`}</p>
    </a>
  );
}

export default AboutButtons;
