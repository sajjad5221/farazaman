import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
const contents = [
  {
    title: "طرح پویش",
    description:
      "یکی از دغدغه های دانشگاه های کشور ایجاد اشتغال برای دانشجویان است که برای رسیدن به این هدف بایستی شرایط اشتغال به گونه ای باشد که آموزش، پژوهش و فناوری کاربردی باشد. هدف از برگزاری طرح پویش دانشگاه آزاد آشنایی دانشجویان با محیط کار و صنعت است، به طوری که دانشجو صرفا در محیط دانشگاه نباشد و به صورت تجربی نیز در محیط کار اداری و صنعتی نیز حضور داشته باشد. طرح پویش دانشگاه آزاد به منظور توام کردن آموزش و مهارت و افزایش سطح کارآمدی دانشجویان و به عنوان الگویی کاربردی از ارتباط دانشگاه با صنعت و جامعه طراحی گردیده است. بر اساس این طرح دانشجویان می توانند همزمان با تحصیل دانشگاه در نهادها و صنایع مختلف به کار مشغول شوند.",
    features: [
      "کمک هزینه تحصیلی",
      "قرار گرفتن در اولویت استخدام",
      "آشنایی با محیط کار همزمان با تحصیل",
    ],
    image: "https://via.placeholder.com/150",
    order: false,
  },
  {
    title: "فضای کار اشتراکی",
    description:
      "Coworking Space ها فضاهای بزرگی هستند که افراد می توانند به عنوان محل کار از آنجا استفاده کنند آنها میز و قسمت مخصوص به خود را دارند و از امکانات استفاده می کنند آنها فضای مورد نیاز خود را اجاره می کنند اما مسلما بدون پول پیش یا اجاره های آنچنانی.افراد در کنار یکدیگر و دیگر گروه های مستقر مشغول به فعالیت می شوند برای همین به آنها فضار کار اشتراکی می گویند و خود این نکته موجب افزایش بهروری می شود",
    features: [
      "بعضی فضاهای اشتراکی در مناطق کسب و کاری مهم با دسترسی آسان به حمل و نقل،کافه ها،مراکز خرید و باشگاهها هستند.در مناطقی که اگر افراد بخواهند دفتر کار مستقل داشته باشند،اجاره ها بسیار بالاست.",
      "برای فریلنسرهایی که مجبورند به تنهایی در خانه یا در یک کافه پرسر‌و‌صدا کار کنند و احساس انزوا می کنند،فضاهای اشتراکی یک محیط کاری راحت و پربازده اند که موجب ارتباط با افراد همفکر می شود.",
      "پیوستن شرکت های بزرگ به  فضاهای اشتراکی باعث می شود کارمندان شادی و بهره وری بیشتری داشته باشند و در یک محیط پویا با شبکه ای از مشتریان بالقوه،شرکا،منتورها و افراد با‌استعداد درحوزه های مختلف در ارتباط باشند.",
    ],
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
        <h2 className="text-black text-4xl font-bold text-center dark:text-white">
          ویژگی ها
        </h2>
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
