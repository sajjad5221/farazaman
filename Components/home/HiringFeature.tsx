'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import FormModal from '../common/FormModal';
import HiringModal from '../common/HiringModal';

export default function HiringFeature({ title }: { title: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 z-0 relative" id="features">
      <div className="w-80 h-80 absolute -z-10 left-12 top-96 sm:left-36 sm:top-32 featureBackground"></div>
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3 leading-10">
            ما به عنوان بخشی از جامعه آموزش عالی، متعهد به حمایت و پرورش
            دانشجویان و جوانان در مراکز رشد و شتابدهنده هستیم.
          </h2>
          <p className="">
            فرازمان با تمرکز روی نوآوری و ایده‌های خلاقانه در کنار بهره‌گیری از
            یک تیم باتجربه و متخصص و ارائه برنامه‌های آموزشی منحصربه‌فرد،
            استارت‌آپ‌ها را در حوزه‌های مختلف پشتیبانی و هدایت می‌کند.
          </p>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
                استخدام در شتابدهنده فرازمان
              </h2>
            </div>
            <p>
              در حال حاضر به دنبال جذب نیروهای مستعد و گسترش تیم خود هستیم. شما
              به راحتی می‌توانید با کمک تیم ما که متشکل از افراد باتجربه داخلی و
              بین‌المللی است مهارت‌های لازم در دنیای تجارت امروز را کسب کنید. پس
              اگر به یادگیری، همکاری و خلاقیت علاقه‌مند هستید و دنبال یک تیم
              پویا می‌گردید، لطفاً فرم استخدام زیر را پر کنید
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">فرم استخدام در فرازمان</p>
          <ArrowLeft color="#fff" />
        </button>
      </div>
      <HiringModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
