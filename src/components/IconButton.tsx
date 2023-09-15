import Image from "next/image";
import React from "react";

function IconButton({icon, url}: any) {
  return (
    <div className="flex items-center justify-center border-2 w-12 h-12 rounded-full m-2">
      <a href={url}>
        <Image
          src={`/social-icons/${icon}-logo.svg`}
          alt="Social Icon Button"
          height={22}
          width={22}
        />
      </a>
    </div>
  );
}

export default IconButton;
