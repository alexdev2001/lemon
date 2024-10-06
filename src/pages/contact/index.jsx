import ContactContent from "@/components/contact/contact-content";
import Footer from "@/components/footer/footer";
import ContactBanner from "@/components/slideshow/contact-banner";

export default function Contact() {
  return (
    <div className="md:w-full custom-width-small">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:w-full sm:w-[10px] custom-margin-contact">
      <div
        className={`md:grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center md:min-h-screen  p-4 md:p-20 md:gap-16 md:font-[family-name:var(--font-geist-sans)] relative`}
      >
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
          <ContactBanner />
          <div className="spacer"></div>
          <div className="w-[100%]">
            <ContactContent />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </div>
  );
}