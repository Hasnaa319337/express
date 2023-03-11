import createI18n from 'vue-i18n'
import en from "./locales/en.json";
import ar from "./locales/ar.json";

function loadLocaleMessages() {
  return {
    en: en,
    ar: ar,
  };
}
export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "ar",
  messages: loadLocaleMessages(),
});
