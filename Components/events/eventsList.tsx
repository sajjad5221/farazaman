import EventCard from './eventsCard';

type Props = {
  events: Event[];
  onEventSelect?: (event: Event) => void;
};

type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
  };

const EventList = ({ events }: Props) => {
  return (
    <div className="flex flex-wrap -mx-4 mt-1">
      {events.map((event) => (
        
        // <div key={event.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
        //   <div> {event.title} </div>
          <EventCard event={event} />
        // </div>
      ))}
    </div>
  );
};

export default EventList;