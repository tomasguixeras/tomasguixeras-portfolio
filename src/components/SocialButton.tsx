import Image from "next/image";
import React from "react";

function SocialButton({ icon, title, url } : any) {
  return (
    <a
      href={url}
      className="border rounded-full flex items-center justify-center py-2 px-3 w-9/12 relative m-1 lg:w-80"
    >
      <Image
        src={`/social-icons/${icon}-logo.svg`}
        width={30}
        height={30}
        alt="demo social media icons"
        className="absolute left-4"
      />
      {`${title}`}
    </a>
  );
}

export default SocialButton;
