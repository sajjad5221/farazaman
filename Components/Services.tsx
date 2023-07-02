import Image from "next/image";
import React from "react";
const services = [
  {
    title: "سرویس 1",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "/static/images/seminar/world-map.jpg",
    alt: "Service description",
  },
  {
    title: "سرویس 2",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "سرویس 3",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "سرویس 4",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "سرویس 5",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "سرویس 6",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          فرازمان چیست؟
        </h2>

        <p className="max-w-2xl pt-6 pb-6 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>

      <div className="grid px-4 pt-8 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="flex justify-center w-32 h-32 mx-auto">
              <Image
                src={image}
                alt={alt}
                width={130}
                height={130}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            <h2 className="py-3 text-lg font-bold text-center text-neutral-900 dark:neutral-100">
              {title}
            </h2>
            <p className="text-base text-center text-gray-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
