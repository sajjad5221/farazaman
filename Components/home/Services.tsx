'use client'
import Image from 'next/image';
import React from 'react';
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
    <div className="bg-gray-50 pt-20 md:pt-36">
      {/* Page header */}
      <div className='flex flex-col md:flex-row'>
        <div className=' w-full md:w-6/12 p-0 md:pl-6'>
          <div className='flex w-full justify-evenly font-semibold text-sm lg:text-xl text-servicebg-primery p-2 py-6 md:py-10 bg-servicebg rounded-lg md:hidden mb-7'>
            <div  className='flex items-center'>
              <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/money-1.svg" alt="icon" />
              <p>سرمایه گذاری</p>
            </div>
            <div className='w-[1px] h-8 rounded-full bg-yellow-950'></div>
            <div className='flex items-center'>
              <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/user-employee.svg" alt="icon" />
              <p>کارآفرینی</p>
            </div>
            <div className='w-[1px] h-8 rounded-full bg-yellow-950'></div>
            <div className='flex items-center'>
              <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/idea.svg" alt="icon" />
              <p>استارتاپ</p>
            </div>
          </div>
          <img className=' object-cover  rounded-2xl h-80 md:h-[35rem] w-full' src="/static/images/service/banner.png" alt="" />
        </div>
        <div className="w-full md:w-6/12 pt-4 mx-auto  md:flex flex-col justify-between">
          <h2 className="mt-2 md:mt-0 text-2xl lg:text-4xl text-brand pb-5 font-bold">{index1.mainPageTitle}</h2>
            <p className="text-black text-base mb-2 md:mb-0 leading-[1.8rem] lg:text-[18px] lg:leading-[2.2rem] ">
              {/* {index1.mainPage.mainPageSubTitle} */}
              {index1.mainPageSubTitle}
            </p>
            <p className="text-sm lg:text-[15px] lg:max-w-[77rem] text-gray-500 text-justify leading-[1.5rem] lg:leading-[25px]">
              {/* {index1.mainPage.mainPageParagraph} */}
              {index1.mainPageParagraph}
            </p>
            <div className='w-full justify-evenly font-semibold text-sm lg:text-xl text-servicebg-primery p-2 py-10 bg-servicebg rounded-lg hidden md:flex'>
              <div  className='flex items-center'>
                <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/money-1.svg" alt="icon" />
                <p>سرمایه گذاری</p>
              </div>
              <div className='w-[1px] h-8 rounded-full bg-yellow-950'></div>
              <div className='flex items-center'>
                <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/user-employee.svg" alt="icon" />
                <p>کارآفرینی</p>
              </div>
              <div className='w-[1px] h-8 rounded-full bg-yellow-950'></div>
              <div className='flex items-center'>
                <img className='w-6 lg:w-8 ml-2' src="/static/images/icon/idea.svg" alt="icon" />
                <p>استارتاپ</p>
              </div>
          </div>
        </div>
        
      </div>
      {/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      {/* flex flex-col md:flex-row max-w-7xl justify-between mx-auto items-center */}
      <div className="flex flex-wrap justify-between mt-10 md:mt-24">
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
