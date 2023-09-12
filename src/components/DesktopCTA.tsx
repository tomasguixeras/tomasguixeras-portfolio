import React from "react";
import Image from "next/image";

function DesktopCTA({
  userLanguage,
  setUserLanguage,
  userTheme,
  setUserTheme,
}: any) {
  return (
    <div className="flex gap-4">
      <div>
        <button
          className="btn btn-square btn-ghost h-10 w-auto"
          onClick={() =>
            setUserLanguage(userLanguage === "ESP" ? "ENG" : "ESP")
          }
        >
          {userLanguage === "ESP" ? (
            <Image
              src="/languages/spain-flag.svg"
              alt="Change language to Spanish"
              height={40}
              width={40}
              className="h-8 w-8 md:h-12 md:w-12"
            />
          ) : (
            <Image
              src="/languages/us-flag.svg"
              alt="Change language to English"
              height={40}
              width={40}
              className="h-8 w-8 md:h-12 md:w-12"
            />
          )}
        </button>
      </div>
      <div>
        <button
          className="btn btn-square btn-ghost h-10 w-auto"
          onClick={() => setUserTheme(userTheme === "DARK" ? "LIGHT" : "DARK")}
        >
          {userTheme === "DARK" ? (
            <Image
              src="/color-schema/sun-light-mode.svg"
              alt="Change language to Spanish"
              height={40}
              width={40}
              className="h-8 w-8 md:h-12 md:w-12"
            />
          ) : (
            <Image
              src="/color-schema/moon-dark-mode.svg"
              alt="Change language to English"
              height={40}
              width={40}
              className="h-8 w-8 md:h-12 md:w-12"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default DesktopCTA;
