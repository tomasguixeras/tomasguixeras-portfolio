"use client"
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

function page() {
  return (
    <div className="w-5/6 h-screen flex flex-col items-center justify-center">
      <div className="w-5/6 h-3/6 flex flex-col items-center justify-center text-3xl">
        <p className="my-2 text-center">We are working on this view.</p>
        <p className="my-2 text-center">It would be available soon.</p>
      </div>

      <p className="mt-20 italic font-semibold">If you need more information</p>
      <div className="h-14 flex items-center justify-center mt-2">
        <Link
          className="border-2 px-4 py-2 m-2 rounded-full text-md font-semibold"
          href="/"
        >
          Contact me
        </Link>
        <Link
          className="border-2 px-4 py-2 m-2 rounded-full text-md font-semibold"
          href={"/"}
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}

export default page;
