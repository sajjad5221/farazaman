import Customers from '@/Components/home/Customers';
import Faq from '@/Components/home/Faqs';
import Features from '@/Components/home/Features';
import Banner from '@/Components/home/Banner';
import React, { Suspense } from 'react';
import ErrorBoundary from '@/Components/Boundaries/ErrorBoundry';
import Loading from './loading';
import Startups from '@/Components/home/Startups';
import Hires from '@/Components/home/Hires';
import Services from '@/Components/home/Services';
import ContactUs from '@/Components/home/ContactUs';
import { useTranslation } from '../i18n';

export default async function Home({
  params: { lang }
}: {
  params: { lang: string };
}) {

  const { t } = await useTranslation(lang, 'mainPage')

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <>
          <div className="flex flex-col mt-16">
            <Banner />
            {/* problem */}
            <Services />
            {/* TODO: create one component for all below components and use openModal inside that component */}
            {/* <Features title="فضای کار اشتراکی" /> */}
            {/* // <HiringFeature title="جذب نیرو" /> */}
            {/* <InternshipFeature title="طرح پویش" /> */}
            {/* <StartupRegistration title="ثبت استارتاپ" /> */}
            {t('features', {returnObjects: true}).map((
              {title, slogan, firstText, secondText, points, experienceTitle, experienceText, buttonText, modalName} 
              : {title: string, slogan: string, firstText: string, secondText: string, points: string, experienceTitle: string, experienceText: string, buttonText: string, modalName: string}) => (
                <Features title={title} slogan={slogan} firstText={firstText} secondText={secondText} points={points} experienceTitle={experienceTitle} experienceText={experienceText} buttonText={buttonText} modalName={modalName} />
              ))}
            <Hires />
            <Startups />
            <Customers />
            <Faq />
            <ContactUs />
          </div>
        </>
      </Suspense>
    </ErrorBoundary>
  );
}
