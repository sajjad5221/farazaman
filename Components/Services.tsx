import Image from "next/image";
import React from "react";
const services = [
  {
    title: "ثبت استارتاپ",
    description:
      "شرکت ما با افتخار در فرآیند ثبت استارتاپ‌ها همراهی می‌کند؛ حمایتی قوی برای رشد و پیشرفت شما.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "فضای کار اشتراکی",
    description:
      "فراهم کردن جایی برای الهام‌بخشی، همکاری و ارتقاء تجارت؛ با تسهیلات و محیطی آماده برای رشد و خلاقیت.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "رویدادها",
    description:
      "   فرصتی برای ارتباط، یادگیری و شبکه‌سازی؛ تجربه‌های منحصربه‌فرد برای ارتقاء شغلی و توسعه کسب و کار.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "استخدام",
    description:
      "شرایطی برای همکاری با تیم پویا و متخصص، رشد حرفه‌ای و شکوفایی در محیطی الهام‌بخش و پراحساس.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "طرح پویش",
    description:
      "امکانی برای دانشجویان جهت ایجاد ارتباط مستقیم با صنعت، کسب تجربه‌های عملی و توسعه مهارت‌های شغلی در محیط کاری واقعی.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
  {
    title: "ارتباط با ما",
    description:
      "همواره آماده شنیدن نظرات، سوالات و درخواست‌های شما هستیم. لطفاً با ما تماس بگیرید، منتظر ارتباط با شما هستیم.",
    image: "https://via.placeholder.com/150",
    alt: "Service description",
  },
];
export function Services() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          فرازمان چیست؟
        </h2>

        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto text-gray-600 dark:text-neutral-400">
          شرکت شتاب دهنده با هدف ایده‌پردازی و پشتیبانی استارتاپ‌ها بهبود جامعه
          کارآفرینی را تسهیل می‌کند.{" "}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        {services.map(({ title, description, image, alt }) => (
          <div key={title}>
            <div className="h-32 w-32 flex justify-center mx-auto">
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
            <h2 className="font-bold py-3 text-lg text-center text-neutral-900 dark:text-neutral-100">
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
