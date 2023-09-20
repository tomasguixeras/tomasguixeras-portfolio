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
          className="absolute top-[90px] bg-gradient-to-b from-black/10 via-white/10 to-white/10 w-full h-[calc(100vh-90px)] flex justify-center"
        >
          <div className="w-11/12 h-[calc(90vh-90px)] bg-[#242531] flex flex-col items-center justify-evenly z-10">
            <div id="sections" className="border flex flex-col w-5/6">
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="#contact">Contact</Link>
            </div>

            <div id="cta-button" className="border flex flex-col w-5/6">
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
              className="border flex gap-8 w-5/6 justify-center"
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
                <button
                  className="btn btn-square btn-ghost h-10 w-auto"
                  onClick={() => handleUserConfig("userTheme")}
                >
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
        </div>
      )}
    </>
  );
}

export default NavMenu;
