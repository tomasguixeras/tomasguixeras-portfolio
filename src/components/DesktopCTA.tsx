import React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale } from "next-intl";

interface DesktopCTAProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function DesktopCTA({ theme, setTheme }: DesktopCTAProps) {
  const language = useLocale();
  return (
    <div className="flex gap-4">
      <div>
        <button className="btn btn-square btn-ghost h-10 w-auto">
          {language === "en" ? (
            <Link href="/" locale="es">
              <Image
                src="/languages/spain-flag.svg"
                alt="Change language to Spanish"
                height={20}
                width={20}
                className="h-8 w-8"
              />
            </Link>
          ) : (
            <Link href="/" locale="en">
              <Image
                src="/languages/us-flag.svg"
                alt="Change language to English"
                height={20}
                width={20}
                className="h-8 w-8"
              />
            </Link>
          )}
        </button>
      </div>
      <div>
        <button
          className="btn btn-square btn-ghost h-10 w-auto"
          // onClick={() => handleUserConfig("userTheme")}
        >
          {theme === "dark" ? (
            <Image
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              src="/color-schema/sun-light-mode.svg"
              alt="Theme change button to light"
              height={20}
              width={20}
              className="h-8 w-8"
            />
          ) : (
            <Image
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              src="/color-schema/moon-dark-mode.svg"
              alt="Theme change button to dark"
              height={20}
              width={20}
              className="h-8 w-8"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default DesktopCTA;
