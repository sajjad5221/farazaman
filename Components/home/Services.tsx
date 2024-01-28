import Image from "next/image";
import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useLang } from "@/stores/langStore";
import { useTranslation } from "./../../app/i18n";

export default async function Services() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, "mainPage");
  // const a: any = t('ServiceData', { returnObjects: true })[0];
  // (t('ServiceData', { returnObjects: true }));

  console.log(t('ServiceData', {returnObjects: true}));

  t('ServiceData', {returnObjects: true})

  // use returnObjects: true for non strings


  const servicesData: Array<{ title: string; image: string; alt: string }> = t('ServiceData', {returnObjects: true})



  // (servicesData);

  return (
    <div className="bg-gray-50 px-10 md:p-6" id="services">
      {/* Page header */}
      <div className="pt-16 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <h2 className="text-4xl text-brand  ">{t('mainPageTitle')}</h2>
        <div>
          <p className="text-black py-2 text-2xl leading-[3.1rem]">
            {t("mainPageSubTitle")}
          </p>
          <p className="pb-6 text-base lg:max-w-[77rem] text-gray-600   leading-[3.1rem]">
            {t('mainPageParagraph')}
          </p>
        </div>
      </div>
      {/* TODO: create ServiceCard.tsx component */}
      {/* Service cards */}
      {/* flex flex-col md:flex-row max-w-7xl justify-between mx-auto items-center */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 justify-between mx-auto max-w-7xl">
        {servicesData.map(
          (
            {
              title,
              image,
              alt,
            }: { title: string; image: string; alt: string },
            index: number
          ) => (
            <ServiceCard key={index} title={title} image={image} alt={alt} />
          )
        )}
      </div> */}
    </div>
  );
}
