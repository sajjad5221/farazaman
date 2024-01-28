import Image from 'next/image';
import ArrowLeft from '../icons/ArrowLeft';

const startupsList = [
  {
    id: 1,
    title: 'لاندا تریپ',
    logo: '/static/images/startups/Landa-trip-logo.png',
    description:
      'لاندا تریپ یک شرکت نوآور است که دوره های آموزشی مفیدی را در سفر برای همه افراد علاقه مند و کسب و کار ایجاد، ترویج و اجرا می کند.',
    link: 'https://www.diaco.ir/',
  },
  {
    id: 2,
    title: 'دیاکو سنتر',
    logo: '/static/images/startups/diaco_logo.png',
    description:
      'لاندا تریپ یک شرکت نوآور است که دوره های آموزشی مفیدی را در سفر برای همه افراد علاقه مند و کسب و کار ایجاد، ترویج و اجرا می کند.',
    link: 'https://landatrip.com/',
  },
  {
    id: 3,
    title: 'ویژن رفت',
    logo: '/static/images/startups/Layer_1.png',
    description:
      'لاندا تریپ یک شرکت نوآور است که دوره های آموزشی مفیدی را در سفر برای همه افراد علاقه مند و کسب و کار ایجاد، ترویج و اجرا می کند.',
    link: 'https://landatrip.com/',
  },
];

import React from 'react';

function Startup() {
  return startupsList.map((item) => (
    <div className="custom-shadow w-[21rem] md:w-[22rem] custom-s rounded-md py-3 h-[21rem] flex flex-col justify-between">
      <div className="flex justify-center">
        <Image src={item.logo} width={120} height={120} alt={item.title} />
      </div>
      <div>
        <h3 className="text-brand text-xl mr-4">{item.title}</h3>
        <div className="w-full h-[0.8px] bg-gray-400 my-2"></div>
        <div className="px-4">
          <p className="text-sm">{item.description}</p>
          <button className="flex px-5 py-2 mt-8 text-brand rounded-md border border-brand hover:text-white hover:bg-brand">
            <p>مشاهده وب سایت</p>
            <ArrowLeft color="#D6A001" />
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Startup;
