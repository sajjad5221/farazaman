'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import FormModal from '../common/form/FormModal';
import InternshipModal from '../common/form/InternshipModal';

export default function InternshipFeature({ title }: { title: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 z-0 relative" id="events">
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3 leading-10">
            طرح پویش فرصتی را برای دانشجویان به‌وجود آورده تا به‌صورت مستقیم با
            صنعت آشنا شده و در محیط کاری واقعی تجربه لازم را به‌دست آورند.
          </h2>
          <div>
            <p>
              هدف طرح پویش دانشگاه آزاد اسلامی، آشنایی دانشجویان با محیط کار
              واقعی و اشتغال همزمان آنها با تحصیل طراحی شده است؛ این طرح ارتباط
              دانشگاه با صنعت را ارتقا و دانشجویان را در زمینه آموزش مهارت‌های
              عملی تقویت می‌کند.
            </p>
            <ul className="list-disc mr-4">
              <li>پرداخت کمک هزینه تحصیلی دانشجویان</li>
              <li>فراهم شدن فرصت مناسب جهت استخدام</li>
              <li>آشنایی با محیط کار واقعی و چالش‌های آن</li>
              <li>ارتباط با منتورهای باتجربه در زمینه‌های مختلف</li>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">جذب دانشجویان</h2>
            </div>
            <p>
              شرکت فرازمان شرایطی را برای جذب دانشجویان علاقه‌مند و متخصص را
              فراهم کرده تا بتوانند در کنار منتورهای متخصص علاقه‌مندی‌های خود را
              پرورش دهند.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">فرم ثبت نام طرح پویش</p>
          <ArrowLeft color="#fff" />
        </button>
      </div>
      <InternshipModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
