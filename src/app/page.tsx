import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="container" className="border w-5/6">
        <div id="hero-section">
          <Image
            src="/tomas-hero.png"
            width={500}
            height={500}
            alt="Tomas Bohn Guixeras profile picture"
          />

          <div id="text-container">
            <h1>Tomas Bohn Guixeras</h1>
            <h4>Fullstack Developer</h4>
          </div>

          <div id="icon-buttons-container"></div>
        </div>
      </main>
    </>
  );
}
