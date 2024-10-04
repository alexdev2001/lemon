import AboutContent from "@/components/about/about-content";
import Footer from "@/components/footer/footer";
import AboutBanner from "@/components/slideshow/about-banner";

export default function About() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <AboutBanner />
          <div className="spacer"></div>
          <div className="flex mr-72">
            <AboutContent />
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
