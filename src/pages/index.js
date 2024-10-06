import Image from "next/image";
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
      <div
        className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] relative`}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <Slideshow />
          <div className="spacer"></div>
          <div className="flex mr-0 sm:mr-72 w-full">
            <LandingContent />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
