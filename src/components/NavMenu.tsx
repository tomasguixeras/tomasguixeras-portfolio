import React from "react";
import Link from "next/link";

function NavMenu({ openMenu, setOpenMenu }: any) {
  return (
    <>
      {openMenu && (
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute top-[90px] bg-gradient-to-b from-black/10 via-white/10 to-white/10 w-full h-[calc(100vh-90px)] flex justify-center"
        >
          <div className="w-11/12 h-[calc(90vh-90px)] bg-[#242531] flex flex-col items-center justify-evenly z-10">
            <div id="sections" className="border flex flex-col w-5/6">
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/blog">Blog</Link>
              <Link href="#contact">Contact</Link>
            </div>

            <div id="cta-button" className="border flex flex-col w-5/6">
              <button>Dowload CV</button>
            </div>

            <div
              id="settings"
              className="border flex flex-col w-5/6 text-center"
            >
              <p>Language Toggle</p>
              <p>Dark Mode Toggle</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavMenu;
