<<<<<<< HEAD
import React from 'react'
=======
"use client"

import React, { useEffect, useState } from 'react'
import EventList from '@/Components/events/eventsList'
import axios from 'axios'



>>>>>>> main
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
    axios.get<Event[]>('http://127.0.0.1:8000/events/')
    .then(res => setEvents(res.data))
  }, [])

  return (
<<<<<<< HEAD
<div>
        <div className="container py-20 mx-auto">
          <div className="grid grid-cols-4 mb-10 ">
            <div className="order-1 col-span-4 px-10 mx-auto lg:col-span-2">
              <img
                alt="image"
                className=""
                src="https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/group-of-people-photo-in-room.jpg"
              ></img>
            </div>
            <div className="order-2 col-span-4 py-0 mx-20 text-right px-7 lg:col-span-2 ">
              <h6 className="mb-2 pt-4 lg:pt-0  text-[#EAB308]">
                درباره رویداد
              </h6>
              <h1 className="mb-5 text-5xl font-bold">عنوان رویداد</h1>
              <p className="mb-1 ml-5 text-lg leading-loose text-gray-500">
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
          <div className="grid grid-cols-6 py-20 mx-auto">
            <div className="max-w-sm col-span-2 mx-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" aria-label="image">
                <img
                  className="rounded-t-lg"
                  src="https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    رویداد اول
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  بیشتر بخوانید
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm col-span-2 mx-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" aria-label="image">
                <img
                  className="rounded-t-lg"
                  src="https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    رویداد دوم
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  بیشتر
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm col-span-2 mx-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" aria-label="image">
                <img
                  className="rounded-t-lg"
                  src="https://technopolis-rebrand.imgix.net/Technopolis-Events/Zalen/Factory-of-the-future-1.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-2.1.1&ratio=1&w=2560&s=05afc004027c729fd7aa354613d3c1cf"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    رویداد سوم
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  ادامه
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
    <div>
      <EventList events={events} />
    </div>
>>>>>>> main
  )
}