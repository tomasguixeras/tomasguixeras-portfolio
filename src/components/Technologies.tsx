"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

import technologies_data from "../data/technologies.json";
import TechCard from "./TechCard";

function Technologies() {
  return (
    <Marquee
      className="text-center w-screen py-3 text-md bg-[#e5e5e5]  md:py-5 md:text-lg"
      pauseOnHover={true}
    >
      {technologies_data?.map((data, i) => (
        <TechCard key={i} item={data} />
      ))}
    </Marquee>
  );
}

export default Technologies;
