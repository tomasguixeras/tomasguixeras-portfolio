"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

function BuildingPage() {
  const t = useTranslations("UnderWork");

  return (
    <div className="flex flex-col items-center">
      <div className="h-[calc(100vh-90px)] flex flex-col items-center justify-center">
        <div className="w-5/6 h-3/6 flex flex-col items-center justify-center text-3xl">
          <p className="my-2 text-center">{t("title")}</p>
          <p className="my-2 text-center">{t("subTitle")}</p>
        </div>

        <p className="mt-20 italic font-semibold">{t("moreInfo")}</p>
        <div className="h-14 flex items-center justify-center mt-2">
          <Link
            className="border-2 border-black dark:border-white px-4 py-2 m-2 rounded-full text-md font-semibold"
            href="/#contact"
          >
            {t("contact")}
          </Link>
          <Link
            className="border-2 border-black dark:border-white px-4 py-2 m-2 rounded-full text-md font-semibold"
            href={"/"}
          >
            {t("goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuildingPage;
