import { FallbackLng } from "./../../node_modules/i18next/typescript/options.d";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "./en.json";
import de from "./de.json";

const LANGUAGES = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  ur: {},
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: "de",
  defaultNS: "translation",
  ns: ["translation"],
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
