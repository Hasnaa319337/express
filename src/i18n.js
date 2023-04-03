import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'



// function loadLocaleMessages() {
//   const locales = import.meta.glob('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   locales.keys().forEach(key => {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       messages[locale] = locales(key).default
//     }
//   })
//   return messages
// }


import messages from "@intlify/unplugin-vue-i18n/messages";
export default createI18n({
  locale: Cookies.get('locale')|| 'ar',
  fallbackLocale: Cookies.get('locale') || 'ar',
  messages: messages
})
