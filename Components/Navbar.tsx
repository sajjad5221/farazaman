"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeSwitchButton from "./ThemeSwitchButton";


import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "ارتباط با ما", href: "/contact-us", current: false },
  { name: "رویدادها", href: "/events", current: false },
  { name: "فضای کار اشتراکی", href: "/workspace", current: false },
  { name: "استارت آپ های اجرا شده", href: "#startups", current: false },
  { name: "ثبت استارتاپ", href: "/startups", current: false },
  { name: "استخدام", href: "/hiring", current: false },
  { name: "خانه", href: "/", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className=" fixed top-0 left-0 right-0 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/80 z-20"
    >
      {({ open }: { open: any }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-row flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center md:pl-0">
                  <Link href="/">
                    <Image
                      className="block h-12 w-auto ml-4"
                      src="/static/images/Farazaman.png"
                      alt="Farazaman"
                      width={200}
                      height={200}
                      quality={100}
                      sizes="100vw"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex flex-row-reverse space-x-5 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-neutral-900 dark:text-neutral-400 first:ml-4"
                            : "text-neutral-900 dark:text-neutral-400 hover:underline first:ml-4",
                          "text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                      
                    ))}
                    <ThemeSwitchButton />
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-900 dark:text-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-neutral-900 dark:text-neutral-400"
                      : "text-neutral-900 dark:text-neutral-400",
                    "block py-4 text-base font-medium border-b border-neutral-200 dark:border-neutral-700"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
