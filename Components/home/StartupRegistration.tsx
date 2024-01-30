'use client';
import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
// import HiringModal from '../common/form/HiringModal';
import { useTranslation } from '@/app/i18n/client';
import { useLang } from 'stores/langStore';
// import InternshipModal from '../common/form/InternshipModal';
import StartupRegistrationModal from '../common/form/StartupRegistrationModal';
import Button from '../common/form/Button';

export default function StartupRegistration({ title }: { title: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const lang = useLang.getState().lang;

  const { t } = useTranslation(lang, 'mainPage');

  return (
    <section className="bg-gray-50 relative" id="startups">
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3 leading-10">
            {/* problem */}
            {/* {t('StartupRegistration', { returnObjects: true }).subTitle} */}
          </h2>
          <div>
            <p>
              {/* {t('StartupRegistration', { returnObjects: true }).text} */}
            </p>
            <ul className="list-disc mr-4">
              {/* problem */}

              {/* <li>{t('StartupRegistrationItems', { returnObjects: true }).text1}</li>
              <li>{t('StartupRegistrationItems', { returnObjects: true }).text2}</li>
              <li>{t('StartupRegistrationItems', { returnObjects: true }).text3}</li> */}
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
                {/* problem */}

                {/* {t('Start-upRegistration', { returnObjects: true }).title} */}
              </h2>
            </div>
            <p>
              {/* problem */}
              {/* {t('Start-upRegistration', { returnObjects: true }).text} */}
            </p>
          </div>
        </div>
      </div>
      <div className="w-auto mx-auto flex justify-center">
        {/* <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">{t('StartupForm', { returnObjects: true }).text}</p>
          <ArrowLeft color="#fff" />
        </button> */}
        <Button
          func="guide"
          onChange={openModal}
          text="فرم ثبت استارت‌آپ"
          submit={false}
        />
      </div>
      <StartupRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
