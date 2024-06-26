"use client"

import React, { useEffect, useState } from 'react'
import EventsList from '@/Components/events/EventsList'
import Apiclient from '@/Services/Apiclient'

export default function page() {
  interface Event {
    id: number
    name: string
    description: string
    date: string
    location: string
    image: string
    flag: boolean
  }
  
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch events data
    Apiclient.get<Event[]>('events/')
    .then(res => setEvents(res.data))
  }, [])

  return (
    <div>
      {/* Render the EventsList component and pass the events data as a prop */}
      <EventsList events={events} />
    </div>
  )
}
