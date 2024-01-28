import React from "react";
import SliderMenu from "../misc/SliderMenu";
import { useTranslation } from "app/i18n";
import { useLang } from "stores/langStore";
export default async function Hires() {
  const lang = useLang.getState().lang;
  const { t } = await useTranslation(lang, "mainPage");
  const hires = t("YourComments", { returnObjects: true });
  console.log(hires)
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
      <SliderMenu title="تجربه استخدامی ها" items={hires} />
    </div>
  );
}