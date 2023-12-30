import Image from 'next/image';
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useLang } from '@/stores/langStore';
import { useTranslation } from './../../app/i18n';

export default async function Services() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, 'mainPage');
  // const a: any = t('ServiceData', { returnObjects: true })[0];
  // console.log(t('ServiceData', { returnObjects: true }));

  const servicesData: Array<{ title: string; image: string; alt: string }> = t(
    'ServiceData',
    { returnObjects: true }
  );

  console.log(servicesData);

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 px-10 md:px-6" id="services">
      {/* Page header */}
      <div className="pt-16 mx-auto max-w-7xl order">
        <h2 className="text-4xl text-brand dark:text-white">
          شتابدهنده فرازمان
        </h2>
        <div className="lg:px-3">
          <p className="text-black py-2 text-2xl leading-[3.1rem]">
            شرکت فرازمان با ارائه منابع مالی، زیرساخت‌های فنی و دسترسی به
            شبکه‌های جهانی، به دانشجویان کمک می‌کند تا ایده‌های خود را به واقعیت
            تبدیل کنند.
          </p>
          <p className="pb-6 text-base lg:w-[77rem] text-gray-600 dark:text-neutral-400 leading-[3.1rem]">
            ما به عنوان بخشی از جامعه آموزش عالی، متعهد به حمایت و پرورش
            دانشجویان و جوانان در مراکز رشد و شتابدهنده هستیم. در شتابدهنده
            فرازمان بر این باوریم که آینده شغلی در دستان جوانان است. ما با ارائه
            منابع مالی، زیرساخت‌های فنی و دسترسی به شبکه‌های جهانی، به دانشجویان
            کمک می‌کنیم تا ایده‌های خود را به واقعیت تبدیل کنند. علاوه بر این،
            ما روی شبکه‌سازی مؤثر و افزایش مهارت‌ها از طریق آموزش و منتورینگ
            برای دانشجویان و استارت‌آپ‌ها تمرکز زیادی داریم. شما به راحتی
            می‌توانید با کمک تیم ما که متشکل از افراد باتجربه داخلی و بین‌المللی
            است مهارت‌های لازم در دنیای تجارت امروز را کسب کنید.
          </p>
        </div>
      </div>
      {/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      {servicesData.map(
        (
          { title, image, alt }: { title: string; image: string; alt: string },
          index: number
        ) => (
          <div></div>
        )
      )}
    </div>
  );
}
