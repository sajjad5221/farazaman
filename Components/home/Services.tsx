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
          <div className='flex w-full justify-evenly font-semibold text-sm lg:text-xl text-servicebg-primery p-2 py-10 bg-servicebg rounded-lg md:hidden mb-7'>
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
          <img className=' object-cover  rounded-2xl h-auto md:h-[70%] w-full' src="/static/images/Home/services/change-img.png" alt="" />
        </div>
        <div className="w-full md:w-6/12 pt-4 mx-auto ">
          <h2 className=" text-2xl lg:text-4xl text-brand pb-5 lg:pb-10 font-bold">{index1.mainPageTitle}</h2>
          <div>
            <p className="text-black py-2 text-base leading-[2rem] lg:text-xl lg:leading-[3rem] pb-8">
              {/* {index1.mainPage.mainPageSubTitle} */}
              {index1.mainPageSubTitle}
            </p>
            <p className=" pb-16 text-sm lg:text-lg lg:max-w-[77rem] text-gray-500 text-justify leading-[1.5rem] lg:leading-[2rem]">
              {/* {index1.mainPage.mainPageParagraph} */}
              {index1.mainPageParagraph}
            </p>
          </div>
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
      <div className="flex flex-wrap mx-auto pt-0 md:pt-36">
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
