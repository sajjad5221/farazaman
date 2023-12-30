import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './setting';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';

const initI18next = async (lng: any, ns: any) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(i18nextBrowserLanguagedetector)
    .use(
      resourcesToBackend(
        (language: any, namespace: any) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init({
      detection: {
        order: ['path', 'navigator'],
        caches: [],
        lookupFromPathIndex: 0,
      },
      ...getOptions(lng, ns),
    });
  return i18nInstance;
};

let keyPrefix: string;
export async function useTranslation(
  lng: any,
  ns: any,
  options = { keyPrefix }
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
