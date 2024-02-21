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
    <div className=" bg-servicebg flex flex-col md:flex-row my-6 mx-auto w-[45%] md:w-[49%] rounded-xl overflow-hidden ">
      <div className="w-full  md:w-[45%] md:h-full">
        <Image
          src={image}
          alt={alt}
          width={200}
          height={200}
          className="rounded-xl w-full md:h-full object-cover"
        />
      </div>
      <div className="w-full md:w-6/12 mx-auto flex flex-col h-[17rem] sm:h-[14rem] md:justify-evenly tracking-wide p-3 relative">
        {/* <Circle /> */}
        <h5 className=" text-servicebg-primery font-bold md:pr-2 text-base xl:text-xl mb-3 md:mb-0">{title}</h5>
        <p className='text-gray-800 text-sm xl:text-base'>{info}</p>
        {/* <div className='flex text-brand gap-3 items-center absolute md:relative bottom-4'>
          <Link className='text-sm xl:text-base' to={goto}>مطالعه بیشتر
          </Link>
            <img src="/static/images/icon/left-arrow-2.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
}
