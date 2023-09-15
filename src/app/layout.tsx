import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik, Roboto_Mono } from "next/font/google";

const rubik = Rubik({
  variable: "--display-font",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--body-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomas Bohn Guixeras | Javascript / Typescript Fullstack Developer",
  description:
    "Javascript / Typescript Fullstack Developer | React - Redux - Node Js - Express Js - Postgre SQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${rubik.variable} ${roboto.variable}`} lang="en">
      <body className="flex flex-col items-center font-body">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
