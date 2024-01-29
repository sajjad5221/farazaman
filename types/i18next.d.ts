import enAboutUs from '../app/i18n/locales/en/aboutUs.json'
import enInvestment from '../app/i18n/locales/en/investment.json'
declare module 'i18next' {
    interface CustomTypeOptions {
      defaultNS: 'mainPage';
      resources: {
        aboutUs: typeof enAboutUs;
        investment: typeof enInvestment;
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