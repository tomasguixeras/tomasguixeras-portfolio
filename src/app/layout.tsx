import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
