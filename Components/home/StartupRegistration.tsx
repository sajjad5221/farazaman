'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import FormModal from '../common/form/CoSpaceModal';
import StartupRegistrationModal from '../common/form/StartupRegistrationModal';

export default function StartupRegistration({ title }: { title: string }) {
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
            شرکت فرازمان با افتخار شما را در مسیر ثبت استارت‌آپ و رشد و گسترش آن
            همراهی می‌کند.
          </h2>
          <div>
            <p>
              امروزه کسب‌وکارهای نوپا و استارت‌آپ‌ها از محبوبیت بسیار بالایی
              برخوردار هستند. اولین و مهمترین قدم برای رشد هر استات‌آپی، جذب
              سرمایه است. برای حفظ مالکیت و منافع اصلی بنیانگذاران، انتخاب
              سرمایه‌گذار مناسب اهمیت بالایی دارد.
            </p>
            <ul className="list-disc mr-4">
              <li>شناسایی رقبا</li>
              <li>مشاوره با افراد با تجربه</li>
              <li>تجربه دانشجویان از همکاری با ما</li>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
                ثبت استارت‌آپ در شتابدهنده فرازمان
              </h2>
            </div>
            <p>
              درصورت تمایل جهت همکاری با شرکت فرازمان، لطفا با تکمیل فرم زیر،
              اطلاعات استارتاپ خود را با ما به اشتراک بگذارید.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">فرم ثبت استارت‌آپ</p>
          <ArrowLeft color="#fff" />
        </button>
      </div>
      <StartupRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
