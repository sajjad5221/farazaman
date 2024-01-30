import Image from 'next/image';
import React from 'react';
export default function Banner() {
  return (
    <div id="Home">
      <Image
        src="/static/images/Home/farazaman-baner-lg.png"
        alt="Banner Image"
        className="hidden sm:block"
        width={1920}
        height={1080}
      />
      <Image
        src="/static/images/Home/farazaman-banner-sm.png"
        alt="Banner"
        className="block sm:hidden"
        width={550}
        height={390}
      />
    </div>
  );
}
