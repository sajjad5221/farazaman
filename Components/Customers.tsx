import Image from "next/image";
import Link from "next/link";
import React from "react";
const customers = [
  {
    name: "google-play",
    href: "https://play.google.com/",
    src: "https://via.placeholder.com/150",
    alt: "Google play logo",
  },
  {
    name: "github",
    href: "https://github.com/",
    src: "https://via.placeholder.com/150",
    alt: "Github logo",
  },
  {
    name: "docker",
    href: "https://www.docker.com/",
    src: "https://via.placeholder.com/150",
    alt: "Docker logo",
  },
  {
    name: "python",
    href: "https://www.python.org/",
    src: "https://via.placeholder.com/150",
    alt: "Python logo",
  },
  {
    name: "slack",
    href: "https://slack.com/",
    src: "https://via.placeholder.com/150",
    alt: "Slack logo",
  },
  {
    name: "discord",
    href: "https://discord.com/",
    src: "https://via.placeholder.com/150",
    alt: "Discord logo",
  },
];

export default function Customers() {
  return (
    <div
      className="bg-gray-50 dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="font-bold text-black dark:text-white text-4xl font-bold text-center">شرکای تجاری </h2>

      <p className="text-gray-600 pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
      </p>
      <div className="bg-transparent mx-auto w-full max-w-4xl dark:bg-transparent">
        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {customers.map((item) => (
            <Link key={item.name} href={item.href} target="_blank">
              <Image
                className="h-10 w-auto mt-6 justify-center text-center mx-auto hover:scale-110 transition rounded-full mb-1"
                src={item.src}
                alt={item.alt}
                width={150}
                height={150}
                quality={75}
                sizes="100vw"
              />
              <span className="text-gray-600 dark:text-neutral">نام شرکت</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
