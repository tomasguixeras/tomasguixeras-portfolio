"use client";

import Image from "next/image";
import React, { useState } from "react";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 w-5/6 flex mt-4 relative">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/Logo.png"
              alt="Tomas Bohn Guixeras Logo"
              height={70}
              width={70}
            />
          </a>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost h-full w-8 relative"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            {!openMenu ? (
              <Image
                src="/icons/burger.svg"
                alt="Open menu icon"
                height={40}
                width={40}
              />
            ) : (
              <Image
                src="/icons/close.svg"
                alt="Open menu icon"
                height={40}
                width={40}
              />
            )}
          </button>
        </div>
      </div>
      {openMenu && (
        <div className="absolute w-full top-14 h-5/6 bg-[#242531] flex flex-col items-center justify-evenly">
          <div id="sections" className="border flex flex-col w-5/6">
            <a href="">Services</a>
            <a href="">Portfolio</a>
            <a href="">Blog</a>
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
