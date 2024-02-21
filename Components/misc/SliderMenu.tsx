'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
// import Apiclient from '@/Services/Apiclient';
// import Image from 'next/image';
import SectionHeader from '../common/SectionHeader';
import { ComentItem } from '@/types/global';

// type Item = {
//   id: number;
//   name: string;
//   text: string;
//   image: string;
//   jobTitle: string;
//   subTitle: string;
// };

export default function SliderMenu({
  title,
  items,
}: {
  title: string;
  items: Array<ComentItem>;
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
    <div className="relative px-4 py-4 w-full max-w-full text-gray-300 select-none bg-servicebg sm:block mt-32 lg:mt-60">
      <div className="px-4 leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40 ">
        <SectionHeader title="نظرات شما" />
      </div>
      <div className="flex flex-row items-center">
        <div
          className="flex overflow-auto lg:overflow-hidden w-10/12 xl:w-8/12 m-auto"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img className='absolute left-0 top-2 w-32 md:w-68 h-32  md:h-68' src="/static/images/hires/logoPattern.png" alt="" />
          {items.map((item, index) => (
            // TODO: create carouselItem component :<CarouselItem key={item.id} item={item} />

            <div
            key={index}
            className="relative bg-white flex flex-col overflow-hidden flex-shrink-0 justify-evenly w-[98%] md:w-[47%] lg:w-[31%] rounded-lg cursor-pointer mx-3"
            style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex flex-col items-center ">
                <div className=" overflow-hidden w-24 h-24 rounded-full my-10">
                  <img className=' object-cover w-full h-full' src={item.image} alt="" />
                </div>
                <p className="text-black whitespace-pre-wrap text-center text-sm px-5 h-10 mb-5">{item.text}</p>
                <div className="mr-4 flex justify-center mt-40 mb-5 items-center">
                  <p className=" text-yellow-950 ml-2">{item.name}</p>
                  <div className='w-[1px] h-4 rounded-lg bg-customGray'></div>
                  <p className="text-customGray mr-2">{item.subTitle}</p>
                </div>
                {/* <p className="text-black whitespace-pre-wrap text-justify text-sm">
                  {item.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-3 mx-auto justify-center">
        <button
          className="rounded-md p-1 bg-white text-brand hover:scale-110 hover:shadow-xl transition-colors shadow-lg font-bold"
          aria-label="Arrow"
          onClick={handleNextSlide}
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
        <button
          className="rounded-md p-1 bg-white text-brand hover:scale-110 hover:shadow-xl shadow-lg font-bold mr-2"
          aria-label="Arrow"
          onClick={handlePrevSlide}
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}