
import Image from 'next/image';
import ArrowLeft from '../icons/ArrowLeft';
import { useTranslation } from "app/i18n";
import { useLang } from "stores/langStore";
import React from 'react';


async function Startup() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, "mainPage");
  const companies = t("OurStartup", { returnObjects: true });
  // console.log("hires: ",hires)
  return companies.map((item) => (
    <div className="custom-shadow w-[21rem] md:w-[22rem] custom-s rounded-md py-3 h-[21rem] flex flex-col justify-between">
      <div className="flex justify-center">
        <Image src={item.image} width={120} height={120} alt={item.title} />
      </div>
      <div>
        <h3 className="text-brand text-xl mr-4">{item.title}</h3>
        <div className="w-full h-[0.8px] bg-gray-400 my-2"></div>
        <div className="px-4">
          <p className="text-sm">{item.description}</p>
          <button className="flex px-5 py-2 mt-8 text-brand rounded-md border border-brand hover:text-white hover:bg-brand">
            <p> {t('View-website', { returnObjects: true }).text}</p>
            <ArrowLeft color="#D6A001" />
          </button>
        </div>
      </div>
    </div>
  ));
}

export default Startup;