'use client'
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function EventDetails({ eventId }: { eventId: number }) {
//   const [eventData, setEventData] = useState<any>(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(`http://127.0.0.1:8000/events/`+Id);
//       setEventData(response.data);
//       console.log(response.data);
//     }
//     fetchData();
//   }, [Id]);

//   if (!eventData) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
        <div className="container py-20 mx-auto">
        <div className="grid grid-cols-4 mb-10 ">
            <div className="order-1 col-span-4 mx-auto md:px-10 lg:col-span-2">
            <img
                alt="image"
                src="https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/group-of-people-photo-in-room.jpg"
            ></img>
            </div>
            <div className="order-2 col-span-4 py-0 text-right text-gray-900 md:px-10 dark:text-gray-100 lg:mx-16 px-7 lg:col-span-2 ">
            <h6 className="mb-2 pt-4 lg:pt-0  text-[#EAB308]">
                درباره رویداد
            </h6>
            <h1 className="mb-5 text-5xl font-bold">عنوان رویداد</h1>
            <p className="mb-1 text-lg leading-loose text-gray-500 lg:ml-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                و با لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                مجله .استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                و مجله است
            </p>
            </div>
        </div>
    </div>
    </div>
  );
}
