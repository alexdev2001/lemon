import React, { useState, useEffect } from "react";
import Image from "next/image";
import slide1 from "../../../public/images/cybersecurity.webp"; 

export default function ServicesBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: slide1 },
      ];
    
  return (
    <div className="slideshow relative w-full h-[50vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
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
       <div className="slideshow font-slideshow slidetext-service absolute bottom-0 left-0 p-4 text-7xl font-bold text-limeGreen z-20  text-xxl text-center">
        Services
      </div>
      <br></br>
    </div>
  );
};