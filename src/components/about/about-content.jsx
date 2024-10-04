import Image from "next/image";
import history from "../../../public/images/history.png";
import about from "../../../public/images/about.png";
import vision from "../../../public/images/vision (1).png";
import mission from "../../../public/images/target.png";

export default function AboutContent() {
  return (
    <div>
      <div className="flex text-left responsive-layout-about">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              Our History
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-about">
              Founded in 2024, Lemon Secure Solutions offers integrated security
              by combining manpower with advanced technology. As an
              owner-managed company, we understand South Africa's unique
              security needs. Our core services include Guarding, Armed
              Reaction, and Technology, all supported by our state-of-the-art
              Command Centre for premium client service.
            </div>
          </div>
        </div>
    
        <div className="w-[50px]"></div>
        <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
          <div>
            <div className="avatar">
              <div className=" h-[150px] w-[150px] flex justify-center items-center">
                <Image src={history} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <div className="flex text-left responsive-layout3">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              About Our Company
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-about">
              Lemon Secure Solutions excels in GPS tracking, CCTV systems, and
              professional guard services. Committed to safety and innovation,
              we’ve earned the trust of clients by continuously adapting to meet
              evolving security needs.
            </div>
          </div>
        </div>
 
        <div className="w-[50px]"></div>
        <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
          <div>
            <div className="avatar">
              <div className=" h-[150px] w-[150px] flex justify-center items-center">
                <Image src={about} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <div className="flex text-left responsive-layout3">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              Vision
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-about">
              Our focus on customer satisfaction sets us apart, fostering
              lasting relationships built on trust. We relentlessly pursue
              excellence, continuously innovating to ensure Lemon Security is
              synonymous with top-tier security solutions.
            </div>
          </div>
        </div>
    
        <div className="w-[50px]"></div>
        <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
          <div>
            <div className="avatar">
              <div className="h-[150px] w-[150px] flex justify-center items-center">
                <Image src={vision} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <div className="flex text-left responsive-layout3">
        <div className="w-full text-left mr-10">
          <div className="card grid h-32 flex-grow shadow-none text-black text-left ml-0 font-custom headings w-full">
            <h1 className="text-3xl font-extrabold border-b-4 border-black pb-2 inline-block custom-font-head">
              Mission
            </h1>
            <br />
            <br />
            <div className="w-full text-lg custom-font-body-about">
              We aim to build lasting client relationships by offering
              personalized, high-quality services tailored to their needs,
              fostering trust and mutual success.
            </div>
          </div>
        </div>
    
        <div className="w-[50px]"></div>
        <div className="w-[300px] rounded-box grid flex-grow place-items-center shadow-none pl-10">
          <div>
            <div className="avatar">
              <div className="h-[150px] w-[150px] flex justify-center items-center">
                <Image src={mission} className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
