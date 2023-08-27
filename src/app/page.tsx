import Footer from "@/components/Footer";
import IconButton from "@/components/IconButton";
import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="container" className="w-5/6">
        <div id="hero-section" className="flex flex-col items-center">
          <Image
            src="/tomas-hero.png"
            width={500}
            height={500}
            alt="Tomas Bohn Guixeras profile picture"
          />

          <div id="text-container" className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFC25C] to-[#ffe551] text-transparent bg-clip-text">
              Tomas Bohn Guixeras
            </h1>
            <h4 className="text-2xl">Fullstack Developer</h4>
          </div>

          <div id="icon-buttons-container" className="flex w-fit my-10">
            <IconButton
              icon={"linkedin"}
              url={"https://www.linkedin.com/in/tomasbohnguixeras/"}
            />
            <IconButton
              icon={"github"}
              url={"https://github.com/tomasguixeras"}
            />
            <IconButton icon={"x"} url={"https://twitter.com/tomasguixeras"} />
          </div>

          <div
            id="technologies-carrusel"
            className="text-center w-screen py-2 bg-[#FFC25C] text-blue-950"
          >
            <p>Recat - Typescript</p>
          </div>
        </div>

        <div id="about-section" className="mt-20">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-4">
            About Me
          </h3>
          <p>
            Desarrollador junior en constante búsqueda de la simplicidad
            elegante en la programación y el diseño. Mi objetivo es crear
            conexiones virtuales que inspiren y resuelvan problemas.
          </p>
        </div>

        <div id="Portfolio-section" className="mt-20">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-[#FFC25C] text-transparent bg-clip-text w-fit mb-4">
            Portfolio
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
          <a className="underline pl-2" href="">See more projects</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
