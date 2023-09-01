import React from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import ContactForm from "./ContactForm";
import IconButton from "./IconButton";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#333544] w-full flex flex-col justify-center items-center text-center"
    >
      <Image
        src="/background/bg-wave.svg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="demo"
      />

      <h3 className="w-4/6 text-2xl font-extrabold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text mb-20">
        Construyamos Algo Grandioso Juntos
      </h3>

      <p className="text-lg font-bold mb-4">Compárteme Tu Historia</p>
      <ContactForm />

      <p className="text-lg font-bold mb-4">Descubre Más Sobre Mí</p>
      <div className="w-5/6 flex flex-col justify-center items-center text-center mb-1">
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
        {/* <SocialButton icon={"whatsapp"} title={"WhatsApp"} url={""} /> */}
      </div>
      <div className="flex mb-10">
        <IconButton icon="whatsapp" url="https://wa.me/34637125170" />
        <IconButton icon="telegram" url="https://t.me/tomasguixeras" />
        <IconButton icon="mail" url="mailto:tomasbohngs@gmail.com" />
      </div>
      <hr className="bg-white w-5/6" />
      <h6 className="text-sm pt-2 pb-4">
        Developed by
        <a href="https://www.github.com/tomasguixeras"> Tomas Guixeras</a>
      </h6>
    </footer>
  );
}

export default Footer;
