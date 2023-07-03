import Image from "next/image";
import Link from "next/link";
import React from "react";
const customers = [
  {
    name: "دیاکو",
    href: "https://play.google.com/",
    src: "/static/images/Home/logo-customers/Diaco2.png",
    alt: "Google play logo",
  },
  {
    name: "فروغ روشن",
    href: "https://github.com/",
    src: "/static/images/Home/logo-customers/fouroq.png",
    alt: "Github logo",
  },
  {
    name: "لاندا مدرسه استارتاپ ",
    href: "https://www.docker.com/",
    src: "/static/images/Home/logo-customers/IMG.PNG",
    alt: "Docker logo",
  },
  {
    name: "IR Immigration",
    href: "https://www.python.org/",
    src: "/static/images/Home/logo-customers/irimmig.png",
    alt: "Python logo",
  },
  {
    name: "لاندا هلدینگ",
    href: "https://slack.com/",
    src: "/static/images/Home/logo-customers/Landa-main-logo2.PNG",
    alt: "Slack logo",
  },
  {
    name: "طلوع روشن",
    href: "https://discord.com/",
    src: "/static/images/Home/logo-customers/tolu4.jpg",
    alt: "Discord logo",
  },
];

export default function Customers() {
  return (
    <div
      className="w-full px-4 pt-16 pb-16 bg-gray-50 dark:bg-neutral-900"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center text-black dark:text-white">شرکای تجاری </h2>

      <p className="max-w-2xl pt-6 pb-8 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <div className="w-full max-w-4xl mx-auto bg-transparent dark:bg-transparent">
        <div className="grid items-center justify-center grid-cols-2 text-center sm:grid-cols-3 md:grid-cols-6">
          {customers.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              <Image
                className="justify-center mx-auto mt-6 mb-1 text-center transition rounded-full hover:scale-110"
                src={item.src}
                alt={item.alt}
                width={80}
                height={80}
                quality={75}
                sizes="100vw"
              />
              <span className="text-gray-600 dark:text-neutral">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
