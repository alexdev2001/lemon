import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import gov from '../../../public/images/gov.png';
import reserveBank from '../../../public/images/reserve_bank.png';
import mra from '../../../public/images/mra.png';
import mecReg from '../../../public/images/mec-reg.png';
import escomReg from '../../../public/images/escom1-reg.png';

const logos = [
  { image: reserveBank, link: 'https://www.rbm.mw/' },
  { image: gov, link: 'https://www.malawi.gov.mw/' },
  { image: escomReg, link: 'https://www.escom.mw/' },
  { image: mra, link: 'https://www.mra.mw/' },
  { image: mecReg, link: 'https://mec.org.mw/' }
];

export default function LogoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: logos.length > 3 ? 3 : logos.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    cssEase: "linear",
  };

  return (
    <div className="w-full max-w-[400px] mx-auto "> {/* Restrict the max width */}
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.image}
                alt={`logo-${index}`}
                width={120}  // Set a fixed width for logos
                height={120} // Set a fixed height for logos
                className="object-contain transition-transform duration-300 transform hover:scale-110 logo-size"  // Ensures images are contained properly
                onMouseOver={(e) => (e.currentTarget.src = logo.image)}
                onMouseOut={(e) => (e.currentTarget.src = logo.image)}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
