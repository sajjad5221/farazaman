import React from 'react';
// import Circle from '../icons/Circle';
import Image from 'next/image';
import { Link } from 'react-scroll';

export default function ServiceCard({
  title,
  info,
  image,
  alt,
  goto,
}: {
  title: string;
  image: string;
  info: string;
  alt: string;
  goto: string;
}) {
  return (
    <div className=" bg-servicebg flex  my-6 rounded-l md: mx-auto w-[49%] rounded-xl overflow-hidden hover:shadow-2xl transition-all">
      <div className="w-[45%] h-full min-h-[14rem] relative">
        <Image
          src={image}
          alt={alt}
          layout='fill'
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-6/12 mx-auto flex flex-col justify-evenly tracking-wide">
        {/* <Circle /> */}
        <h5 className="text-serviceBg-primery font-bold pr-2 text-xl">{title}</h5>
        <p className='text-gray-800'>{info}</p>
        <div className='flex text-brand gap-3 items-center'>
          <Link to={goto}>مطالعه بیشتر
          </Link>
            <img src="/static/images/icon/left-arrow-2.svg" alt="" />

        </div>
      </div>
    </div>
  );
}
