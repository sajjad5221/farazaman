"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
const SliderMenu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef(null);

  const handleScroll = (event: any) => {
    const delta = Math.max(-1, Math.min(1, event.deltaY));
    setScrollPosition((prevPosition) => prevPosition + delta * 100);
  };

  const handlePrev = () => {
    setScrollPosition((prevPosition) => prevPosition - 100);
  };

  const handleNext = () => {
    setScrollPosition((prevPosition) => prevPosition + 100);
  };

  useEffect(() => {
    const menu: any = menuRef.current;
    if (menu) {
      menu.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [scrollPosition]);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Card 1",
      description: "Description of Card 1",
      imageSrc: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="relative px-8">
      <div className="flex items-center justify-between">
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handlePrev}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handleNext}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="overflow-x-scroll" onWheel={handleScroll} ref={menuRef}>
        <div className="flex flex-nowrap">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center w-64 p-4 border rounded-lg border-gray-200 hover:border-gold-500 transition-colors duration-300 mx-3"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Card Image"
                className="mx-auto rounded-full"
              />
              <h2 className="text-lg font-bold text-center mt-4">Title</h2>
              <p className="text-gray-700 mt-2 text-center">
                Description text goes here. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam volutpat libero eget diam
                mollis vehicula.
              </p>
              <button className="mt-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">
                See More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderMenu;
