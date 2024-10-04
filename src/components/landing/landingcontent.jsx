import Image from "next/image";
import card from "../../../public/images/who-bw.png";
import hoverCard from "../../../public/images/who.png";
import useHoverEffect from "@/components/hooks/hovereffect";
import { useRouter } from "next/router";
import Accordion from "@/components/accordion/accordion";
import LogoCarousel from "@/components/carousel/logo-carousel";

export default function LandingContent() {
  const router = useRouter();
  const { image, handleMouseEnter, handleMouseLeave } = useHoverEffect(
    card,
    hoverCard
  );
  return (
    <>
      <div>
        <div className="flex text-left responsive-layout">
          <div className="w-full text-left mr-10">
            <div className="card  grid h-32 flex-grow  shadow-none text-black text-left ml-0 font-custom headings w-full">
              <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
                Who we are
              </h1>
              <br />
              <br />
              <div className="w-full text-lg custom-font-body ">
                Lemon Secure Solutions provides integrated security solutions by
                combining manpower with the latest security technology.
                Guarding, Armed Reaction and Technology are strategically
                deployed to ensure the safety of our clients and the communities
                we serve.
              </div>
            </div>
          </div>
          <div className="top-margin-card">
            <div className="w-[60px]"></div>
            <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10 ">
              <div
                className={`card image-full w-[400px] transition-transform duration-300 transform hover:scale-110 shadow-xl card-width  ${
                  handleMouseEnter ? "scale-105" : "scale-100"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => router.push("/about")}
              >
                <figure>
                  <Image
                    src={image}
                    alt="Slide Image"
                    objectFit="cover"
                    priority
                  />
                </figure>
                <div className="card-body">
                  <p className="custom-font-body">
                    Visit our about us page for more information
                  </p>
                  <div className="card-actions justify-end">
                    <button className="font-custom-body underline">
                      about us<span className="text-xl font-custom-body">→</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <div></div>
        <div className=" text-black text-left ml-0 font-custom">
          <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
            What we do
          </h1>
          <br />
          <br />
          <div className="w-full text-lg custom-font-body2">
            Lemon Secure Solutions excels in GPS tracking, CCTV systems,
            professional guard services, and cybersecurity. Learn more at the{" "}
            <a href="/services" className="text-blue-500 underline">
              services
            </a>{" "}
            page.
          </div>
          <br />
          <br />
          <div className="text-center">
            <Accordion />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="text-black  text-left l-0 font-custom">
          <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
            Who we've worked with
          </h1>
          <br />
          <br />
          <div className="w-full text-lg custom-font-body2">
            Our clients come first at Lemon Secure solutions. We are proud to
            work with some of the leading organisations in the region.
          </div>
          <br />
          <br />
        </div>
        <LogoCarousel />
        <br />
        <br />
        <br />
        <div className="text-black  text-left l-0 font-custom">
          <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
            FAQs
          </h1>
          <br />
          <br />
          <div className="w-full text-lg custom-font-body2">
            Got questions? We got answers. Write to us by visiting the{" "}
            <a href="/contact" className="text-blue-500 underline">
              contact
            </a>{" "}
            page.
          </div>
          <br />
          <br />
          <div className="chat custom">
            <div className="chat chat-start ">
              <div className="chat-bubble bg-[rgba(114,145,32,0.8)] text-blue-950 custom-font-faq">
                Do you offer 24/7 security services?
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble custom-font-faq">
                Yes, our security services, <br /> including monitoring and
                response, are available 24/7
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="chat custom">
            <div className="chat chat-start ">
              <div className="chat-bubble bg-[rgba(114,145,32,0.8)] text-blue-950 custom-font-faq">
                How quickly can your armed reaction unit <br /> respond to an
                emergency?
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble custom-font-faq">
                Our response times depend on the location, but we strive to
                reach <br />
                any emergency within 5–15 minutes of an alarm being triggered.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
