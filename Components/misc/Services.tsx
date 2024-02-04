import Image from "next/image";
import React from "react";

// Array of service objects
const services = [
  {
    title: "ثبت استارتاپ",
    description:
      "شرکت ما با افتخار در فرآیند ثبت استارتاپ‌ها همراهی می‌کند؛ حمایتی قوی برای رشد و پیشرفت شما.",
    image: "/static/images/Home/services/present2-square.jpg",
    alt: "Service description",
  },
  {
    title: "فضای کار اشتراکی",
    description:
      "فراهم کردن جایی برای الهام‌بخشی، همکاری و ارتقاء تجارت؛ با تسهیلات و محیطی آماده برای رشد و خلاقیت.",
    image: "/static/images/Home/services/discuss2.jpg",
    alt: "Service description",
  },
  {
    title: "رویدادها",
    description:
      "   فرصتی برای ارتباط، یادگیری و شبکه‌سازی؛ تجربه‌های منحصربه‌فرد برای ارتقاء شغلی و توسعه کسب و کار.",
    image: "/static/images/Home/services/discuss.jpg",
    alt: "Service description",
  },
  {
    title: "استخدام",
    description:
      "شرایطی برای همکاری با تیم پویا و متخصص، رشد حرفه‌ای و شکوفایی در محیطی الهام‌بخش و پراحساس.",
    image: "/static/images/Home/services/pexels-fauxels-3184465.jpg",
    alt: "Service description",
  },
  {
    title: "طرح پویش",
    description:
      "امکانی برای دانشجویان جهت ایجاد ارتباط مستقیم با صنعت، کسب تجربه‌های عملی و توسعه مهارت‌های شغلی در محیط کاری واقعی.",
    image: "/static/images/Home/services/laptop1.jpg",
    alt: "Service description",
  },
  {
    title: "ارتباط با ما",
    description:
      "همواره آماده شنیدن نظرات، سوالات و درخواست‌های شما هستیم. لطفاً با ما تماس بگیرید، منتظر ارتباط با شما هستیم.",
    image: "/static/images/Home/services/contact.jpg",
    alt: "Service description",
  },
];

export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      {/* Page header */}
      <div className="px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          فرازمان چیست؟
        </h2>
        <p className="max-w-2xl pt-6 pb-6 m-auto text-base text-center text-gray-600 dark:text-neutral-400">
          شرکت شتاب دهنده با هدف ایده‌پردازی و پشتیبانی استارتاپ‌ها بهبود جامعه
          کارآفرینی را تسهیل می‌کند.{" "}
        </p>
      </div>
{/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      <div className="grid px-4 pt-8 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            {/* Service image */}
            <div className="flex justify-center mx-auto h-35 w-35 ">
              <Image
                src={image}
                alt={alt}
                width={150}
                height={150}
                quality={75}
                sizes="100vw"
                priority
              />
            </div>
            {/* Service title */}
            <h2 className="py-3 text-lg font-bold text-center text-neutral-900 dark:text-neutral-100">
              {title}
            </h2>
            {/* Service description */}
            <p className="text-base text-center text-gray-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}