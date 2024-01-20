import React from 'react';
import Circle from '../icons/Circle';
import Image from 'next/image';

export default  function ServiceCard({
  title,
  image,
  alt,
}: {
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="shadow-lg flex flex-col items-center px-1 py-4 m-4 rounded-lg w-36 md:w-52 justify-center mx-auto">
      <div className="w-full h-32 md:w-40 md:h-40">
        <Image
          src={image}
          alt={alt}
          width={180}
          height={160}
          className="rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] rounded-tl-[32px]"
        />
      </div>
      <div className="flex items-center pt-2">
        <Circle />
        <p className="text-black pr-2 text-base">{title}</p>
      </div>
    </div>
  );
}
