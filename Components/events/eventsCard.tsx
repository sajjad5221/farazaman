
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
  const MAX_DESCRIPTION_LENGTH = 300;	
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="max-w-sm border-1 rounded border-gray-950 overflow-hidden shadow-lg mt-16 mr-5 dark:bg-neutral-900 p-2">
      <img className="w-full" src={event.image} alt={event.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2  dark:text-white text-black">{event.name}</div>
        <p className="text-gray-400 text-base">
          {event.description.length > MAX_DESCRIPTION_LENGTH && !showFullDescription
            ? event.description.slice(0, MAX_DESCRIPTION_LENGTH) + '...'
            : event.description}
          {event.description.length > MAX_DESCRIPTION_LENGTH && (
            <span>
              {!showFullDescription && (
                <>
                  {' '}
                  <Link href={`/events/${event.id}`}>
                    <p className="text-blue-500">بیشتر...</p>
                  </Link>
                </>
              )}
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
        <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {event.date}
        </span>
        <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {event.location}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
