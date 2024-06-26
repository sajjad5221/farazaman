import faMainPage from '../app/i18n/locales/fa/mainPage.json'
import enMainPage from '../app/i18n/locales/en/mainPage.json'
declare module 'i18next' {
    interface CustomTypeOptions {
      defaultNS: 'mainPage'
      resources: {
        mainPageFa: typeof faMainPage;
        mainPageEn: typeof enMainPage;
        // ns2: typeof enNs2;
      };
    }
    // interface CustomTypeOptions {
    //   defaultNS: 'investment';
    //   resources: {
    //     investment: typeof enInvestment;
    //     // ns2: typeof enNs2;
    //   };
    // }
  }

// type Locale = 'fa' | 'en';

// import mainPage from '../app/i18n/locales/fa/mainPage.json'
// // import mainPage from '../app/i18n/locales/en/mainPage.json'

// declare module 'i18n' {
//   interface faMainPage {
//     ServiceData: {title: string, image: string, alt: string}[];
//     customers: {id: string, name: string, href: string, src: string, alt: string}[];
//     features: {title: string, slogan: string, firstText: string, secondText: string, points: Array, experienceTitle: string, experienceText: string, buttonText: string, modalName: string}[];
//     YourComments: {name: string, subTitle: string, text: string, image: string}[];
//     OurStartup: {title: string, image: string, desciption: string}[];
//     FrequentlyQuestions: {question: string, response: string}[];
//   }
// }

// export interface LocaleTranslations {
//   fa: faMainPage;
// }

// export const translations = {
//   fa: mainPage as faMainPage
// } as LocaleTranslations

// console.log(translations.fa.YourComments);