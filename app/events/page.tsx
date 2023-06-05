import React, { useEffect, useState } from 'react'
import EventList from '@/Components/events/eventsList'
import events from '../../Components/events/events.json'


interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  image: string
  isFeatured: boolean
}

// const [theevents, setEvents] = useState<Event[]>([])
// useEffect(() => {
//   axios.get<Event[]>('http://127.0.0.1:8000/')
//   .then(res=>console.log(res))
// }, [])

export default function page() {

  return (
    <div> <EventList events={events}/> </div>
  )
  // const { isClient } = useClient()
  //   const [users, setUsers] = useState([])

  // useEffect(()=> {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => console.log(res))
  // })
  // return (
  //   <div className='mt-24 mb-8'>
  //     {/* <EventList events={theevents} /> */}
  //   </div>
  // )
}