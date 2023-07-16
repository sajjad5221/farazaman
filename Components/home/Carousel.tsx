"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export default function Carousel({ images }: { images: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex flex-row items-center my-10">
      <button
        className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-1 ml-2"
        aria-label="Previous Slide"
        onClick={handlePrevSlide}
      >
        <ChevronRightIcon className="w-8 h-8" />
      </button>
      <div className="w-[80rem] h-72 relative overflow-hidden">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-300"
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <button
        className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-1 mr-2"
        aria-label="Next Slide"
        onClick={handleNextSlide}
      >
        <ChevronLeftIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
