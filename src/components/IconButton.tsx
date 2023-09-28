import Image from "next/image";
import React from "react";
import { iconButtonType } from "@/types/buttons";

function IconButton({ icon, url }: iconButtonType) {
  return (
    <a
      href={url}
      className="flex items-center justify-center border-2 border-[#242531] w-12 h-12 rounded-full m-2 hover:rotate-45 hover:duration-300 hover:shadow-inner hover:shadow-white dark:border-[#f4f2ee]"
    >
      <Image
        src={`/social-icons/${icon}`}
        alt="Social Icon Button"
        height={22}
        width={22}
      />
    </a>
  );
}

export default IconButton;
