import React from "react";

export default function EventSlug() {
  return (
    <>
      <div className="mt-16"></div>
      <section className="bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-3">
            <div className="order-2 col-span-3 p-4 mx-3 my-8 bg-white border border-gray-200 rounded-lg shadow shrink-0 dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:mx-10 md:p-8 lg:col-span-1">
              <form className="space-y-8" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                  در رویداد ما ثبت نام کنید.
                </h5>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    نام کاربری
                  </label>
                  <input
                    dir="ltr"
                    type="text"
                    name="text"
                    id="text"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Ali Mohammadi"
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
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    رمز عبور
                  </label>
                  <input
                    dir="ltr"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
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
                    className="mr-auto text-sm text-[#EAB308] hover:underline dark:text-yellow-500"
                  >
                    گذرواژه خود را فراموش کرده اید؟
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#EAB308] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
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
      <div>
        <div className="">
        <div className="container py-10 mx-auto ">
          <div className="grid grid-cols-4">
          <div className="order-1 col-span-4 mx-auto lg:ps-10 lg:pe-5 lg:col-span-2">
              <div className="">
                  <img className="" src="https://websitedemos.net/event-management-04/wp-content/uploads/sites/638/2020/07/group-of-people-photo-in-room.jpg"></img>
              </div>
            </div>
            <div className="order-2 col-span-4 py-0 mx-10 text-right px-7 lg:col-span-2 ">
              <h6 className="mb-1 md:pt-5 text-[#EAB308]">
                  درباره رویداد
              </h6>
              <h2 className="mb-4 lg:text-2xl">
                لورم ایپسوم متن ساختگی
              </h2>
              <p className="mb-1">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                 و استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله   
                 .استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است
                 
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </>
  );
}
