"use client";
import { useEffect, useState } from "react";

export const useMenu = () => {
  const isOpen = localStorage.getItem("openMenu_V1");
  const initial = isOpen ? JSON.parse(isOpen) : false;

  const [openMenu, setOpenMenu] = useState<boolean>(initial);

  useEffect(() => {
    localStorage?.setItem("openMenu_V1", JSON.stringify(openMenu));
  }, [openMenu]);

  return { openMenu, toggleMenu: () => setOpenMenu((prev) => !prev) };
};
