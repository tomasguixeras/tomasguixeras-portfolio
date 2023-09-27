import React from "react";

function BurgerMenu({ color }: any) {
  return (
    <svg
      width="40px"
      height="40px"
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Menu / Hamburger_LG">
        <path
          id="Vector"
          d="M3 17H21M3 12H21M3 7H21"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export default BurgerMenu;
