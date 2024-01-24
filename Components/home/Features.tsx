'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import FormModal from '../common/FormModal';

export default function Features({ title }: { title: string }) {
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
            ما در شرکت فرازمان محیطی تعاملی و اشتراکی را جهت ایجاد همکاری، رشد و
            خلاقیت دانشجویان فراهم کرده‌ایم.
          </h2>
          <p className="">
            امروزه افراد می‌توانند در فضای تعاملی و اشتراکی در کنار یکدیگر
            فعالیت خود را انجام دهند. این محیط‌های اشتراکی در اصطلاح Coworking
            Space نامیده می‌شوند.
          </p>
          <div>
            <p>
              از مزایای حضور در فضای کار تعاملی می‌توان به افزایش بهره‌وری،
              دسترسی آسان به امکانات محلی و ایجاد شبکه ارتباطی با سایر افراد
              اشاره کرد :
            </p>
            <ul className="list-disc mr-4">
              <li>
                وجود فضاهای کار اشتراکی در مناطق مهم با دسترسی آسان به امکانات
                شهری و هزینه‌های بسیار پایین
              </li>
              <li>
                کار در یک محیط پویا با شبکه‌ای از مشتریان بالقوه، انواع شرکای
                تجاری، منتورها و افراد با‌استعداد درحوزه های مختلف
              </li>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
                تجربه در فضای کار اشتراکی فرازمان
              </h2>
            </div>
            <p>
              امروزه افراد می‌توانند در فضای کار اشتراکی در کنار یکدیگر فعالیت
              خود را انجام دهند. از مزایای حضور در فضای کار تعاملی می‌توان به
              افزایش بهره‌وری، دسترسی آسان به امکانات محلی و ایجاد شبکه ارتباطی
              با سایر افراد اشاره کرد
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">فرم ثبت نام در فضای کار اشتراکی</p>
          <ArrowLeft color="#fff" />
        </button>
      </div>
      <FormModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
