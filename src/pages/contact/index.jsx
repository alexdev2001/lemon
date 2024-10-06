import AboutContent from "@/components/about/about-content";
import ContactContent from "@/components/contact/contact-content";
import FooterContact from "@/components/footer/contact-footer";
import Footer from "@/components/footer/footer";
import ContactBanner from "@/components/slideshow/contact-banner";

export default function Contact() {
  return (
    <div className="md:w-full custom-contact-width">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:w-full sm:w-[10px] custom-margin-contact">
        <div
          className={`md:grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center md:min-h-screen  pl-4 md:p-20 md:gap-16 md:font-[family-name:var(--font-geist-sans)] relative`}
        >
          <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start md:w-full">
            <div className="custom-banner-contact">
              <ContactBanner />
            </div>
            <div className="md:h-[380px]"></div>
            <div className="custom-spacer"></div>
            <div className="w-[100%]">
              <ContactContent />
            </div>
          </div>
        </div>
        <FooterContact/>
      </main>
    </div>
  );
}
