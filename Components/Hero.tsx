import Link from "next/link";
import Image from "next/image";
import React from "react";
export function Hero() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900 px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            شتابدهنده استارت آپ <br />
            <span className="text-yellow-500 font-extrabold">فرازمان</span>
          </h1>
          <p className="pt-6 text-base text-zinc-600 w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
            شرکت شتاب دهنده ما استارتاپ‌های نوپا را در حوزه‌های مختلف پشتیبانی
            می‌کند. با تمرکز بر نوآوری و ایده‌های پرسرعت، هدف ما بهبود جامعه
            کارآفرینی است. با تیم متخصص و برنامه‌های آموزشی منحصربه‌فرد، شرکت‌ها
            را به موفقیت و پیشرفت هدایت می‌کنیم.
            <br></br>
            ما در شرکتمان به دنبال استعدادهای جدید هستیم. با افتخار اعلام
            می‌کنیم که در حال حاضر <b>در حال استخدام (طرح پویش) هستیم</b> و در
            نظر داریم تیممان را با افراد متخصص و متعهد توسعه دهیم. ما به دنبال
            افرادی هستیم که علاقه‌مند به یادگیری، همکاری و خلاقیت هستند. اگر شما
            به دنبال فرصتی برای پیوستن به یک تیم پویا و پرشور هستید، ما منتظر
            شما هستیم. برای اطلاعات بیشتر و ارسال رزومه خود، لطفا فرم استخدام را
            پر کنید.
          </p>
          <div className="flex justify-center mt-3  sm:w-10/12 md:w-10/12">
            <button
              type="button"
              className="text-white flex justify-center basis-1/2	rounded px-5 py-2 text-base font-medium text-center bg-yellow-500 border border-yellow-500 focus:outline-none hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-700  mr-2 mb-2 dark:bg-yellow-800 dark:text-white dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-600 dark:focus:ring-yellow-700"
            >
              استخدام
            </button>
          </div>
          <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start text-black">
            {/* <div>
                <Link href="#services">
                  <button className="text-white dark:text-white bg-gray-700 text-base rounded-full px-4 p-2 font-medium">
                    فرازمان چیست؟
                  </button>
                </Link>
              </div> */}

            {/* <div>
                <Link href="/startups">
                  <button className="bg-yellow-500 text-white text-base rounded-full px-4 p-2 font-medium">
                    شروع کنید
                  </button>
                </Link>
              </div> */}
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Image
            src="https://via.placeholder.com/150"
            alt="Image hero description"
            width={700}
            height={700}
            quality={100}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}