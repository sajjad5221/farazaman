import React, { useEffect, useState } from 'react';
import axios from 'axios'

type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
  };

type Props = {
  event: Event;
};


const EventCard = ({ event }: Props) => {
  const [users, setUsers] = useState([])
  useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => console.log(res.data[0]))
  })
  return (
    <div className="max-w-sm border-1 rounded border-gray-950 overflow-hidden shadow-lg mt-16 mr-5 bg-neutral-900 p-2">
      <img className="w-full" src={event.image} alt={event.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.title}</div>
        <p className="text-gray-400 text-base">{event.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{event.date}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{event.location}</span>
      </div>
    </div>
  );
};

export default EventCard;