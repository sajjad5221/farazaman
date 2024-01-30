'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useTranslation } from "app/i18n/client";
import { useLang } from "stores/langStore";
import { CustomTypeOptions } from 'i18next';
import { Trans } from 'react-i18next';
import { resources } from '@/types/i18n';
// import { translations, LocaleTranslations } from '@/types/i18next';

// Define an array of customer objects
// const customers = [
//   {
//     id: 1,
//     name: 'لاندا هلدینگ',
//     href: '#',
//     src: '/static/images/Home/logo-customers/Landa-main-logo2.PNG',
//     alt: 'Slack logo',
//   },
//   {
//     id: 2,
//     name: 'لاندا آکادمی',
//     href: '#',
//     src: '/static/images/Home/logo-customers/IMG.PNG',
//     alt: 'Docker logo',
//   },
//   {
//     id: 3,
//     name: 'طلوع روشن',
//     href: '#',
//     src: '/static/images/Home/logo-customers/tolu4.jpg',
//     alt: 'Discord logo',
//   },
//   {
//     id: 4,
//     name: 'IR Immigration',
//     href: '#',
//     src: '/static/images/Home/logo-customers/irimmig.png',
//     alt: 'Python logo',
//   },
//   {
//     id: 5,
//     name: 'فروغ روشن',
//     href: '#',
//     src: '/static/images/Home/logo-customers/fouroq.png',
//     alt: 'Github logo',
//   },
// ];

// Define the Customers component
export default function Customers() {

  const lang = useLang().lang

  // console.log(lang);

  const index = lang === "fa" ? resources.fa : resources.en

  // const { t } = useTranslation(lang, "mainPage");

  console.log(resources.fa.mainPage.customers)

  // const customers: Array<{ id: number, name: string, href: string, src: string, alt: string }> = t("customers", { returnObjects: true });
  // console.log(typeof(t("aaaa", { returnObjects: true })))

  // const customers: resources.fa.mainPage = t("customers", { returnObjects: true })

  
  return (
    <section className="px-4 pt-16 pb-3 bg-gray-50" id="faq">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeader title="شرکای تجاری" />
        {/* Heading */}
        {/* TODO: create CustomerCard.tsx */}
        {/* Customer grid */}
        <div className="w-100 grid mt-8 items-center gap-4 justify-between grid-cols-1 text-center xs:grid-cols-2 md:grid-cols-5">
          {/* Map over the array of customers and create a CustomerCard for each */}
          {index.mainPage.customers.map(({ id, name, href, src, alt } : { id: number, name: string, href: string, src: string, alt: string }) => (
            <div className="shadow-md rounded-xl pb-3" key={id}>
              <Image
                className="justify-center mx-auto mt-6 mb-1 text-center transition rounded-full hover:scale-110"
                src={src}
                alt={alt}
                width={80}
                height={80}
                quality={75}
                sizes="100vw"
              />
              <span className="text-gray-600">{name}</span>
            </div>
          ))}
          {/* <Trans
            t={t}
            components={[
              <>
                {resources.fa.mainPage.customers.map((
                  { id, name, href, src, alt } : { id: number, name: string, href: string, src: string, alt: string }
                ) => (
                  <div className="shadow-md rounded-xl pb-3" key={id}>
                  <Image
                    className="justify-center mx-auto mt-6 mb-1 text-center transition rounded-full hover:scale-110"
                    src={src}
                    alt={alt}
                    width={80}
                    height={80}
                    quality={75}
                    sizes="100vw"
                  />
                  <span className="text-gray-600">{name}</span>
                </div>
                ))}
              </>
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
}