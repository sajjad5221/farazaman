'use client'
import React,{useState} from 'react'
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
export default function EventDetails({ events , eventId }:Props) {
  const MAX_DESCRIPTION_LENGTH =650;
  const [showFullDescription, setShowFullDescription] = useState(false);
  eventId = eventId -1;
  const event = events[eventId];
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
        <div className="container py-20 mx-auto">
        <div className="grid grid-cols-4 mb-10 ">
            <div className="order-1 col-span-4 mx-auto md:px-10 lg:col-span-2">
            <img
                alt="image"
                src={event?.image}
            ></img>
            </div>
            <div className="order-2 col-span-4 py-0 text-right text-gray-900 md:px-10 dark:text-gray-100 lg:mx-16 px-7 lg:col-span-2 ">
            <h6 className="mb-2 pt-4 lg:pt-0  text-[#EAB308]">
                درباره رویداد
            </h6>
            <h1 className="mb-5 text-5xl font-bold">{event?.name}</h1>
            <p className="mb-1 text-lg leading-loose text-gray-500 lg:ml-5" id='description'>
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
            </div>
        </div>
    </div>
    </div>
  );
}
