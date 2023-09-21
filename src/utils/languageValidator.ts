"use client";
import { AboutInterface, AboutTexts } from "@/types/json-data/about-types";
import { footerLanguage, footerTexts } from "@/types/json-data/footer-links";
import { links, navbarText } from "@/types/json-data/navbar-types";
import { portfolioLanguage, portfolioTexts } from "@/types/projects";

export const languageValidator = (
  text: navbarText | footerLanguage | AboutInterface | portfolioLanguage
): links | footerTexts | AboutTexts | portfolioTexts | undefined => {
  let textToRender;
  if (typeof window !== "undefined") {
    const userLanguage = localStorage.getItem("userLanguage");
    userLanguage &&
      (userLanguage === "ENG"
        ? (textToRender = text.english)
        : (textToRender = text.spanish));
  }
  return textToRender;
};
