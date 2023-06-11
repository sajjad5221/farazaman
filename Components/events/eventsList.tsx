
import EventCard from './eventsCard';

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
    <div className="grid grid-cols-4 gap-4 my-10">
      {events.map((event) => (
          <EventCard event={event} />
      ))}
    </div>
  );
};

export default EventList;