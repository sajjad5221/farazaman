'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Apiclient from '@/Services/Apiclient';
import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';

type Item = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export default function SliderMenu({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  const carouselRef: React.RefObject<HTMLDivElement> = useRef(null);

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scroll({
        left: -carouselRef.current.offsetWidth, // Change to a negative value
        behavior: 'smooth',
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

  console.log(items);

  return (
    <div className="px-4 py-4 w-full max-w-full text-gray-300 select-none bg-gray-50 hidden sm:block">
      <div className="px-4 leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title="نظرات شما" />
      </div>
      <div className="flex flex-row items-center">
        <div
          className="flex overflow-auto lg:overflow-hidden"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {items.map((item) => (
            // TODO: create carouselItem component :<CarouselItem key={item.id} item={item} />

            <div
              key={item.id}
              className="flex flex-col overflow-hidden flex-shrink-0 justify-evenly h-56 sm:w-1/3 md:w-1/4 shadow-md rounded-lg p-4 cursor-pointer mx-2"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex">
                <div className="w-16 h-16 bg-gray-300 rounded-tl-[32px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] border border-brand"></div>
                <div className="mr-4 flex flex-col justify-between">
                  <p className="mt-2 text-brand  ">{item.name}</p>
                  <p className="text-customGray">{item.jobTitle}</p>
                </div>
              </div>
              <p className="text-black whitespace-pre-wrap text-justify text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-3 ml-10 justify-end">
        <button
          className="rounded-full text-brand hover:scale-110 hover:shadow-xl transition-colors shadow-lg font-bold"
          aria-label="Arrow"
          onClick={handleNextSlide}
        >
          <ChevronRightIcon className="w-7 h-7" />
        </button>
        <button
          className="rounded-full text-brand hover:scale-110 hover:shadow-xl shadow-lg font-bold mr-2"
          aria-label="Arrow"
          onClick={handlePrevSlide}
        >
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
