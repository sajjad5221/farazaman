import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-around">
        <Image
          draggable="false"
          src={"https://flowbite.com/docs/images/logo.svg"}
          alt="logo"
          width={200}
          height={200}
        />
        <p>sample paragraph</p>
      </div>
      <button
        type="button"
        className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        سرمایه گذاری روی استارت آپ شما
      </button>
    </div>
  );
}
