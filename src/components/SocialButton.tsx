import Image from "next/image";
import React from "react";
import { socialButtonType } from "@/types/socialButtons";

function SocialButton({ icon, title, url }: socialButtonType) {
  return (
    <a
      href={url}
      className="border-2 rounded-full flex items-center justify-center py-2 px-3 w-9/12 relative m-1 lg:w-80 lg:h-14 lg:text-lg lg:font-semibold hover:shadow hover:shadow-slate-300"
    >
      <Image
        src={`/social-icons/${icon}`}
        width={25}
        height={25}
        alt="demo social media icons"
        className="absolute left-7"
      />
      {`${title}`}
    </a>
  );
}

export default SocialButton;
