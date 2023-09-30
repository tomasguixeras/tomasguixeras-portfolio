import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Rubik, Roboto_Mono } from "next/font/google";

import NavBar from "@/components/NavBar";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

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
  alternates: {
    canonical: "https://tomasguixeras.vercel.app/",
  },
};

type layoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: layoutProps) {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html className={`${rubik.variable} ${roboto.variable}`} lang={locale}>
      <body className="flex flex-col items-center font-body max-w-screen-2xl m-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
