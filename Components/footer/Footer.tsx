import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const column1 = [
  { name: 'استخدام', href: '/hiring' },
  { name: 'ثبت استارتاپ', href: '/startups' },
  { name: 'فضای کار اشتراکی', href: '/workspace' },
  { name: 'رویدادها', href: '/events' },
];

const column2 = [
  // {
  //   location: 'خیابان یانگ، تورنتو، کانادا',
  //   phoneNumber: '+1 (416) 557-7622',
  //   dir: 'ltr',
  // },
  {
    location: 'تهران، میدان تجریش ، خیابان غلام جعفری، پلاک 27',
    phoneNumber: '021-88030167',
    dir: 'rtl',
  },
  {
    location: 'اصفهان، سعادت‌آباد، ساختمان طلا، طبقه پنجم',
    phoneNumber: '0313-1311914',
    dir: 'rtl',
  },
];

export default function Footer() {
  return (
    <footer className="bg-servicebg rounded justify-center mb-20">
      <div className="flex p-8  lg:pr-28 lg:p-16 flex-col-reverse lg:flex-row ">
        <div className=" w-full lg:w-3/12">
          <h3 className="pt-12 text-black pb-4 lg:pt-20">فرازمان</h3>
          <div className='flex flex-wrap flex-row lg:flex-col '>
            {column1.map((item) => (
              <Link key={item.name} href={item.href} className="my-4 w-1/2 lg:w-full text-gray-600 flex items-start">
                <img className='w-1.5 ml-4 mt-2 ' src="/static/images/icon/left-arrow.svg" alt="" />{item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className=" w-full lg:w-5/12 text-gray-600">
          <h3 className="text-black pt-12 pb-4 lg:pt-20">ارتباط با ما</h3>
          {column2.map((item , index) => (
            <div key={index} className=" flex flex-col items-start w-full lg:w-10/12 py-1 mb-2">
              <p key={item.location} className="flex mb-5">
              <img className='w-5 ml-3 ' src="/static/images/icon/map-maker.svg" alt="" />{item.location}
              </p>
              <p className="flex" dir={item.dir}>
              <img className='w-5 ml-3 ' src="/static/images/icon/call.svg" alt="" />{item.phoneNumber}
              </p>
            </div>
          ))}
        </div>

        <div className=" w-full lg:w-4/12 flex flex-col justify-center">
          <Link href="/">
            <Image
              className="w-auto h-12"
              src="/static/images/Farazaman.png"
              alt="Farazaman"
              width={500}
              height={500}
              quality={75}
              sizes="100vw"
            />
          </Link>
          <p className=" w-full pt-4 text-neutral-500 text-justify">
          در<span className='text-brand'> شتابدهنده فرازمان</span> بر این باوریم که آینده شغلی در دستان جوانان است. ما با ارائه منابع مالی، زیرساخت‌های فنی و دسترسی به شبکه‌های جهانی، به دانشجویان کمک می‌کنیم تا ایده‌های خود را به واقعیت تبدیل کنند. علاوه بر این، ما روی شبکه‌سازی مؤثر و افزایش مهارت‌ها از طریق آموزش و منتورینگ برای دانشجویان و استارت‌آپ‌ها تمرکز زیادی داریم.
          </p>
        </div>
      </div>


      <div className="flex justify-between p-10 px-2 text-center text-neutral-500 border-t sm:px-6 lg:px-8 border-neutral-300 mx-12" >
        <p className="text-sm">
          کلیه حقوق برای{' '}
          <Link href={'/'} className="text-yellow-500">
            فرازمان
          </Link>{' '}
          محفوظ است.
        </p>
        <p className="text-sm hidden md:inline">
          Copyright &copy; {new Date().getFullYear()}{' '}
          <Link className="text-yellow-500" href={'/'}>
            {' '}
            Farazaman&trade;
          </Link>{' '}
          , All rights reserved.
        </p>
      </div>
    </footer>
  );
}
