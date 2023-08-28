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
    <div className="flex items-center justify-center mr-6 ml-0">
      <Image
        className="mr-2"
        src={`/technologies/${item.icon}-logo.svg`}
        alt={`${name} Logo`}
        height={20}
        width={20}
      />
      <p className="text-blue-950 font-semibold">{item.name}</p>
    </div>
  );
}

export default TechCard;
