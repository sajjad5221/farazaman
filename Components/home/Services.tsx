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
    <div className="bg-gray-50 md:pt-36">
      {/* Page header */}
      <div className='flex '>
        <div className='w-6/12 pl-6'>
          <img className=' object-cover w-full' src="/static/images/Home/services/picture.png" alt="" />
        </div>
        <div className=" w-6/12 pt-12 mx-auto ">
          <h2 className="text-4xl text-brand pb-14 font-bold">{index1.mainPageTitle}</h2>
          <div>
            <p className="text-black py-2 text-2xl leading-[3rem] pb-8">
              {/* {index1.mainPage.mainPageSubTitle} */}
              {index1.mainPageSubTitle}
            </p>
            <p className=" pb-16 text-lg lg:max-w-[77rem] text-gray-500 text-justify  leading-[2rem]">
              {/* {index1.mainPage.mainPageParagraph} */}
              {index1.mainPageParagraph}
            </p>
          </div>
            <div className='flex w-full justify-evenly font-semibold text-xl text-servicebg-primery p-6 py-14 bg-servicebg rounded-lg'>
            <div  className='flex items-center border-l-2 border-servicebg-light pl-10'>
              <img className=' w-8 ml-3' src="/static/images/icon/money-1.svg" alt="icon" />
              <p>سرمایه گذاری</p>
            </div>
            <div className='flex items-center border-l-2 border-servicebg-light pl-10'>
              <img className=' w-8 ml-3' src="/static/images/icon/user-employee.svg" alt="icon" />
              <p>کارآفرینی</p>
            </div>
            <div className='flex items-center'>
              <img className=' w-8 ml-3' src="/static/images/icon/idea.svg" alt="icon" />
              <p>استارتاپ</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      {/* flex flex-col md:flex-row max-w-7xl justify-between mx-auto items-center */}
      <div className="flex flex-wrap md:mx-auto pt-36">
        {index1.ServiceData.map(
          (
            {title,image,alt,info,goto}: { title: string; image: string; alt: string; info: string; goto: string;},
            index: number
          ) => (
            <ServiceCard key={index} title={title} image={image} alt={alt}  info={info} goto={goto} />
          )
        )}
      </div>
    </div>
  );
}
