import EventCard from './EventsCard';
import React from 'react'

type Props = {
  events: Event[];
  onEventSelect?: (event: Event) => void;
};

type Event = {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

const EventList = ({ events }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 pl-3 pb-5 bg-white dark:bg-neutral-900">
      {events.map((event) => (
        <div className="w-full" key={event.id}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
