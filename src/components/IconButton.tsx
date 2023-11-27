import React from "react";
import { iconButtonType } from "@/types/buttons";

import { LinkedIn } from "./SVGs/LinkedIn";
import { GitHub } from "./SVGs/GitHub";
import { Twitter } from "./SVGs/Twitter";
import { Instagram } from "./SVGs/Instagram";
import { WhatsApp } from "./SVGs/WhatsApp";
import { Telegram } from "./SVGs/Telegram";
import { Mail } from "./SVGs/Mail";

function IconButton({ name, url }: iconButtonType) {
  return (
    <a
      href={url}
      className="flex items-center justify-center border-2 border-black dark:border-white w-12 h-12 rounded-full m-2 hover:rotate-45 hover:duration-300 hover:shadow-inner hover:shadow-black dark:hover:shadow-white"
    >
      {name === "LinkedIn" && <LinkedIn />}
      {name === "Github" && <GitHub />}
      {name === "X / Twitter" && <Twitter />}
      {name === "Instagram" && <Instagram />}
      {name === "WhatsApp" && <WhatsApp />}
      {name === "Telegram" && <Telegram />}
      {name === "Mail" && <Mail />}
    </a>
  );
}

export default IconButton;
