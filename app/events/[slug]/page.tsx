import EventDetails from "@/Components/events/EventDetails";
import EventForm from "@/Components/events/EventForm";
import React from "react";
export default function EventSlug(context: any) {
  const eventId = context.params?.slug as number | undefined;
  if (eventId === undefined) {
    throw new Error("Event ID is undefined");
  }
  return (
  <div>
      <div className="mt-16"></div>
      <section className="bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-3">
            <div className="order-2 col-span-3 p-4 m-5 bg-white border border-gray-200 rounded-lg shadow sm:m-16 shrink-0 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:mx-10 md:p-8 lg:col-span-1">
              <EventForm eventId={eventId}/>
            </div>
            <div className="order-1 col-span-3 px-4 py-24 text-center lg:col-span-2 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                لورم ایپسوم متن ساختگی
              </h1>
              {/* توضیحات رویداد */}
              <p className="mb-1 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              </p>
              {/* تاریخ و محل برگزاری رویداد */}
              <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-white rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
                >
                  اطلاعات بیشتر...
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 dark:bg-neutral-900">
        <div className="container py-20 mx-auto">
          <EventDetails eventId={eventId}/>

          <div className="py-3 mx-10">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">سایر رویدادها</h3>
          </div>
          <hr />
          <div className="grid grid-cols-6 gap-6 pt-5">
            <div className="max-w-sm col-span-6 mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex px-3 items-center py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#EAB308] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  <p className="px-1">بیشتر بخوانید</p>
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
            <div className="max-w-sm col-span-6 mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#EAB308] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  <p className="px-1">بیشتر</p>
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
            <div className="max-w-sm col-span-6 mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
                <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                  و مجله لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                  چاپ
                </p>
                <a
                  href="#"
                  className="inline-flex px-3 items-center py-2 text-sm font-medium text-center text-white bg-[#EAB308] rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#EAB308] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  <p className="px-1">ادامه</p>
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
    </div>
  );
}
