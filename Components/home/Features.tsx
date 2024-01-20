import React from 'react';
import SectionHeader from '../common/SectionHeader';
import Circle from '../icons/Circle';
import ArrowLeft from '../icons/ArrowLeft';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';

export async function Features({ title }: { title: string }) {

  const lang = useLang.getState().lang;
  const { t } =await useTranslation(lang,'mainPage');

  return (
    <section className="bg-gray-50 z-0 relative" id="features">
      <div className="w-80 h-80 absolute -z-10 left-12 top-60 sm:left-36 sm:top-32 featureBackground"></div>
      <div className="px-4 text-customGray leading-10 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-40">
        <SectionHeader title={title} />
        <div className="md:mr-4 py-5">
          <h2 className="text-black text-xl mb-3">
          {t('startupAcademyService' , {returnObjects: true}).subTitle}

          </h2>
          <p className="">
          {t('startupAcademyService' , {returnObjects: true}).text1}

          </p>
          <div>
            <p>
            {t('startupAcademyService' , {returnObjects: true}).text2}
            </p>
            <ul className="list-disc mr-4">
              <li>
                وجود فضاهای کار اشتراکی در مناطق مهم با دسترسی آسان به امکانات
                شهری و هزینه‌های بسیار پایین
              </li>
              <li>
                کار در یک محیط پویا با شبکه‌ای از مشتریان بالقوه، انواع شرکای
                تجاری، منتورها و افراد با‌استعداد درحوزه های مختلف
              </li>
            </ul>
          </div>
        </div>
        {/* bottom */}
        <div>
          <div className="md:mr-3">
            <div className="flex items-center mb-3">
              <Circle />
              <h2 className="text-brand text-xl mr-4">
              {t('ExperienceCoWorking' , {returnObjects: true}).title}
              </h2>
            </div>
            <p>
            {t('ExperienceCoWorking' , {returnObjects: true}).text}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-brand py-2 px-4 flex text-sm rounded-md">
          <p className="pl-2">{t('RegisterForm' , {returnObjects: true}).text}</p>
          <ArrowLeft />
        </button>
      </div>
    </section>
  );
}
