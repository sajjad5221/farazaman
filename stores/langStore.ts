import { create } from 'zustand';
import { CookieValueTypes, getCookie } from 'cookies-next';

type State = {
  lang: string | CookieValueTypes | undefined;
};

type Action = {
  setLanguage: (language: State['lang']) => void;
};

export const useLang = create<State & Action>((set) => ({
  lang: getCookie('i18next') ? getCookie('i18next') : 'fa',
  setLanguage: (lang) => set(() => ({ lang: lang })),
}));
