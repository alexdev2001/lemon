import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/footer/footer";
import ServicesContent from "@/components/services/services-content";
import ServicesBanner from "@/components/slideshow/services-banner";

export default function Services() {
  const router = useRouter();
  const personalRef = useRef(null);
  const cyberRef = useRef(null);
  const cctvRef = useRef(null);
  const guardRef = useRef(null);
  const verifyRef = useRef(null);

  useEffect(() => {
    const section = router.query.section;
    if (section) {
      switch (section) {
        case "personal":
          personalRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "cyber":
          cyberRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "cctv":
          cctvRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        case "guard":
          guardRef.current?.scrollIntoView({ behavior: "smooth" });
        case "verify":
          verifyRef.current?.scrollIntoView({ behavior: "smooth" });
          break;
        default:
          break;
      }
    }
  }, [router.query.section]);

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <ServicesBanner />
          <div className="spacer"></div>
          <div className="flex mr-72">
            <ServicesContent
              personalRef={personalRef}
              cyberRef={cyberRef}
              cctvRef={cctvRef}
              verifyRef={verifyRef}
              guardRef={guardRef}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
