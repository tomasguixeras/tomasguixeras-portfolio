"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 w-5/6 flex items-center justify-between relative h-[90px]">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/Logo.png"
              alt="Tomas Bohn Guixeras Logo"
              height={70}
              width={70}
              className="h-12 w-auto md:h-16"
            />
          </a>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost h-10 w-auto relative"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {!openMenu ? (
              <Image
                src="/icons/burger.svg"
                alt="Open menu icon"
                height={40}
                width={40}
                className="h-8 w-8 md:h-12 md:w-12"
              />
            ) : (
              <Image
                src="/icons/close.svg"
                alt="Open menu icon"
                height={40}
                width={40}
                className="h-8 w-8 md:h-12 md:w-12"
              />
            )}
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="absolute w-screen top-[90px] h-[calc(100vh-90px)] bg-[#242531] flex flex-col items-center justify-evenly z-10">
          <div id="sections" className="border flex flex-col w-5/6">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div id="cta-button" className="border flex flex-col w-5/6">
            <button>Dowload CV</button>
          </div>

          <div id="settings" className="border flex flex-col w-5/6 text-center">
            <p>Language Toggle</p>
            <p>Dark Mode Toggle</p>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
