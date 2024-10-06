import Image from "next/image";
import cpo from "../../../public/images/personal_security (1).jpg";
import guard from "../../../public/images/guarding (1).jpg";
import cctv from "../../../public/images/cctv.jpg";
import verify from "../../../public/images/verify.jpg";
import cyber from "../../../public/images/cyber_sec.jpg";
import risk from "../../../public/images/risk_assesment.jpg";
import { forwardRef, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const ServicesContent = forwardRef((props, ref) => {
  const router = useRouter();
  const personalRef = useRef(null);
  const cyberRef = useRef(null);
  const cctvRef = useRef(null);
  const verifyRef = useRef(null);
  const guardRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const section = router.query.section;
    switch (section) {
      case "personal":
        scrollToSection(personalRef);
        break;
      case "cyber":
        scrollToSection(cyberRef);
        break;
      case "cctv":
        scrollToSection(cctvRef);
        break;
      case "guard":
        scrollToSection(guardRef);
        break;
      case "verify":
        scrollToSection(verifyRef);
        break;
      default:
        break;
    }
  }, [router.query.section]);

  return (
    <>
      <div>
        <div className="flex text-left responsive-layout-banner">
          <section className="w-full text-left" ref={personalRef}>
            <div className="card  grid h-32 flex-grow  shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Personal Security
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions provides highly trained Close Protection
                Officers (CPOs) for the personal safety of executives,
                dignitaries, celebrities, and private individuals. Our CPOs
                ensure discreet and effective protection in any environment.
                <br />
                <br />
                We also offer both armed and unarmed security services for
                commercial, residential, retail, and educational sectors,
                delivering reliable, professional security solutions tailored to
                your needs.
              </div>
            </div>
          </section>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10 ">
            <div>
              <div className="stack custom-image-service">
                <Image
                  className="grid h-72 w-96 place-content-center rounded"
                  src={cpo}
                />
                <div className="bg-[rgba(139,153,58,0.8)] text-accent-content grid h-80 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-80 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(139,153,58,0.8)] w-40 md:ml-[550px]" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex text-left  responsive-layout2">
          <section className="w-full text-left mr-10" ref={guardRef}>
            <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Guarding
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions offers skilled armed and unarmed guards
                for commercial, residential, retail, and educational sectors.
                All officers are thoroughly vetted, and sites are backed by
                armed response and technology.
                <br />
                <br />
                Our Events Division handles security for large events, with
                pre-screened staff and mobile surveillance. We also provide
                flexible guarding services for short or long-term needs.
              </div>
            </div>
          </section>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
            <div>
              <div className="stack custom-image-service">
                <Image
                  className="grid h-72 w-96 place-content-center rounded"
                  src={guard}
                />
                <div className="bg-[rgba(139,153,58,0.8)] placeholder:text-accent-content grid h-80 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-80 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(159,176,67,0.8)] w-40 md:ml-[550px]" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex text-left responsive-layout2">
          <section className="w-full text-left mr-10" ref={cctvRef}>
            <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Technical Services
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions offers a comprehensive range of technical
                services, including custom security installations tailored to
                each site's unique needs. We specialize in CCTV installations
                and provide 24-hour backup support through our maintenance
                contracts. All technicians are Bylaw 25 compliant, ensuring
                top-quality service and adherence to industry standards.
              </div>
            </div>
          </section>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
            <div>
              <div className="stack custom-image-service">
                <Image
                  className="grid h-64 w-96 place-content-center rounded"
                  src={cctv}
                />
                <div className="bg-[rgba(139,153,58,0.8)] text-accent-content grid h-72 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-72 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(179,198,76,0.8)] w-40 md:ml-[550px]" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex text-left responsive-layout2">
          <section className="w-full text-left mr-10 section" ref={verifyRef}>
            <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Security Officer Analysis
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions offers an application for clients to
                conduct background checks and access security officer
                performance data, allowing thorough vetting and quick issue
                reporting. This ensures transparency and control over client
                safety. (Coming soon)
                <br />
                <br />
                <br />
                <button className="btn bg-[rgba(199,220,84,0.8)] hover:bg-[rgba(199,220,84,0.8)] text-black transition-transform duration-300 transform hover:scale-110">
                  To the app
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
            <div>
              <div className="stack custom-image-service-analysis">
                <Image
                  className="grid h-64 w-96 place-content-center rounded"
                  src={verify}
                />
                <div className="bg-[rgba(139,153,58,0.8)] text-accent-content grid h-72 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-72 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(199,220,84,0.8)] w-40 md:ml-[550px]" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex text-left responsive-layout2">
          <section className="w-full text-left mr-10 section" ref={cyberRef}>
            <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Cyber Security and Online Intelligence
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions offers online intelligence through Track
                Force, a GIS tool that monitors urban infrastructure and
                provides data for resource planning. We also specialize in
                penetration testing to identify system vulnerabilities and
                strengthen cybersecurity.
              </div>
            </div>
          </section>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
            <div>
              <div className="stack custom-image-service">
                <Image
                  className="grid h-64 w-96 place-content-center rounded"
                  src={cyber}
                />
                <div className="bg-[rgba(139,153,58,0.8)] text-accent-content grid h-72 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-72 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(219,241,95,0.8)] w-40 md:ml-[550px]" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex text-left responsive-layout2">
          <div className="w-full text-left mr-10">
            <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Risk Assesment
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body">
                Lemon Secure Solutions offers comprehensive on-site risk
                assessments, where a skilled assessor visits your premises to
                thoroughly evaluate your existing security measures and identify
                potential risk factors.
              </div>
            </div>
          </div>
          <div className="w-[50px]"></div>
          <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
            <div>
              <div className="stack custom-image-service">
                <Image
                  className="grid h-64 w-96 place-content-center rounded"
                  src={risk}
                />
                <div className="bg-[rgba(139,153,58,0.8)] text-accent-content grid h-72 w-96 place-content-center rounded">
                  2
                </div>
                <div className="bg-[rgba(159,176,67,0.8)] text-secondary-content grid h-72 w-96 place-content-center rounded">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr className="h-[9px] bg-[rgba(229,245,97,0.8)] w-40 md:ml-[550px]" />
      </div>
    </>
  );
});

export default ServicesContent;
