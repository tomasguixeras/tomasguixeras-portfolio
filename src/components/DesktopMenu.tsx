import React from "react";
import Link from "next/link";

import { languageValidator } from "@/utils/languageValidator";

import { links, navbarLinks } from "@/types/json-data/navbar-types";

import text from "@/data/navbar-text.json";

interface DesktopMenuProps {
  userSelectedPage: string;
  setUserSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

function DesktopMenu({
  userSelectedPage,
  setUserSelectedPage,
}: DesktopMenuProps) {
  const textToRender: links = languageValidator(text) as links;

  return (
    <div className="flex gap-5 text-md">
      {textToRender &&
        textToRender.links.map((link: navbarLinks) => {
          return (
            <Link
              key={link.key}
              onClick={() => setUserSelectedPage(link.slug)}
              href={link.link}
              className={
                userSelectedPage === link.slug
                  ? "text-yellow-400 drop-shadow-xl italic"
                  : ""
              }
            >
              {link.name}
            </Link>
          );
        })}
    </div>
  );
}

export default DesktopMenu;
