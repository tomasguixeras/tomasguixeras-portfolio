"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import AboutButtons from "@/components/AboutButtons";

interface NavMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleUserConfig: (toConfig: string) => void;
  language: string;
  theme: string;
}

function NavMenu({
  openMenu,
  setOpenMenu,
  handleUserConfig,
  language,
  theme,
}: NavMenuProps) {
  return (
    <>
      {openMenu && (
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="w-11/12 h-[calc(100dvh-90px)] bg-[#242531] flex flex-col items-center justify-evenly z-10"
        >
          <div
            id="sections"
            className="flex flex-col items-center w-5/6 font-display text-xl italic"
            onClick={() => handleUserConfig("userTheme")}
          >
            <Link
              onClick={() => setOpenMenu(!openMenu)}
              href="/services"
              className="py-4 w-full max-w-lg"
            >
              Services
            </Link>
            <Link
              onClick={() => setOpenMenu(!openMenu)}
              href="/portfolio"
              className="py-4 w-full max-w-lg"
            >
              Portfolio
            </Link>
            <Link
              onClick={() => setOpenMenu(!openMenu)}
              href="/blog"
              className="py-4 w-full max-w-lg"
            >
              Blog
            </Link>
            <Link
              onClick={() => setOpenMenu(!openMenu)}
              href="#contact"
              className="py-4 w-full max-w-lg"
            >
              Contact
            </Link>
          </div>

          <div
            id="cta-button"
            className="flex flex-col w-5/6 items-center p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <AboutButtons
              icon={"calendly"}
              title={"Book a Meeting"}
              url={
                "https://calendly.com/tomasguixeras/reunion-con-tomas-bohn-guixeras?month=2023-09"
              }
            />
            <AboutButtons
              icon={"curriculum"}
              title={"Download cv"}
              url={
                "/curriculum/CV Tomas Bohn Guixeras | Fullstack Developer | Español.pdf"
              }
            />
          </div>

          <div
            id="settings"
            className="flex gap-8 justify-center w-fit p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <button
                className="btn btn-square btn-ghost h-10 w-auto"
                onClick={() => handleUserConfig("userLanguage")}
              >
                {language === "ENG" ? (
                  <Image
                    src="/languages/spain-flag.svg"
                    alt="Change language to Spanish"
                    height={20}
                    width={20}
                    className="h-8 w-8"
                  />
                ) : (
                  <Image
                    src="/languages/us-flag.svg"
                    alt="Change language to English"
                    height={20}
                    width={20}
                    className="h-8 w-8"
                  />
                )}
              </button>
            </div>
            <div>
              <button className="btn btn-square btn-ghost h-10 w-auto">
                {theme === "DARK" ? (
                  <Image
                    src="/color-schema/sun-light-mode.svg"
                    alt="Change language to Spanish"
                    height={20}
                    width={20}
                    className="h-8 w-8"
                  />
                ) : (
                  <Image
                    src="/color-schema/moon-dark-mode.svg"
                    alt="Change language to English"
                    height={20}
                    width={20}
                    className="h-8 w-8"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu;
