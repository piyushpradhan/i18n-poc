import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./translations/en/translation.json";
import frTranslations from "./translations/fr/translation.json";
import esTranslations from "./translations/es/translation.json";

const resources = {
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
