"use client";
import React from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import NextLink from "next-intl/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";

import AboutButtons from "@/components/AboutButtons";

interface NavMenuProps {
  openMenu: boolean | undefined;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavMenu({ openMenu, toggleMenu }: NavMenuProps) {
  const language = useLocale();
  const t = useTranslations("MobileNavbar");
  const navegation = ["services", "portfolio", "blog", "contact"] as const;
  const actions = ["calendly", "curriculum"] as const;

  return (
    <>
      {openMenu && (
        <div
          onClick={() => toggleMenu(!openMenu)}
          className="w-11/12 h-[calc(100dvh-90px)] dark:bg-[#242531] flex flex-col items-center justify-evenly z-10"
        >
          <div
            id="sections"
            className="flex flex-col items-center w-5/6 font-display text-xl italic"
          >
            {navegation.map((link: string) => (
              <Link
                key={link}
                onClick={() => toggleMenu(!openMenu)}
                href={t(`navegation.${link}.link`)}
                className="py-4 w-full max-w-lg hover:text-slate-600 dark:hover:text-[#FFC25C]"
              >
                {t(`navegation.${link}.name`)}
              </Link>
            ))}
          </div>

          <div
            id="cta-button"
            className="flex flex-col w-11/12 items-center p-7 gap-7"
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
                className="flex items-center justify-center h-14 w-14 rounded-full hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-200"
                onClick={() => {
                  toggleMenu(!openMenu);
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
                className="flex items-center justify-center h-14 w-14 rounded-full hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-200"
                onClick={() => toggleMenu(!openMenu)}
              >
                <ThemeSwitcher />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu;
