import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import translationFR from './translations/fr.json';
import translationES from './translations/es.json';

// the translations
const resources = {
  fr: {
    translation: translationFR
  },
  es:{
    translation: translationES
  }
};

i18n
  .init({
    resources,
    lng: "fr",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
