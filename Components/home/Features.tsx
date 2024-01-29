'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import CoSpaceModal from '../common/form/CoSpaceModal';
import Button from '../common/form/Button';
import { useTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';

export default function Features({ title  }: { title: string }) {
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
    <section className="bg-gray-50 z-0 relative" id="workspace">
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        {/* TODO: use i18n */}
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3 leading-10">
          {t('startupAcademyService', { returnObjects: true }).subTitle}

          </h2>
          <p className="">
          {t('startupAcademyService', { returnObjects: true }).text1}
          </p>
          <div>
            <p>
            {t('startupAcademyService', { returnObjects: true }).text2}
            </p>
            <ul className="list-disc mr-4">
              <li>
              {t('startupAcademyService', { returnObjects: true }).textup}
              </li>
              <li>
              {t('startupAcademyService', { returnObjects: true }).textdown}
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
              {t('ExperienceSpace', { returnObjects: true }).title}
              </h2>
            </div>
            <p>
            {t('ExperienceSpace', { returnObjects: true }).text}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/* <button
          className="bg-brand py-2 px-4 flex text-sm rounded-md"
          onClick={openModal}
        >
          <p className="pl-2 text-white">{t('Register-Form', { returnObjects: true }).text}</p>
          <ArrowLeft color="#fff" />
        </button> */}
        <Button func='guide' onChange={openModal} text='فرم ثبت نام در فضای کار اشتراکی' submit={false} />
      </div>
<CoSpaceModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}
