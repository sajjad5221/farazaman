import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.3047437285542!2d51.667246131748406!3d32.62261962506355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc37b19cd0de21%3A0xd88964e49361525!2sTala%20complex!5e0!3m2!1sen!2s!4v1684834056278!5m2!1sen!2s" width="600" height="450" loading="lazy"></iframe>


          <ul className="flex flex-col items-start mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="my-1">
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                درباره ما
              </a>
            </li>
            <li className="my-1">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                آدرس
              </a>
            </li>
            <li className="my-1">
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                شماره تلفن
              </a>
            </li>
            <li className="my-1">
              <a href="#" className="hover:underline">
                ایمیل
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://farazamin.com/"
          className="flex items-center justify-center mb-4 sm:mb-0"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="farazamin Logo"
            width={50}
            height={50}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Farazamin
          </span>
        </a>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://farazamin.com/" className="hover:underline">
            Farazamin™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
