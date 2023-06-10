import React from "react";

export default function EventSlug() {
  return (
    <>
      <div className="mt-16"></div>
      <section className="bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-3">
            <div className="order-2 col-span-3 p-4 m-5 bg-white border border-gray-200 rounded-lg shadow sm:m-16 shrink-0 dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:mx-10 md:p-8 lg:col-span-1">
              <form className="space-y-8" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  در رویداد ما ثبت نام کنید.
                </h5>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="سهیل حیدری"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    آدرس ایمیل
                  </label>
                  <input
                    dir="ltr"
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="email@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="tel"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    شماره موبایل
                  </label>
                  <input
                    dir="ltr"
                    type="tel"
                    name="tel"
                    id="tel"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="09139754682"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded focus:ring-3 bg-gray-50 focus:ring-yellow-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-yellow-600 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      مرا به خاطر بسپار
                    </label>
                  </div>
                  <a
                    href="#"
                    className="mr-auto text-sm text-[#EAB308] hover:underline dark:text-[#EAB308]"
                  >
                    گذرواژه خود را فراموش کرده اید؟
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#EAB308] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-[#EAB308] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  ثبت نام
                </button>
              </form>
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
          <div className="grid grid-cols-4 mb-10 ">
            <div className="order-1 col-span-4 mx-auto md:px-10 lg:col-span-2">
              <img
                alt="image"
                src="https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/group-of-people-photo-in-room.jpg"
              ></img>
            </div>
            <div className="order-2 col-span-4 py-0 text-right text-gray-900 dark:text-gray-100 lg:mx-16 px-7 lg:col-span-2 ">
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
          <div className="grid grid-cols-6 py-20 mx-auto">
            <div className="max-w-sm col-span-6 mx-10 my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
            <div className="max-w-sm col-span-6 mx-10 my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
            <div className="max-w-sm col-span-6 mx-10 my-5 bg-white border border-gray-200 rounded-lg shadow lg:col-span-2 md:col-span-3 dark:bg-gray-800 dark:border-gray-700">
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
    </>
  );
}
