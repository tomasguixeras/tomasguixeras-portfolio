import React from "react";
import Image from "next/image";

type Technology = {
  icon: string,
  name: string
}

type ItemComponentProps = {
  item: Technology;
};

function TechCard({ item }: ItemComponentProps) {
  return (
    <div className="flex items-center justify-center mr-8 ml-0 md:mr-10">
      <Image
        className="mr-2"
        src={`/technologies/${item.icon}-logo.svg`}
        alt={`${item.name} Logo`}
        height={25}
        width={25}
      />
      <p className="text-blue-950 font-semibold md:text-xl">{item.name}</p>
    </div>
  );
}

export default TechCard;
