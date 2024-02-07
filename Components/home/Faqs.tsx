"use client";
// import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import SectionHeader from "../common/SectionHeader";
// import { useTranslation } from "app/i18n/client";
import { useLang } from "stores/langStore";
import { resources } from "@/types/i18n";


// Define an array of FAQ items, each with a question and response
// const faqitems = [
//   {
//     question: 'مدت زمان قرارداد طرح پویش چقدر است؟',
//     response:
//       'طبق هماهنگی‌هایی که با دانشگاه انجام شده، مدت زمان این طرح به مدت 240 ساعت است.',
//   },
//   {
//     question: 'ساعت کاری به چه‌ صورت برنامه ریزی شده است؟',
//     response:
//       'طبق هماهنگی‌هایی که با دانشگاه انجام شده، مدت زمان این طرح به مدت 240 ساعت است.',
//   },
//   {
//     question: 'آیا داشتن ایده برای یک استارت‌آپ کافی است؟',
//     response:
//       'باوجود اینکه اولین قدم در تاسیس و شروع یک استارت‌آپ، ایده اولیه آن است؛ اما شرط کافی نیست. داشتن MVP (حداقل محصول قابل ارائه) شرط کافی برای شروع یک استارت‌آپ است.',
//   },
//   {
//     question: 'فضای کار اشتراکی چه امکاناتی را فراهم می کند؟',
//     response:
//       'شرکت ما فضای مناسب رفاهی و امکانات فنی ازجمله اینترنت آزاد و نامحدود، نوشیدنی و غیره را برای شما فراهم می کند.',
//   },
// ];

// Define the Faq component
export default function Faq() {
  const [toggleFlag0 , setToggleFlag0] = useState(false)
  const [toggleFlag1 , setToggleFlag1] = useState(false)
  const [toggleFlag2 , setToggleFlag2] = useState(false)
  const [toggleFlag3 , setToggleFlag3] = useState(false)

  // const [flags, setFlags] = useState({
  //   0: false,
  //   1: false,
  //   2: false,
  //   3: false
  // })
  const falseHandler = () => {
    setToggleFlag0(false)
    setToggleFlag1(false)
    setToggleFlag2(false)
    setToggleFlag3(false)
  }

  const handleClick = (num: number) => {
    // setFlags({...[num] = ![num]}) 
    // console.log(flags) 
    switch (num) {
      case 0:
        falseHandler()
        setToggleFlag0(!toggleFlag0)
        break;
      case 1:
        falseHandler()
        setToggleFlag1(!toggleFlag1)
        break;
      case 2:
        falseHandler()
        setToggleFlag2(!toggleFlag2)
        break;
      case 3:
        falseHandler()
        setToggleFlag3(!toggleFlag3)
        break;
      default:
        break;
    }
  }

  const lang = useLang().lang;

  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN

  // const { t } = useTranslation(lang, "mainPage");

  // const faqitems: { question: string; response: string }[] = t(
  //   "FrequentlyQuestions",
  //   { returnObjects: true }
  // ) as any;
  // Render the component
  return (
    <section className="mt-60 px-4 py-16">
      <h1 className="font-bold text-brand text-3xl">سوالات پرتکرار</h1>
      <div className="flex mx-auto w-full">
        <div className="my-8 mx-auto w-7/12">
          {/* TODO: create FaqCard.tsx */}
          {index1.FrequentlyQuestions.map(({ question, response },index: number) => (
            <div onClick={() => {handleClick(index)}} key={index} className="pr-4 py-4 my-4 text-black rounded-md bg-servicebg">
              <p className="text-gray-900 relative question" >{question} <img className="w-2 flex absolute left-4 top-2 rotate-[268deg]" src="/static/images/icon/left-arrow.svg" alt="" /></p>
              {/* {flags[index] && <p className="py-3 text-customGray">{response}</p>} */}
              {(() => {
                switch (index) {
                  case 0:
                    return (
                      <>
                        {toggleFlag0 && <p className="py-3 text-customGray">{response}</p>}
                      </>
                    )
                    break;
                  case 1:
                    return (
                      <>
                        {toggleFlag1 && <p className="py-3 text-customGray">{response}</p>}
                      </>
                    )
                    break;
                  case 2:
                    return (
                      <>
                        {toggleFlag2 && <p className="py-3 text-customGray">{response}</p>}
                      </>
                    )
                    break;
                  case 3:
                    return (
                      <>
                        {toggleFlag3 && <p className="py-3 text-customGray">{response}</p>}
                      </>
                    )
                    break;
                  default:
                    break;
                }
              })()}
            </div>
          ))}
        </div>
        <div className="w-6/12 relative">
          <div className=" absolute w-4/12 h-full bottom-0 left-0 rounded-lg bg-brand"></div>
          <img className=" absolute bottom-10 left-10 w-[55%]" src="/static/images/faq/lamp.png" alt="" />
        </div>
      </div>
    </section>
  );
}