'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import SectionHeader from '../common/SectionHeader';

// Define an array of FAQ items, each with a question and response
const faqitems = [
  {
    question: 'مدت زمان قرارداد طرح پویش چقدر است؟',
    response:
      'طبق هماهنگی‌هایی که با دانشگاه انجام شده، مدت زمان این طرح به مدت 240 ساعت است.',
  },
  {
    question: 'ساعت کاری به چه‌ صورت برنامه ریزی شده است؟',
    response:
      'طبق هماهنگی‌هایی که با دانشگاه انجام شده، مدت زمان این طرح به مدت 240 ساعت است.',
  },
  {
    question: 'آیا داشتن ایده برای یک استارت‌آپ کافی است؟',
    response:
      'باوجود اینکه اولین قدم در تاسیس و شروع یک استارت‌آپ، ایده اولیه آن است؛ اما شرط کافی نیست. داشتن MVP (حداقل محصول قابل ارائه) شرط کافی برای شروع یک استارت‌آپ است.',
  },
  {
    question: 'فضای کار اشتراکی چه امکاناتی را فراهم می کند؟',
    response:
      'شرکت ما فضای مناسب رفاهی و امکانات فنی ازجمله اینترنت آزاد و نامحدود، نوشیدنی و غیره را برای شما فراهم می کند.',
  },
];

// Define the Faq component
export default function Faq() {
  // Render the component
  return (
    <section className="bg-gray-50 px-4 py-16" id="faq">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <SectionHeader title="سوالات متداول" />
        <div className="my-8 mx-auto">
          {/* TODO: create FaqCard.tsx */}
          {faqitems.map(({ question, response }) => (
            <div className="pr-4 py-2 my-3 text-black shadow-md rounded-md">
              <p className="text-brand">{question}</p>
              <p className="py-3">{response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
