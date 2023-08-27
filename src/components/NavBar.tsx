import Image from "next/image";
import React from "react";

function NavBar() {
  return (
    <div className="navbar bg-base-100 w-5/6 flex mt-4">
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
        <button className="btn btn-square btn-ghost h-full w-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
