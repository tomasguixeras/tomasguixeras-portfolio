import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface DesktopMenuProps {
  userSelectedPage: string;
  setUserSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

function DesktopMenu({
  userSelectedPage,
  setUserSelectedPage,
}: DesktopMenuProps) {
  const t = useTranslations("MobileNavbar");
  const navegation = ["services", "portfolio", "blog", "contact"] as const;

  return (
    <div className="flex gap-5 text-md">
      {navegation.map((link: string) => {
        return (
          <Link
            key={link}
            onClick={() => setUserSelectedPage(t(`navegation.${link}.slug`))}
            href={t(`navegation.${link}.link`)}
            className={
              userSelectedPage === t(`navegation.${link}.slug`)
                ? "text-yellow-400 drop-shadow-xl italic"
                : ""
            }
          >
            {t(`navegation.${link}.name`)}
          </Link>
        );
      })}
    </div>
  );
}

export default DesktopMenu;
