"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import DesktopMenu from "@/components/DesktopMenu";
import DesktopCTA from "@/components/DesktopCTA";
import NavBurger from "@/components/NavBurger";
import NavMenu from "@/components/NavMenu";
import { useMenu } from "@/utils/useMenu";

function NavBar() {
  const [userSelectedPage, setUserSelectedPage] = useState<string>("");
  const { openMenu, toggleMenu } = useMenu();

  const [currentWidth, setCurrentWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setCurrentWidth(window.innerWidth);
    localStorage.setItem("screen-size", window.innerWidth.toString());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentWidth]);

  return (
    <>
      <div className="navbar bg-base-100 w-5/6 flex items-center justify-between relative h-[90px]">
        <div className="flex-1 lg:flex-none">
          <Link
            href="/"
            onClick={() => setUserSelectedPage("")}
            className="btn btn-ghost normal-case text-xl"
          >
            <Image
              src="/Logo.png"
              alt="Tomas Bohn Guixeras Logo"
              height={70}
              width={70}
              className="h-12 w-auto md:h-16 lg:h-10"
            />
          </Link>
        </div>
        {currentWidth >= 1024 ? (
          <>
            <DesktopMenu
              userSelectedPage={userSelectedPage}
              setUserSelectedPage={setUserSelectedPage}
            />
            <DesktopCTA />
          </>
        ) : (
          <NavBurger openMenu={openMenu} toggleMenu={toggleMenu} />
        )}
      </div>
      <NavMenu openMenu={openMenu} toggleMenu={toggleMenu} />
    </>
  );
}

export default NavBar;
