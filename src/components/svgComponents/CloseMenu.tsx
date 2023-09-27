import React from "react";

function CloseMenu({ color }: any) {
  return (
    <svg
      width="40px"
      height="40px"
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Menu / Close_MD">
        <path
          id="Vector"
          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
}

export default CloseMenu;
