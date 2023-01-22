import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from './translations/fr.json';
import translationES from './translations/es.json';
import translationEN from './translations/en.json';

// the translations
const resources = {
  fr: {
    translation: translationFR
  },
  es:{
    translation: translationES
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
