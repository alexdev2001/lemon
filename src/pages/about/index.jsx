import AboutContent from "@/components/about/about-content";
import Footer from "@/components/footer/footer";
import ServicesContent from "@/components/services/services-content";
import AboutBanner from "@/components/slideshow/about-banner";

export default function About() {
  return (
    <div className="w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:w-full sm:w-[10px]">
        <div
          className={`md:grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center md:min-h-screen  p-4 md:p-20 md:gap-16 md:font-[family-name:var(--font-geist-sans)] relative`}
        >
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <AboutBanner />
            <div className="spacer"></div>
            <div className="flex md:mr-72">
              <AboutContent />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
