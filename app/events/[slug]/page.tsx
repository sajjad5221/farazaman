'use client'
import EventDetails from "@/Components/events/EventDetails";
import EventForm from "@/Components/events/EventForm";
import EventHeader from "@/Components/events/EventHeader";
// import EventsList from "@/Components/events/EventsList";

import Apiclient from "@/Services/Apiclient";
import React, { useEffect, useState } from "react";
export default function EventSlug(context: any) {
  const eventId = context.params?.slug as number | undefined;
  if (eventId === undefined) {
    throw new Error("Event ID is undefined");
  }
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
      {/* TODO: make event header component and move codes to the new component */}
      <div className="mt-16"></div>
      <section className="bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-3">
            <div className="order-2 col-span-3 p-4 m-5 bg-white border border-gray-200 rounded-lg shadow sm:m-16 shrink-0 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:mx-10 md:p-8 lg:col-span-1">
              <EventForm eventId={eventId} />
            </div>
            <div className="order-1 col-span-3 px-4 py-24 text-center lg:col-span-2 lg:py-56">
              <EventHeader events={events} eventId={eventId} />

            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 dark:bg-neutral-900">
        <div className="container py-20 mx-auto">
          <EventDetails events={events} eventId={eventId} />
          {/* TODO: برای رویداد ها باید از کامپوننتی که فرزاد نوشته استفاده بشه. تا از نوشتن کدهای چندباره جلوگیری بشه */}
          <div className="py-3 mx-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">سایر رویدادها</h3>
          </div>
          <hr />

          {/* <EventsList events={events} /> */}
        </div>
      </div>
    </div>
  );
}