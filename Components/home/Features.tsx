'use client';

import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
// import ArrowLeft from '../icons/ArrowLeft';


import Button from '../common/form/Button';

import CoSpaceModal from '../../Components/common/form/CoSpaceModal';
import HiringModal from '../../Components/common/form/HiringModal';
import InternshipModal from '../../Components/common/form/InternshipModal';
import StartupRegistrationModal from '../../Components/common/form/StartupRegistrationModal';

export default function Features(
  { title, slogan, firstText, secondText, points, experienceTitle, experienceText, buttonText, modalName } 
  : { title: string, slogan: string, firstText: string, secondText: string, points: string[], experienceTitle: string, experienceText: string, buttonText: string, modalName: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(modalName)

  const openModal = () => {
    setIsModalOpen(true);
    console.log(modalName)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const lang = useLang.getState().lang;

  // const { t } = useTranslation(lang, 'mainPage');

  // console.log(t('startupAcademyService', { returnObjects: true }).subTitle);

  const [modal, setModal] = useState("")

  return (
    <section className="bg-gray-50  relative" id="workspace">
      <div className="px-8 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />

        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3 leading-10">
          {slogan}

          </h2>
          <p className="">
          {firstText}
          </p>
          <div>
            <p>
            {secondText}
            </p>
            {points && points.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>

        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
              {experienceTitle}
              </h2>
            </div>
            <p>
            {experienceText}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">

        <Button func='guide' onChange={openModal} text={buttonText} submit={false} />
      </div>
      {/* <CoSpaceModal isOpen={isModalOpen} closeModal={closeModal} /> */}
      {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
      {((): any => {
        switch (modalName) {
          case "coSpace":
            console.log('done2')
            return (
              <CoSpaceModal isOpen={isModalOpen} closeModal={closeModal} />
            )
            break;
          case "hiring":
            return(
              <HiringModal isOpen={isModalOpen} closeModal={closeModal} />
            )
            break;
          case "internship":
            return(
              <InternshipModal isOpen={isModalOpen} closeModal={closeModal} />
            )
            break;
          case "startupRegistration":
            return(
              <StartupRegistrationModal isOpen={isModalOpen} closeModal={closeModal} />
            )
            break;
        
          default:
            break;
        }
      })()}
    </section>
  );
}
