"use client"

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Apiclient from "@/Services/Apiclient";
import Link from "next/link";

export default function SliderMenu({
  title,
  description,
  type,
  StartUpsProps,
}: {
  title: string;
  description: string;
  type: string;
  StartUpsProps?: boolean;
}) {

  // Define the interface for StartUps object
  interface StartUps {
    id: number;
    name: string;
    description: string;
    date: string;
    location: string;
    logo: string;
    flag: boolean;
  }

  // Define state for startups data and fetch data from API on mount
  const [startups, setStartups] = useState<StartUps[]>([]);
  useEffect(() => {
    Apiclient.get<StartUps[]>('startups/')
    .then(res => setStartups(res.data))
  }, [])

  // Define state for the billing interval and carousel scroll position
  type BillingInterval = "doing" | "done";
  const [billingInterval, setBillingInterval] = useState<BillingInterval>("doing");
  const carouselRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Define functions to handle carousel sliding and dragging
  const handleNextSlide = () => {
    carouselRef.current?.scrollBy({
      top: 0,
      left: window.innerWidth,
      behavior: "smooth",
    });
  };
  const handlePrevSlide = () => {
    carouselRef.current?.scrollBy({
      top: 0,
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };
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

  // Return the JSX for the SliderMenu component
  return (
    <div className="relative w-full max-w-full px-4 py-8 text-gray-300 select-none bg-gray-50 dark:bg-neutral-900">
      {/* Render the title and description */}
      <h1 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
        {title}
      </h1>
      <p className="max-w-2xl pt-6 pb-16 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
        {description}
      </p>
      {/* Render the billing interval selector if StartUpsProps is true */}
      {StartUpsProps ? (
        <div className="px-4 mx-auto sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
          <div className="relative flex self-center mb-6 text-base font-semibold rounded-lg bg-neutral-200 dark:bg-neutral-800 sm:mb-8">
            <button
              onClick={() => setBillingInterval("doing")}
              type="button"
              className={`${billingInterval === "doing"
                  ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
                } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
            >
              انجام شده
            </button>
            <button
              onClick={() => setBillingInterval("done")}
              type="button"
              className={`${billingInterval === "done"
                  ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
                } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
            >
              در حال انجام
            </button>
            <span
              className={`${billingInterval === "doing"
                  ? "absolute inset-y-0 left-0 w-1/2 rounded-md bg-neutral-200 dark:bg-neutral-700"
                  : "absolute inset-y-0 right-0 w-1/2 rounded-md bg-neutral-200 dark:bg-neutral-700"
                }`}
              aria-hidden="true"
            ></span>
          </div>
        </div>
      ) : null}
      {/* Render the carousel */}
      <div
        className="relative flex items-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={carouselRef}
      >
        <button
          className="hidden absolute z-10 w-12 h-full text-gray-50 bg-black bg-opacity-50 rounded-l-md focus:outline-none lg:block left-0 hover:bg-opacity-75"
          onClick={handlePrevSlide}
        >
          <ChevronLeftIcon className="w-6 h-6 mx-auto" />
        </button>
        <button
          className="hidden absolute z-10 w-12 h-full text-gray-50 bg-black bg-opacity-50 rounded-r-md focus:outline-none lg:block right-0 hover:bg-opacity-75"
          onClick={handleNextSlide}
        >
          <ChevronRightIcon className="w-6 h-6 mx-auto" />
        </button>
        <div className="relative flex-1 ml-4">
          <div className="flex space-x-4">
            {startups.map((startUp, index) => (
              <Link href={`/${type}/${startUp.id}`} key={index}>
                <Link
                href={"/"} //Add link here
                  className="flex-none flex items-center justify-center w-48 h-48 bg-gray-300 bg-cover bg-center rounded-lg cursor-pointer select-none"
                  style={{ backgroundImage: `url(${startUp.logo})` }}
                >
                  <div
                    className="absolute w-full h-full bg-black opacity-40 rounded-lg"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                  ></div>
                  <div className="absolute z-10 text-white font-bold">
                    <p>{startUp.name}</p>
                    <p>{startUp.location}</p>
                  </div>
                </Link>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}