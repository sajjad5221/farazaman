import Image from "next/image";
import Link from "next/link";
import React from "react";
export function Hero() {
  return (
      <div className="px-4 pt-16 bg-gray-50 dark:bg-neutral-900 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 md:grid-cols-2">
          <div className="justify-center pt-6 text-center md:pt-32 sm:justify-start sm:text-start">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              شتابدهنده استارت آپ <br />
              <span className="font-extrabold text-yellow-500">فرازمان</span>
            </h1>
            <p className="w-auto pt-6 text-base text-zinc-600 sm:w-10/12 md:w-10/12 dark:text-neutral-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start text-black">
              {/* <div>
                <Link href="#services">
                  <button className="p-2 px-4 text-base font-medium text-white bg-gray-700 rounded-full dark:text-white">
                    فرازمان چیست؟
                  </button>
                </Link>
              </div> */}

              {/* <div>
                <Link href="/startups">
                  <button className="p-2 px-4 text-base font-medium text-white bg-yellow-500 rounded-full">
                    شروع کنید
                  </button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="flex items-center mt-12">
            <Image
              src="/static/images/presentation.jpg"
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

