import Image from "next/image";
import React from "react";

function AboutButtons({ icon, title, url }: any) {
  return (
    <a
      target="_blank"
      href={url}
      className="border-2 rounded-full flex items-center justify-center py-2 px-3 relative m-4 lg:text-lg hover:shadow hover:shadow-slate-300"
    >
      <Image
        src={`/social-icons/${icon}-logo.svg`}
        width={20}
        height={20}
        alt="demo social media icons"
        className="mr-2"
      />
      <p>{`${title}`}</p>
    </a>
  );
}

export default AboutButtons;
