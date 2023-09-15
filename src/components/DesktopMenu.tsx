"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function DesktopMenu({ userSelectedPage, setUserSelectedPage }: any) {
  return (
    <div className="flex gap-5 text-md">
      <Link
        onClick={() => setUserSelectedPage("services")}
        href="/services"
        className={
          userSelectedPage === "services"
            ? "text-yellow-400 drop-shadow-xl italic"
            : ""
        }
      >
        Services
      </Link>
      <Link
        href="/portfolio"
        onClick={() => setUserSelectedPage("portfolio")}
        className={
          userSelectedPage === "portfolio"
            ? "text-yellow-400 drop-shadow-xl italic"
            : ""
        }
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        onClick={() => setUserSelectedPage("blog")}
        className={
          userSelectedPage === "blog"
            ? "text-yellow-400 drop-shadow-xl italic"
            : ""
        }
      >
        Blog
      </Link>
      <Link
        href="/#contact"
        onClick={() => setUserSelectedPage("contact")}
        className={
          userSelectedPage === "contact"
            ? "text-yellow-400 drop-shadow-xl italic"
            : ""
        }
      >
        Contact
      </Link>
    </div>
  );
}

export default DesktopMenu;
