import { Hero } from "@/Components/Hero";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="py-24 px-12 bg-white dark:bg-neutral-900">
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2">
          <h1>فضای کار اشتراکی</h1>
          <p className="text-neutral-500 md:text-sm pt-4 w-auto sm:w-6/12 md:w-6/12 lg:w-8/12">
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
          </p>
        </div>
        <Image
          className=""
          src={"/static/images/img.jpg"}
          alt="image"
          width={500}
          height={500}
        />
      </div>
      <div>Form Goes Here.</div>
    </div>
  );
}
