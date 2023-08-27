import Image from "next/image";
import React from "react";

function IconButton({icon, url}: any) {
  return (
    <div className="flex items-center justify-center border-2 w-14 h-14 rounded-full m-2">
      <a href={url}>
        <Image
          src={`/social-icons/${icon}-logo.svg`}
          alt="Social Icon Button"
          height={30}
          width={30}
        />
      </a>
    </div>
  );
}

export default IconButton;
