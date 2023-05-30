import React from 'react'
import EventList from '@/Components/events/eventsList'
import events from '../../Components/events/events.json'



export default function page() {
  return (
    <div className='mt-24 mb-8'>
      <EventList events={events} />
    </div>
  )
}
