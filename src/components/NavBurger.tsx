import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import CloseMenu from "./svgComponents/CloseMenu";
import BurgerMenu from "./svgComponents/BurgerMenu";

interface NavBurgerProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function NavBurger({ openMenu, setOpenMenu }: NavBurgerProps) {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost h-10 w-auto"
          onClick={() => setOpenMenu((prev: boolean) => !prev)}
        >
          {!openMenu ? (
            <BurgerMenu color={theme === "dark" ? "#f4f2ee" : "#242531"} />
          ) : (
            // <Image
            //   src="/icons/burger.svg"
            //   alt="Open menu icon"
            //   height={40}
            //   width={40}
            //   className="h-8 w-8 md:h-12 md:w-12"
            // />
            <CloseMenu color={theme === "dark" ? "#f4f2ee" : "#242531"} />
            // <Image
            //   src="/icons/close.svg"
            //   alt="Open menu icon"
            //   height={40}
            //   width={40}
            //   className="h-8 w-8 md:h-12 md:w-12"
            // />
          )}
        </button>
      </div>
    </>
  );
}

export default NavBurger;
