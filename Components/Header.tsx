import React from "react";
import HeaderItem from "./HeaderItem";
import Image from "next/image";

export default function Header() {
  const headerItems = [
{itemName: "خانه", href:"/"},
{itemName: "استخدام", href: "/hiring"},
{itemName: "استارت آپ های اجرا شده",
href: "/startups"
},
{itemName: "فضای کار اشتراکی",
href:"/"},
{itemName:"شتابدهی و سرمایه گزاری",
href:"/"}
  ];
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap flex-row-reverse justify-start items-center mx-auto max-w-screen-xl">
          <a href="https://farazamin.com" className="flex items-center">
            <Image
              width={50}
              height={50}
              src={"https://flowbite.com/docs/images/logo.svg"}
              className="mr-3 h-6 sm:h-9"
              alt="farazamin Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Farazamin
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col-reverse mt-4 font-medium lg:flex-row-reverse lg:space-x-8 lg:mt-0">
              {headerItems.map((headerItem) => (
                <HeaderItem key={headerItem.itemName} itemName={headerItem.itemName} href={headerItem.href}/>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
