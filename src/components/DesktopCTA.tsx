"use client";
import React from "react";
import Image from "next/image";
import Link from "next-intl/link";
import { useLocale } from "next-intl";
import { ThemeSwitcher } from "./ThemeSwitcher";

function DesktopCTA() {
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
        <button className="btn btn-square btn-ghost h-10 w-auto">
          <ThemeSwitcher />
        </button>
      </div>
    </div>
  );
}

export default DesktopCTA;
