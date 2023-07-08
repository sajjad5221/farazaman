"use client"

import React, { useState } from 'react';
import Link from 'next/link';

type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

type Props = {
  event: Event;
};

const EventCard = ({ event }: Props) => {
  // Define the maximum length of the event description to display
  const MAX_DESCRIPTION_LENGTH = 150;
  
  // Define the state variable that determines whether to show the full event description or not
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="border-1 rounded-md overflow-hidden shadow-lg mt-16 mr-5 bg-neutral-200 dark:bg-neutral-800 p-2">
      {/* Link to the event page */}
      <Link href={`/events/${event.id}`}>
        {/* Event image */}
        <img className="rounded-md h-48 w-full" src={event.image} alt={event.name} />
        <div className="px-6">
          {/* Event name */}
          <div className="font-bold text-md mb-2  dark:text-neutral-100 text-neutral-900">{event.name}</div>
          {/* Event description */}
          <p className="text-neutral-900 text-sm  dark:text-neutral-100">
            {event.description.length > MAX_DESCRIPTION_LENGTH && !showFullDescription
              ? event.description.slice(0, MAX_DESCRIPTION_LENGTH)
              : event.description}
            {/* Show "more" link if the event description is longer than the maximum length */}
            {event.description.length > MAX_DESCRIPTION_LENGTH && (
              <span>
                {!showFullDescription && (
                  <>
                    {' '}
                    <p className="text-blue-500">بیشتر...</p>
                  </>
                )}
                {/* Show "less" link if the full event description is currently being displayed */}
                {showFullDescription && (
                  <>
                    {' '}
                    <span onClick={() => setShowFullDescription(false)} className="text-blue-500">(less)</span>
                  </>
                )}
              </span>
            )}
          </p>
        </div>
        <div className="px-6 py-4">
          {/* Event date */}
          <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-neutral-900 ">
            {event.date}
          </span>
          {/* Event location */}
          <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-neutral-900 mr-2">
            {event.location}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;