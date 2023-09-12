import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";

function BuildingPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[calc(100vh-90px)] flex flex-col items-center justify-center">
        <div className="w-5/6 h-3/6 flex flex-col items-center justify-center text-3xl">
          <p className="my-2 text-center">We are working on this view.</p>
          <p className="my-2 text-center">It would be available soon.</p>
        </div>

        <p className="mt-20 italic font-semibold">
          If you need more information
        </p>
        <div className="h-14 flex items-center justify-center mt-2">
          <Link
            className="border-2 px-4 py-2 m-2 rounded-full text-md font-semibold"
            href="/#contact"
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
    </div>
  );
}

export default BuildingPage;
