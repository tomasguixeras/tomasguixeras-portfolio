import React from "react";
import { useTranslations } from "next-intl";

import SocialButton from "./SocialButton";
import ContactForm from "./ContactForm";
import IconButton from "./IconButton";

import links from "@/data/external-links.json";

function Footer() {
  const t = useTranslations("Footer");

  const mainButtons = links.slice(0, 4);
  const iconButtons = links.slice(4, links.length);
  return (
    <footer
      id="contact"
      className="clip-path-sm bg-[#FFC25C] dark:bg-[#333544] w-full flex flex-col justify-center items-center text-center lg:clip-path-desktop"
    >
      <h3 className="font-display w-4/6 text-2xl font-extrabold bg-gradient-to-r from-[#242531] to-[#333544] dark:from-white dark:to-[#FFC25C] text-transparent bg-clip-text mt-40 mb-20 md:mt-60 md:text-4xl lg:mt-80 lg:max-w-lg lg:text-5xl lg:leading-snug">
        {t("title")}
      </h3>

      <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:items-start lg:justify-evenly">
        <div className="flex flex-col items-center justify-center w-full lg:w-fit">
          <p className="text-lg font-bold mb-4 md:text-2xl">
            {t("contactForm.title")}
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-fit">
          <p className="text-lg font-bold mb-4 md:text-2xl">
            {t("externalLinks.title")}
          </p>
          <div className="w-5/6 flex flex-col justify-center items-center text-center mb-1 max-w-lg">
            {mainButtons.map((button) => {
              return (
                <SocialButton
                  key={button.slug}
                  icon={button.icon}
                  title={button.name}
                  url={button.url}
                />
              );
            })}
          </div>

          <div className="flex mb-10">
            {iconButtons.map((button) => {
              return (
                <IconButton
                  key={button.slug}
                  name={button.name}
                  icon={button.icon}
                  url={button.url}
                />
              );
            })}
          </div>
        </div>
      </div>
      <hr className="border-black dark:border-white w-5/6" />
      <h6 className="text-sm pt-2 pb-4 lg:pb-6 lg:pt-8 lg:text-base">
        {t("signing")}
        <a href="https://www.github.com/tomasguixeras" className="underline dark:no-underline dark:text-[#FFC25C]">Tomas Guixeras</a>
      </h6>
    </footer>
  );
}

export default Footer;
