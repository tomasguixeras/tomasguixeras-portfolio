import React from "react";
import Image from "next/image";


function NavBurger({openMenu, setOpenMenu}: any) {
  return (
    <>
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost h-10 w-auto"
          onClick={() => setOpenMenu((prev: boolean) => !prev)}
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

      
    </>
  );
}

export default NavBurger;
