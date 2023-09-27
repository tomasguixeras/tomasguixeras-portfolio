"use client";
import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next-intl/link";
import Image from "next/image";

import AboutButtons from "@/components/AboutButtons";

import Moon from "./svgComponents/moon";
import Sun from "./svgComponents/Sun";

interface NavMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function NavMenu({ openMenu, setOpenMenu, theme, setTheme }: NavMenuProps) {
  const language = useLocale();
  const t = useTranslations("MobileNavbar");
  const navegation = ["services", "portfolio", "blog", "contact"] as const;
  const actions = ["calendly", "curriculum"] as const;

  return (
    <>
      {openMenu && (
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="w-11/12 h-[calc(100dvh-90px)] bg-[#f4f2ee] flex flex-col items-center justify-evenly z-10 dark:bg-[#242531]"
        >
          <div
            id="sections"
            className="flex flex-col items-center w-5/6 font-display text-xl italic"
          >
            {navegation.map((link: string) => (
              <Link
                key={link}
                onClick={() => setOpenMenu(!openMenu)}
                href={t(`navegation.${link}.link`)}
                className="py-4 w-full max-w-lg"
              >
                {t(`navegation.${link}.name`)}
              </Link>
            ))}
          </div>

          <div
            id="cta-button"
            className="flex flex-col w-5/6 items-center p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {actions.map((action: string) => {
              return (
                <AboutButtons
                  key={action}
                  icon={t(`actionButtons.${action}.icon`)}
                  title={t(`actionButtons.${action}.title`)}
                  url={t(`actionButtons.${action}.url`)}
                />
              );
            })}
          </div>

          <div
            id="settings"
            className="flex gap-8 justify-center w-fit p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <button
                className="btn btn-square btn-ghost h-10 w-auto"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                {language === "en" ? (
                  <NextLink href="/" locale="es">
                    <Image
                      src="/languages/spain-flag.svg"
                      alt="Change language to Spanish"
                      height={20}
                      width={20}
                      className="h-8 w-8"
                    />
                  </NextLink>
                ) : (
                  <NextLink href="/" locale="en">
                    <Image
                      src="/languages/us-flag.svg"
                      alt="Change language to English"
                      height={20}
                      width={20}
                      className="h-8 w-8"
                    />
                  </NextLink>
                )}
              </button>
            </div>
            <div>
              <button
                className="btn btn-square btn-ghost h-10 w-auto"
                onClick={() => setOpenMenu(!openMenu)}
              >
                {theme === "dark" ? (
                  <div
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Sun
                      color={theme === "dark" ? "#FFFFFF" : "#121212"}
                      className="h-8 w-8"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Moon
                      color={theme === "dark" ? "#FFFFFF" : "#121212"}
                      className="h-8 w-8"
                    />
                  </div>
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
