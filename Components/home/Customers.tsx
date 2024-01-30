import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useTranslation } from "app/i18n";
import { useLang } from "stores/langStore";

// Define an array of customer objects
const customers = [
  {
    id: 1,
    name: 'لاندا هلدینگ',
    href: '#',
    src: '/static/images/Home/logo-customers/Landa-main-logo2.PNG',
    alt: 'Slack logo',
  },
  {
    id: 2,
    name: 'لاندا آکادمی',
    href: '#',
    src: '/static/images/Home/logo-customers/IMG.PNG',
    alt: 'Docker logo',
  },
  {
    id: 3,
    name: 'طلوع روشن',
    href: '#',
    src: '/static/images/Home/logo-customers/tolu4.jpg',
    alt: 'Discord logo',
  },
  {
    id: 4,
    name: 'IR Immigration',
    href: '#',
    src: '/static/images/Home/logo-customers/irimmig.png',
    alt: 'Python logo',
  },
  {
    id: 5,
    name: 'فروغ روشن',
    href: '#',
    src: '/static/images/Home/logo-customers/fouroq.png',
    alt: 'Github logo',
  },
];

// Define the Customers component
export default async function Customers() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, "mainPage");
  const customers = t("BusinessPartners", { returnObjects: true });
  return (
    <section className="px-4 pt-16 pb-3 bg-gray-50" id="faq">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeader title="شرکای تجاری" />
        {/* Heading */}
        {/* TODO: create CustomerCard.tsx */}
        {/* Customer grid */}
        <div className="w-100 grid mt-8 items-center gap-4 justify-between grid-cols-1 text-center xs:grid-cols-2 md:grid-cols-5">
          {/* Map over the array of customers and create a CustomerCard for each */}
          {customers.map((BusinessPartners) => (
            <div className="shadow-md rounded-xl pb-3" key={BusinessPartners.id}>
              <Image
                className="justify-center mx-auto mt-6 mb-1 text-center transition rounded-full hover:scale-110"
                src={BusinessPartners.image}
                width={80}
                height={80}
                quality={75}
                sizes="100vw"
              />
              <span className="text-gray-600">{BusinessPartners.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}