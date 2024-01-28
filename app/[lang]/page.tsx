import Customers from '@/Components/home/Customers';
import Faq from '@/Components/home/Faqs';
import { Features } from '@/Components/home/Features';
import Banner from '@/Components/home/Banner';
import React, { Suspense } from 'react';
import ErrorBoundary from '@/Components/Boundaries/ErrorBoundry';
import Loading from '../loading';
import Startups from '@/Components/home/Startups';
import Hires from '@/Components/home/Hires';
import { useTranslation } from '../i18n';

// import Services from '@/Components/home/Services';
export default async function Home({
  params: { lang }
}:{
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, 'mainPage');
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <main>
          <div className="flex flex-col mt-16">
            <Banner />
            {/* <Services /> */}
            <Features title={t('workspaceTitle')} />.
            <Hires />
            <Faq />
            <Startups />
            <Customers />
            <div className="border-t border-neutral-800 mx-16 "></div>
          </div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
