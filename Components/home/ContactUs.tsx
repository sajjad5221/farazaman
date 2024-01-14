import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ArrowLeft from '../icons/ArrowLeft';

function ContactUs() {
  return (
    <section className="bg-gray-50 px-4 pt-8 pb-16">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeader title="ارتباط با ما" />
        <div className="flex flex-col justify-between gap-8 md:flex-row my-8">
          <input
            className="md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300"
            type="text"
            placeholder="شماره تماس"
          />
          <input
            className="md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300"
            type="text"
            placeholder="نام و نام خانوادگی"
          />
          <input
            className="md:w-2/6 px-4 py-4 text-black rounded-md shadow-sm placeholder:text-gray-300"
            type="text"
            placeholder="آدرس الکترونیکی"
          />
        </div>
        <div></div>
        <div className="flex justify-center">
          <button className="flex text-sm bg-brand px-5 py-2 justify-center items-center rounded-lg">
            <p>ارسال پیام</p>
            <ArrowLeft color="#fff" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
