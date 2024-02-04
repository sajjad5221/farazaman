import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h1 className="text-4xl text-black font-bold dark:text-neutral-100">
          فضای کار اشتراکی
        </h1>
        <p className="pt-6 pb-6 text-base text-zinc-600 max-w-2xl text-center m-auto dark:text-neutral-400">
          تجربه کار در فضای کار اشتراکی فرازمان
        </p>
      </div>
      <div className="flex-col mx-10">
        <div className="flex flex-col lg:flex-row-reverse">
          <Image
            className="lg:w-1/3 my-5 lg:mr-5"
            src="https://via.placeholder.com/150"
            width={500}
            height={500}
            alt="workspace"
          />
          <p className="lg:w-2/3 lg:mt-5">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
            <div className="mt-6">
              <Link href="/workspace/form/">
                <button className="bg-yellow-500 text-white text-base rounded-full px-4 p-2 font-medium">
                  ثبت نام فضای کار اشتراکی
                </button>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
