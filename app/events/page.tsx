"use client"

import React, { useEffect, useState } from 'react'
import EventList from '@/Components/events/eventsList'
import axios from 'axios'



export default function page() {
  interface Event {
    id: number
    title: string
    description: string
    date: string
    location: string
    image: string
    isFeatured: boolean
  }
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios.get<Event[]>('http://127.0.0.1:8000/events')
    .then(res => setEvents(res.data))
  }, [])

  return (
    <div className='mt-16'><EventList events={events}/> </div>
  )

}