import React, { useState, useEffect } from "react";
import Image from "next/image";
import slide1 from "../../../public/images/cyber.png";
import slide2 from "../../../public/images/security.png";
import slide3 from "../../../public/images/sec_premises.png"



export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: slide1 },
    { id: 2, image: slide2 },
    { id: 33, image: slide3 }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="slideshow relative w-full h-[50vh] slideshow-custom">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide absolute w-full h-full  transition-opacity duration-1000 ease-in-out custom-slide-height ${
            index === currentSlide ? "z-10 opacity-100" : "opacity-0"
          }`}
        >
          
          <Image
            src={slide.image}
            alt="Slide Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
       <div className="slideshow font-slideshow custom-slide-text absolute bottom-0 left-0 p-4 text-5xl font-bold text-limeGreen z-20 max-w-[1000px] text-xxl cu">
        Your premier provider of thorough security solutions
      </div>
      <br></br>
    </div>
  );
};
