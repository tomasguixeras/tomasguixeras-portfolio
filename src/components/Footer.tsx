import React from "react";
import SocialButton from "./SocialButton";
import ContactForm from "./ContactForm";
import IconButton from "./IconButton";

function Footer() {
  return (
    <footer
      id="contact"
      className="clip-path-sm bg-[#333544] w-full flex flex-col justify-center items-center text-center lg:clip-path-desktop"
    >
      <h3 className="font-display w-4/6 text-2xl font-extrabold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text mt-40 mb-20 md:mt-60 md:text-4xl lg:mt-80 lg:max-w-lg lg:text-5xl lg:leading-snug">
        Construyamos Algo Grandioso Juntos
      </h3>

      <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:items-start lg:justify-evenly">
        <div className="flex flex-col items-center justify-center w-full lg:w-fit">
          <p className="text-lg font-bold mb-4 md:text-2xl">
            Compárteme Tu Historia
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col items-center justify-center w-full lg:w-fit">
          <p className="text-lg font-bold mb-4 md:text-2xl">
            Descubre Más Sobre Mí
          </p>
          <div className="w-5/6 flex flex-col justify-center items-center text-center mb-1 max-w-lg">
            <SocialButton
              icon={"linkedin"}
              title={"Linkedin"}
              url={"https://www.linkedin.com/in/tomasbohnguixeras/"}
            />
            <SocialButton
              icon={"github"}
              title={"GitHub"}
              url={"https://github.com/tomasguixeras"}
            />
            <SocialButton
              icon={"x"}
              title={"X"}
              url={"https://twitter.com/tomasguixeras"}
            />
            <SocialButton
              icon={"instagram"}
              title={"Instagram"}
              url={"https://www.instagram.com/tomasguixeras/"}
            />
          </div>

          <div className="flex mb-10">
            <IconButton icon="whatsapp" url="https://wa.me/34637125170" />
            <IconButton icon="telegram" url="https://t.me/tomasguixeras" />
            <IconButton icon="mail" url="mailto:tomasbohngs@gmail.com" />
          </div>
        </div>
      </div>
      <hr className="bg-white w-5/6" />
      <h6 className="text-sm pt-2 pb-4 lg:pb-6 lg:pt-8 lg:text-base">
        Developed by
        <a href="https://www.github.com/tomasguixeras"> Tomas Guixeras</a>
      </h6>
    </footer>
  );
}

export default Footer;
