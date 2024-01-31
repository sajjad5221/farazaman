'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import FormModal from '../common/form/CoSpaceModal';
import HiringModal from '../common/form/HiringModal';
import Button from '../common/form/Button';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function HiringFeature({ title }: { title: string }) {
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
    <section className="bg-gray-50 relative" id="hiring">
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-[0.5rem] leading-10">
            {t('Recruitment', { returnObjects: true }).subTitle}
          </h2>
          <p className="">{t('Recruitment', { returnObjects: true }).text}</p>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
                {t('RecruitmentInAccelerator', { returnObjects: true }).title}
              </h2>
            </div>
            <p>{t('RecruitmentInAccelerator', { returnObjects: true }).text}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={() => openModal()}
        >
          <p className="pl-2 text-white">{t('RecruitmentForm', { returnObjects: true }).text} </p>
          <ArrowLeft color="#fff" />
        </button> */}
        <Button
          func="guide"
          onChange={openModal}
          text="فرم استخدام در فرازمان"
          submit={false}
        />
      </div>
      <HiringModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
