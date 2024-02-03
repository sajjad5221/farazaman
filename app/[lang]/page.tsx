import Customers from '@/Components/home/Customers';
import Faq from '@/Components/home/Faqs';
import Feature from '@/Components/home/Feature';
import Banner from '@/Components/home/Banner';
import React, { Suspense } from 'react';
import ErrorBoundary from '@/Components/Boundaries/ErrorBoundry';
import Loading from './loading';
import Startups from '@/Components/home/Startups';
import Hires from '@/Components/home/Hires';
import Services from '@/Components/home/Services';
import ContactUs from '@/Components/home/ContactUs';
import { useTranslation } from '../i18n';
import { resources } from '@/types/i18n';
import FeatureContainer from '@/Components/home/FeatureContainer';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  // const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN

  // const feats: any = t('features', {returnObjects: true})

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <>
          <div className="flex flex-col">
            <Banner />
            {/* problem */}
            <Services />
            {/* TODO: create one component for all below components and use openModal inside that component */}
            {/* <Features title="فضای کار اشتراکی" /> */}
            {/* <HiringFeature title="جذب نیرو" /> */}
            {/* <InternshipFeature title="طرح پویش" /> */}
            {/* <StartupRegistration title="ثبت استارتاپ" /> */}
            {/* {index1.features.map((
              {title, slogan, firstText, secondText, points, experienceTitle, experienceText, buttonText, modalName} 
              : {title: string, slogan: string, firstText: string, secondText: string, points: Array<any>, experienceTitle: string, experienceText: string, buttonText: string, modalName: string}, index: number) => (
                <Feature key={index} title={title} slogan={slogan} firstText={firstText} secondText={secondText} points={points} experienceTitle={experienceTitle} experienceText={experienceText} buttonText={buttonText} modalName={modalName} />
            ))} */}
            <FeatureContainer />
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
