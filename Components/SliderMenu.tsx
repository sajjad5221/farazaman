"use client";

import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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
  const experiences = [
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const StartUps = [
    {
      id: 1,
      title: "Landa Trip",
      description: "This is the description for Card 1.",
      imageUrl: "/static/images/Home/logo-startup/Landa-trip-logo7.PNG",
    },
    {
      id: 2,
      title: "Steady Skull",
      description: "This is the description for Card 1.",
      imageUrl: "/static/images/Home/logo-startup/IMG_2541.PNG",
    },
    {
      id: 3,
      title: "Vision Raft",
      description: "This is the description for Card 1.",
      imageUrl: "/static/images/Home/logo-startup/VisionRaftLogo.PNG",
    },
    {
      id: 4,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    // {
    //   id: 7,
    //   title: "Name",
    //   description: "This is the description for Card 1.",
    //   imageUrl: "https://via.placeholder.com/150",
    // },
    // {
    //   id: 8,
    //   title: "Name",
    //   description: "This is the description for Card 1.",
    //   imageUrl: "https://via.placeholder.com/150",
    // },
    // {
    //   id: 9,
    //   title: "Name",
    //   description: "This is the description for Card 1.",
    //   imageUrl: "https://via.placeholder.com/150",
    // },
    // {
    //   id: 10,
    //   title: "Name",
    //   description: "This is the description for Card 1.",
    //   imageUrl: "https://via.placeholder.com/150",
    // },
  ];
  type BillingInterval = "doing" | "done";

  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("doing");
  const carouselRef: React.RefObject<HTMLDivElement> = useRef(null);

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
    <div className="relative w-full max-w-full px-4 py-8 text-gray-300 select-none bg-gray-50 dark:bg-neutral-900">
      <h1 className="mb-6 text-3xl font-bold text-center text-black dark:text-white">
        {title}
      </h1>
      <p className="max-w-2xl pt-6 pb-16 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
        {description}
      </p>
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
          </div>
        </div>
      ) : (
        ""
      )}
      {billingInterval === "done" ? (
        <div className="flex flex-row items-center">
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            aria-label="Arrow"
            onClick={handlePrevSlide}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div
            className="flex overflow-x-auto lg:overflow-x-hidden whitespace-nowrap"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {type === "exp"
              ? experiences.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col w-64 h-64 p-4 mx-2 rounded-lg cursor-pointer justify-evenly bg-neutral-200 dark:bg-neutral-800"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Image
                    width={150}
                    height={150}
                    quality={100}
                    src={card.imageUrl}
                    alt={card.title}
                    className="mx-auto rounded-full border-2 border-yellow-500 p-[2px]"
                  />

                  <h1 className="mt-2 font-bold text-center text-neutral-900 dark:text-neutral-100">
                    {card.title}
                  </h1>
                  <p className="text-center text-neutral-900 dark:text-neutral-100">
                    {card.description}
                  </p>
                </div>
              ))
              : StartUps.map((card) => (
                <Link
                  href={"/startups/" + card.id}
                  key={card.id}
                  className="flex flex-col w-64 h-64 p-4 mx-2 text-gray-700 rounded-lg cursor-pointer justify-evenly bg-neutral-100 dark:bg-neutral-700"
                  style={{ scrollSnapAlign: "start" }}
                >

                  <h1 className="mt-2 font-bold text-center">
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {card.title}
                    </span>
                  </h1>
                  <p className="text-center text-neutral-900 dark:text-neutral-100">
                    {card.description}
                  </p>
                </Link>
              ))}
          </div>
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            aria-label="Arrow"
            onClick={handleNextSlide}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            aria-label="Arrow"
            onClick={handlePrevSlide}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div
            className="flex overflow-x-auto lg:overflow-x-hidden whitespace-nowrap"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {type === "exp"
              ? experiences.map((card) => (
                <div
                  key={card.id}
                  className="flex flex-col w-64 h-64 p-4 mx-2 rounded-lg cursor-pointer justify-evenly bg-neutral-100 dark:bg-neutral-800"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <Image
                    width={80}
                    height={80}
                    quality={100}
                    src={card.imageUrl}
                    alt={card.title}
                    className="mx-auto rounded-full border-2 border-yellow-500 p-[2px]"
                  />

                  <h1 className="mt-2 font-bold text-center text-neutral-900 dark:text-neutral-100">
                    {card.title}
                  </h1>
                  <p className="text-center text-neutral-900 dark:text-neutral-100">
                    {card.description}
                  </p>
                </div>
              ))
              : StartUps.map((card) => (
                <Link
                  href={"/startups/" + card.id}
                  key={card.id}
                  className="flex flex-col w-64 h-64 p-4 mx-2 rounded-lg cursor-pointer justify-evenly bg-neutral-200 dark:bg-neutral-800"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div>
                    <Image
                      width={80}
                      height={80}
                      quality={100}
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto rounded-full border-2 border-yellow-500 p-[2px] object-contain"
                    />
                  </div>


                  <h1 className="mt-2 font-bold text-center text-neutral-900 dark:text-neutral-100">
                    {card.title}
                  </h1>
                  <p className="text-center text-neutral-900 dark:text-neutral-100">
                    {card.description}
                  </p>
                </Link>
              ))}
          </div>
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            aria-label="Arrow"
            onClick={handlePrevSlide}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
