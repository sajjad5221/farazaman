import Image from "next/image";
import Link from "next/link";
import React from "react";
export function Hero() {
  return (

      <div className="bg-gray-50 dark:bg-neutral-900 px-4">
        <div className="max-w-7xl mx-auto py-8 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
          <div className="pt-6 md:pt-32 justify-center text-center sm:justify-start sm:text-start">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              شتابدهنده استارت آپ <br />
              <span className="text-yellow-500 font-extrabold">فرازمان</span>
            </h1>
            <p className="pt-6 text-base text-zinc-600 w-auto sm:w-10/12 md:w-10/12 dark:text-neutral-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
            <div className="flex flex-auto pt-10 gap-2 min-w-[350px] justify-center sm:justify-start text-black">
              <div>
                <Link href="#services">
                  <button className="text-white dark:text-white bg-gray-700 text-base rounded-full px-4 p-2 font-medium">
                    فرازمین چیست؟
                  </button>
                </Link>
              </div>

              <div>
                <Link href="/startups">
                  <button className="bg-yellow-500 text-white text-base rounded-full px-4 p-2 font-medium">
                    شروع کنید
                  </button>
                </Link>
              </div>
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
