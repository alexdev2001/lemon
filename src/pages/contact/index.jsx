import ContactContent from "@/components/contact/contact-content";
import Footer from "@/components/footer/footer";
import ContactBanner from "@/components/slideshow/contact-banner";

export default function Contact() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ContactBanner />
          <div className="spacer"></div>
          <div className="flex mr-72">
            <ContactContent />
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
}
