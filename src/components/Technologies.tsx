"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import technologies_data from "../data/technologies.json";
import TechCard from "./TechCard";

type TechnData = {
  icon: string;
  name: string;
};

function Technologies() {
  return (
    <Marquee
      className="text-center w-screen py-2 bg-[#FFC25C] "
      pauseOnHover={true}
    >
      {technologies_data?.map((data, i) => (
        <TechCard key={i} item={data} />
      ))}
    </Marquee>
  );
}

export default Technologies;
