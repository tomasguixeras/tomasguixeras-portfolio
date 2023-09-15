"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavBurger from "@/components/NavBurger";
import NavMenu from "./NavMenu";
import DesktopMenu from "./DesktopMenu";
import DesktopCTA from "./DesktopCTA";

function NavBar() {
  const [userSelectedPage, setUserSelectedPage] = useState("");
  const [userLanguage, setUserLanguage] = useState("ENG");
  const [userTheme, setUserTheme] = useState("DARK");
  const [openMenu, setOpenMenu] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

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
            <DesktopCTA
              userLanguage={userLanguage}
              setUserLanguage={setUserLanguage}
              userTheme={userTheme}
              setUserTheme={setUserTheme}
            />
          </>
        ) : (
          <NavBurger openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </div>
      <NavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}

export default NavBar;
