"use client";

import React, { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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
  const expriences = [
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const StartUps = [
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      title: "Name",
      description: "This is the description for Card 1.",
      imageUrl: "https://via.placeholder.com/150",
    },
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

  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16 max-w-full relative">
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        {description}
      </p>
      {StartUpsProps ? (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center text-base font-semibold mb-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mb-8">
            <button
              onClick={() => setBillingInterval("doing")}
              type="button"
              className={`${
                billingInterval === "doing"
                  ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                  : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
              } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
            >
              انجام شده
            </button>
            <button
              onClick={() => setBillingInterval("done")}
              type="button"
              className={`${
                billingInterval === "done"
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
            onClick={handlePrevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div
            className="flex overflow-x-auto whitespace-nowrap"
            ref={carouselRef}
          >
            {type === "exp"
              ? expriences.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-evenly w-64 h-64 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 cursor-pointer mx-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <Image
                      width={80}
                      height={80}
                      quality={100}
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto rounded-full"
                    />

                    <h3 className="text-center mt-2 font-bold">{card.title}</h3>
                    <p className="text-center dark:text-neutral-400">
                      {card.description}
                    </p>
                  </div>
                ))
              : StartUps.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-evenly w-64 h-64 bg-neutral-50 dark:bg-neutral-700 rounded-lg p-4 cursor-pointer mx-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <Image
                      width={80}
                      height={80}
                      quality={100}
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto rounded-full"
                    />

                    <h3 className="text-center mt-2 font-bold">{card.title}</h3>
                    <p className="text-center dark:text-neutral-400">
                      {card.description}
                    </p>
                  </div>
                ))}
          </div>
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            onClick={handlePrevSlide}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      ) : (
        <div className="flex flex-row items-center">
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            onClick={handleNextSlide}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div
            className="flex overflow-x-auto whitespace-nowrap"
            ref={carouselRef}
          >
            {type === "exp"
              ? expriences.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-evenly w-64 h-64 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 cursor-pointer mx-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <Image
                      width={80}
                      height={80}
                      quality={100}
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto rounded-full"
                    />

                    <h3 className="text-center mt-2 font-bold">{card.title}</h3>
                    <p className="text-center dark:text-neutral-400">
                      {card.description}
                    </p>
                  </div>
                ))
              : StartUps.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-evenly w-64 h-64 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 cursor-pointer mx-2"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <Image
                      width={80}
                      height={80}
                      quality={100}
                      src={card.imageUrl}
                      alt={card.title}
                      className="mx-auto rounded-full"
                    />

                    <h3 className="text-center mt-2 font-bold">{card.title}</h3>
                    <p className="text-center dark:text-neutral-400">
                      {card.description}
                    </p>
                  </div>
                ))}
          </div>
          <button
            className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1.5 px-1.5"
            onClick={handlePrevSlide}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
