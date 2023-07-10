import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define an array of customer objects
const customers = [
  {
    name: "دیاکو",
    href: "#",
    src: "/static/images/Home/logo-customers/434b.png",
    alt: "Google play logo",
  },
  {
    name: "فروغ روشن",
    href: "#",
    src: "/static/images/Home/logo-customers/438b.png",
    alt: "Github logo",
  },
  {
    name: "آکادمی لاندا",
    href: "#",
    src: "/static/images/Home/logo-customers/IMG.PNG",
    alt: "Docker logo",
  },
  {
    name: "IR Immigration",
    href: "#",
    src: "/static/images/Home/logo-customers/436c.png",
    alt: "Python logo",
  },
  {
    name: "لاندا هلدینگ",
    href: "#",
    src: "/static/images/Home/logo-customers/Landa-main-logo2.PNG",
    alt: "Slack logo",
  },
  {
    name: "طلوع روشن",
    href: "#",
    src: "/static/images/Home/logo-customers/tolu4.jpg",
    alt: "Discord logo",
  },
];

// Define the Customers component
export default function Customers() {
  return (
    <div
      className="w-full px-4 pt-16 pb-16 bg-gray-50 dark:bg-neutral-900"
      id="faq"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-black dark:text-white">
        شرکای تجاری{" "}
      </h2>
      {/* TODO: create CustomerCard.tsx */}
      {/* Customer grid */}
      <div className="w-full max-w-4xl mx-auto bg-transparent dark:bg-transparent">
        <div className="grid items-center justify-center grid-cols-2 text-center sm:grid-cols-3 md:grid-cols-6">
          {/* Map over the array of customers and create a CustomerCard for each */}
          {customers.map((customer) => (
            <Link key={customer.name} href={customer.href} target="_blank">
              <Image
                className="justify-center mx-auto mt-6 mb-1 text-center transition rounded-full hover:scale-110"
                src={customer.src}
                alt={customer.alt}
                width={80}
                height={80}
                quality={75}
                sizes="100vw"
              />
              <span className="text-gray-600 dark:text-neutral">
                {customer.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
