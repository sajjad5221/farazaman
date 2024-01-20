"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Apiclient from "@/Services/Apiclient";
import Link from "next/link";
import Image from "next/image";

type Item = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function SliderMenu({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Item[]
}) {

  const carouselRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: -carouselRef.current.offsetWidth, // Change to a negative value
        behavior: "smooth",
      });
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (carouselRef.current != null) {
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = x - startX;
    if (carouselRef.current != null) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="relative px-4 w-full max-w-full text-gray-300 select-none bg-gray-50 dark:bg-neutral-900">
      <h1 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
        {title}
      </h1>
      <p className="max-w-2xl pt-6 pb-16 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
        {description}
      </p>
      <div className="flex flex-row items-center justify-center">
        <button
          className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold"
          aria-label="Arrow"
          onClick={handleNextSlide}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>

        <div
          className="flex overflow-auto lg:overflow-hidden"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center overflow-hidden flex-shrink-0 justify-evenly h-64 sm:w-1/3 md:w-1/4 bg-neutral-200 dark:bg-neutral-800 rounded-lg p-4 cursor-pointer mx-2"
              style={{ scrollSnapAlign: "start" }}
            >
              <Image
                width={150}
                height={150}
                src={item.image}
                alt={item.name}
                quality={30}
                className="rounded-lg"
              />

              <h1 className="text-center mt-2 font-bold text-neutral-900 dark:text-neutral-100">
                {item.name}
              </h1>
              <p className="text-black whitespace-pre-wrap text-justify text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        <button
          className="rounded-full mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold"
          aria-label="Arrow"
          onClick={handlePrevSlide}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}