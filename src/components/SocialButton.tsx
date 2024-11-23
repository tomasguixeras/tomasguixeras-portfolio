import React from "react";
import { socialButtonType } from "@/types/socialButtons";

import { LinkedIn } from "./SVGs/LinkedIn";
import { GitHub } from "./SVGs/GitHub";
import { Twitter } from "./SVGs/Twitter";
import { Instagram } from "./SVGs/Instagram";
import { WhatsApp } from "./SVGs/WhatsApp";
import { Telegram } from "./SVGs/Telegram";
import { Mail } from "./SVGs/Mail";

function SocialButton({ title, url }: socialButtonType) {
  return (
    <a
      href={url}
      className="border-black dark:border-white border-2 rounded-full flex items-center justify-center py-2 px-3 w-9/12 relative m-1 lg:w-80 lg:h-14 lg:text-lg lg:font-semibold hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-300"
    >
      <div className="absolute left-7">
        {title === "LinkedIn" && <LinkedIn />}
        {title === "Github" && <GitHub />}
        {title === "X / Twitter" && <Twitter />}
        {title === "Instagram" && <Instagram />}
        {title === "WhatsApp" && <WhatsApp />}
        {title === "Telegram" && <Telegram />}
        {title === "Mail" && <Mail />}
      </div>

      {title}
    </a>
  );
}

export default SocialButton;
