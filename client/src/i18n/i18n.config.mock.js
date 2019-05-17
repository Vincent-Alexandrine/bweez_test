// maybe not needed, but I keep it just in case

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'cimode',

    // have a common namespace used around the full app
    /* ns: ['translations'],
    defaultNS: 'translations', */
    resources: {
      en: {},
      fr: {},
    },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
