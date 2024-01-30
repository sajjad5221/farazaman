import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import mainPage from '../app/i18n/locales/fa/mainPage.json'
import navbar from '../app/i18n/locales/fa/mainPage.json'
import startups from '../app/i18n/locales/fa/mainPage.json'

export const defaultNS = "mainPage";

export const resources = {
  fa: {
    mainPage,
    navbar,
    startups
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "fa",
  ns: ["mainPage", "navbar", "startups"],
  defaultNS,
  resources,
});