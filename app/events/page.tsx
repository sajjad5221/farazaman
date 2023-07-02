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
    Apiclient.get<Event[]>('events/')
    .then(res => setEvents(res.data))
  }, [])

  return (
    <div>
      <EventsList events={events} />
    </div>
  )
}