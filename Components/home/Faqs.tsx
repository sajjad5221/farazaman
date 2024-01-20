"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

// Define an array of FAQ items, each with a question and response
const faqitems = [
  {
    question: "مدت زمان قرارداد طرح پویش چقدر است؟",
    response:
      "به مدت 240 ساعت در طول یک ترم",
  },
  {
    question: "ساعت کاری به چه صورت می باشد؟",
    response:
      "منعطف و وابسته به شرایط تحصیلی دانشجو",
  },
  {
    question: "آیا فقط داشتن ایده برای استارتاپ کافی است؟",
    response:
      "خیر. نیاز به MVP (حداقل محصول قابل ارائه) دارد.",
  },
  {
    question: "فضای کار اشتراکی چه امکاناتی را فراهم می کند؟",
    response:
      "شرکت ما فضای مناسب و امکانات فنی و رفاهی (اینترنت آزاد و نامحدود، نوشیدنی و ...) را برای شما فراهم می کند",
  },
];

// Define the Faq component
export default async function Faq() {
  const lang = useLang.getState().lang;
  const { t } =await useTranslation(lang,'mainPage');
  // Render the component
  return (
    <div
      className="bg-gray-50 dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      {/* Faq title */}
      <h2 className="text-black text-4xl font-bold text-center dark:text-white">{t('Frequently Questions' , {returnObjects: true}).title}</h2>

      {/* Faq items */}
      <div className="bg-transparent mx-auto w-full max-w-2xl rounded-2xl dark:bg-transparent">
        {/* TODO: create FaqCard.tsx */}
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            {/* Disclosure component for each faq item */}
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  {/* Disclosure button */}
                  <Disclosure.Button
                    className={`${open
                        ? "bg-yellow-500 dark:bg-neutral-800 hover:bg-yellow-500 rounded-b-none"
                        : ""
                      } flex w-full justify-between rounded-lg bg-yellow-500 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${open ? "rotate-180 transition-transform" : ""
                        } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>

                  {/* Disclosure panel */}
                  <Disclosure.Panel
                    className={`${open
                        ? "text-gray-50 px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                      } bg-yellow-500 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}