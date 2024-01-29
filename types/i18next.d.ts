import mainPage from '../app/i18n/locales/fa/mainPage.json'
import mainPage from '../app/i18n/locales/en/mainPage.json'
declare module 'i18next' {
    interface CustomTypeOptions {
      defaultNS: 'mainPage';
      resources: {
        mainPage: typeof mainPage;
        mainPage: typeof mainPage;
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