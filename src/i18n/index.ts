import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

function getInitialLanguage(): string {
  const saved = localStorage.getItem("language");
  if (saved === "fr" || saved === "en") return saved;
  const browserLang = typeof navigator !== "undefined" ? navigator.language : "";
  return browserLang.toLowerCase().startsWith("fr") ? "fr" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
