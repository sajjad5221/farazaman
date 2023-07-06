"use client"

import React, { useState } from "react";

type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

type Props = {
  events: Event[];
  eventId: number;
  onEventSelect?: (event: Event) => void;
};

export default function EventHeader({ events, eventId }: Props) {
  const MAX_DESCRIPTION_LENGTH = 100;
  const [showFullDescription, setShowFullDescription] = useState(false);
  eventId = eventId - 1;
  const event = events[eventId];

  return (
    <div>
      {/* Event title */}
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        {event?.name}
      </h1>

      {/* Event description */}
      <p className="mb-1 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
        {event?.description.length > MAX_DESCRIPTION_LENGTH && !showFullDescription
          ? event?.description.slice(0, MAX_DESCRIPTION_LENGTH)
          : event?.description}
        {event?.description.length > MAX_DESCRIPTION_LENGTH && (
          <span>
            {showFullDescription && (
              <>
                {' '}
                <span onClick={() => setShowFullDescription(false)} className="text-blue-500">(less)</span>
              </>
            )}
          </span>
        )}
      </p>

      {/* Event location */}
      <p className="mb-8 mt-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
        محل برگزاری : {event?.location}   
      </p>

      {/* Event date */}
      <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
        تاریخ برگزاری : {event?.date}   
      </p>

      {/* Button to show more event information */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <a
          href="#description"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
        >
          اطلاعات بیشتر...
        </a>
      </div>
    </div>
  );
}