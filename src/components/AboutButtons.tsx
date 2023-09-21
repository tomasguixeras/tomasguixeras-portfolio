import Image from "next/image";
import React from "react";

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
      className="w-full max-w-lg border-2 rounded-full flex items-center justify-center py-3 px-3 relative m-4 md:py-4 lg:text-lg hover:shadow hover:shadow-slate-300"
    >
      <Image
        src={`/social-icons/${icon}-logo.svg`}
        width={20}
        height={20}
        alt="demo social media icons"
        className="mr-4"
      />
      <p>{`${title}`}</p>
    </a>
  );
}

export default AboutButtons;
