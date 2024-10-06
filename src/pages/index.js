import Image from "next/image";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import { Slideshow } from "@/components/slideshow/slideshow";
import LandingContent from "../components/landing/landingcontent";
import Footer from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div
          className={`md:grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center md:min-h-screen  p-4 md:p-20 md:gap-16 md:font-[family-name:var(--font-geist-sans)] relative`}
        >
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
            <Slideshow />
            <div className="spacer"></div>
            <div className="flex  w-[100%]">
              <LandingContent />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
