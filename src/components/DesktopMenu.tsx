import React from "react";
import Link from "next/link";

import { languageValidator } from "@/utils/languageValidator";

import text from "@/data/navbar-text.json";

function DesktopMenu({ userSelectedPage, setUserSelectedPage }: any) {
  const textToRender = languageValidator(text);

  return (
    <div className="flex gap-5 text-md">
      {textToRender &&
        textToRender.links.map((link) => {
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
