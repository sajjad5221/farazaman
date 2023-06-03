import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
const contents = [
  {
    title: "ویژگی اول",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز      ",
    features: ["توضیح 1", "توضیح 2", "توضیح 3"],
    image: "https://via.placeholder.com/150",
    order: false,
  },
  {
    title: "ویژگی دوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    features: ["اول", "دوم", "سوم"],
    image: "https://via.placeholder.com/150",
    order: true,
  },
  {
    title: "ویژگی سوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    features: ["اول", "دوم", "سوم"],
    image: "https://via.placeholder.com/150",
    order: false,
  },
];

export function Features() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-x-40 pt-16 pb-16">
        <h2 className="text-black text-4xl font-bold text-center dark:text-white">ویژگی ها</h2>
        <p className="text-gray-600 pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>

        {contents.map((content) => (
          <div
            key={content.title}
            className="grid grid-cols-1 items-center justify-items-center md:grid-cols-2 md:gap-x-16 lg:gap-x-28 text-yellow-500 dark:text-neutral-100"
          >
            <div
              className={`pt-8 md:pt-16 ${
                content.order ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p className="pt-6 pb-6 text-base text-gray-600 dark:text-neutral-400">
                {content.description}
              </p>

              <ul className="font-medium space-y-1 flex-1 text-gray-600">
                {content.features.map((feature) => (
                  <li key={feature} className="leading-6 flex">
                    <CheckIcon className="mt-2 w-3 h-3 text-amber-500 shrink-0" />
                    <span className="ml-3 dark:text-neutral-400">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`order-1 pt-8 md:pt-16 ${
                content.order ? "ml-0 2xl:-ml-40" : "mr-0 2xl:-mr-40"
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={content.image}
                  alt="Image description"
                  width={500}
                  height={500}
                  quality={100}
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
