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
import HiringFeature from '@/Components/home/HiringFeature';
import InternshipFeature from '@/Components/home/InternshipFeature';
import StartupRegistration from '@/Components/home/StartupRegistration';
import { useTranslation } from '../i18n';
import SmoothScroll from './../../Components/common/SmothScroll';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <>
          <div className="flex flex-col">
            <Banner />
            {/* problem */}
            <Services />
            {/* TODO: create one component for all below components and use openModal inside that component */}
            <Features title="فضای کار اشتراکی" />
            <HiringFeature title="جذب نیرو" />
            <InternshipFeature title="طرح پویش" />
            <StartupRegistration title="ثبت استارتاپ" />
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
