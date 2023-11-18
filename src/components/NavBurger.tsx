"use client";
import React from "react";
import { useTheme } from "next-themes";

interface NavBurgerProps {
  openMenu: boolean | undefined;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBurger({ openMenu, toggleMenu }: NavBurgerProps) {
  const { theme } = useTheme();

  return (
    <>
      <div className="flex-none">
        <div
          className="btn btn-square btn-ghost h-10 w-auto"
          onClick={() => toggleMenu((prev: boolean) => !prev)}
        >
          {!openMenu ? (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Hamburger_LG">
                <path
                  id="Vector"
                  d="M3 17H21M3 12H21M3 7H21"
                  stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Close_MD">
                <path
                  id="Vector"
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke={theme === "dark" ? "#FFFFFF" : "#000000"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBurger;
