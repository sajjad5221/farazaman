import Image from 'next/image';
import React from 'react';
export default function Banner() {
  return (
    <div id='Home'>
        <Image
          src="/static/images/Home/estekhdam-baner.png"
          alt="Banner Image"
          width={1920}
          height={1080}
        />
    </div>
  );
}
