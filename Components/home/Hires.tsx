'use client'
import React from "react";
import SliderMenu from "../misc/SliderMenu";
import { useTranslation } from "app/i18n/client";
import { useLang } from "stores/langStore";
import { resources } from "@/types/i18n";

export default function Hires() {

  const lang = useLang().lang;

  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN

  const { t } = useTranslation(lang, "mainPage");

  // const hires: any = t("YourComments", { returnObjects: true });

  // console.log(typeof(t("YourComments", { returnObjects: true })))

  // const hires = [
  //   {
  //     id: 3,
  //     name: "ارشیا",
  //     jobTitle: "فرانت اند دولوپر",
  //     description:
  //       "تجربه من در فرازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود بخدا",
  //     image: "/static/images/hires/arshia.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "ارشیا",
  //     jobTitle: "فرانت اند دولوپر",
  //     description:
  //       "تجربه من در فرازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود بخدا",
  //     image: "/static/images/hires/arshia.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "فاطمه",
  //     jobTitle: "فرانت اند دولوپر",
  //     description:
  //       "تجربه من در فرازمان خیلی رازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود بعالی بود بخدا",
  //     image: "/static/images/hires/fatemeh.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "آریانا",
  //     jobTitle: "فرانت اند دولوپر",
  //     description:
  //       "تجربه من در فرازمان خیلی عالی رازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود ببود بخدا",
  //     image: "/static/images/hires/ariana.jpg",
  //   },
  //   {
  //     id: 5,
  //     name: "آریانا",
  //     jobTitle: "فرانت اند دولوپر",
  //     description:
  //       "تجربه من در فرازمان خیلی عالی رازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود برازمان خیلی عالی بود ببود بخدا",
  //     image: "/static/images/hires/ariana.jpg",
  //   },
  // ];

  return (
    <div>
      <SliderMenu title="تجربه استخدامی ها" items={index1.YourComments} />
    </div>
  );
}
