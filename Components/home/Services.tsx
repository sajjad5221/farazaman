'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useLang } from '@/stores/langStore';
import { useTranslation } from './../../app/i18n/client';
import { resources } from '@/types/i18n';

export default function Services() {
  const lang = useLang().lang;

  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN

  const { t } = useTranslation(lang, 'mainPage');

  // const a: any = t('ServiceData', { returnObjects: true });
  // (t('ServiceData', { returnObjects: true }));

  // console.log(t('ServiceData', { returnObjects: true }));

  // t('ServiceData', { returnObjects: true });

  // use returnObjects: true for non strings



  // it says type of the object we are reading from i18n is string ! i turned it to 'any' temporary .
  // const servicesData: any = t('ServiceData', {returnObjects: true})

  // console.log(servicesData);



  // (servicesData);

  return (
    <div className="bg-gray-50 px-10 md:p-6" id="services">
      {/* Page header */}
      <div className="pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <h2 className="text-4xl text-brand  ">{index1.mainPageSubTitle}</h2>
        <div>
          <p className="text-black py-2 text-2xl leading-[3.1rem]">
            {/* {index1.mainPage.mainPageSubTitle} */}
            {index1.mainPageSubTitle}
          </p>
          <p className="pb-6 text-base lg:max-w-[77rem] text-gray-600   leading-[3.1rem]">
            {/* {index1.mainPage.mainPageParagraph} */}
            {index1.mainPageParagraph}
          </p>
        </div>
      </div>
      {/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      {/* flex flex-col md:flex-row max-w-7xl justify-between mx-auto items-center */}
      <div className="grid grid-cols-2 md:grid-cols-4 justify-between mx-auto max-w-7xl">
        {index1.ServiceData.map(
          (
            {
              title,
              image,
              alt,
            }: { title: string; image: string; alt: string },
            index: number
          ) => (
            <ServiceCard key={index} title={title} image={image} alt={alt} />
          )
        )}
      </div>
    </div>
  );
}
