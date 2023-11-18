"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactFormTexts } from "@/types/json-data/footer-links";
import { useTranslations } from "next-intl";

interface formProps {
  contactForm: contactFormTexts;
}

function ContactForm() {
  const form = useRef<any>();
  const t = useTranslations("Footer.contactForm");
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [inputs, setInputs] = useState(initialState);

  function onContactFormChange(event: any) {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_lhxen27",
        "template_09cds83",
        form.current,
        "sxqoFsmkAjTIo94Pk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setInputs(initialState);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="w-5/6 mb-16 md:max-w-lg lg:w-full">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex items-center justify-center text-left gap-2 mb-5">
          <div className="flex-1 flex flex-col">
            <label className="pl-2 mb-2 md:text-lg" htmlFor="name">
              {t("formTexts.nameInput.label")}
            </label>
            <input
              value={inputs.name}
              onChange={onContactFormChange}
              name="name"
              type="text"
              placeholder={t("formTexts.nameInput.placeholder")}
              className="border-black focus:ring-blue-500 focus:border-blue-500 dark:border-white box-border w-full bg-transparent border-2 rounded-lg p-1 lg:w-52"
            />
          </div>
          <div className="flex-1 flex flex-col ml-1">
            <label className="pl-2 mb-2 md:text-lg" htmlFor="email">
              {t("formTexts.emailInput.label")}
            </label>
            <input
              value={inputs.email}
              onChange={onContactFormChange}
              placeholder={t("formTexts.emailInput.placeholder")}
              className="border-black focus:ring-blue-500 focus:border-blue-500 dark:border-white box-border w-full bg-transparent border-2 rounded-lg p-1 lg:w-52"
              type="text"
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col text-left mt-2 lg:w-full">
          <label className="pl-2 mb-2 md:text-lg" htmlFor="message">
            {t("formTexts.textInput.label")}
          </label>
          <textarea
            value={inputs.message}
            onChange={onContactFormChange}
            placeholder={t("formTexts.textInput.placeholder")}
            className="border-black focus:ring-blue-500 focus:border-blue-500 dark:border-white bg-transparent border-2 rounded-lg p-1 lg:w-full"
            name="message"
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#242531] dark:bg-[#FFC25C] py-2 px-4 w-40 m-4 rounded-full text-white dark:text-[#333544] md:text-xl md:font-semibold md:w-60 md:py-2 hover:shadow-md hover:shadow-amber-400"
        >
          {t("formTexts.sendForm")}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
