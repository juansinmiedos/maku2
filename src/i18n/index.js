import en from "./en.json"
import es from "./es.json"

const i18nOptions = {
  locale: "en",
  fallbackLocale: 'es',
  messages: {
    en: en,
    es: es
  },
}

export default i18nOptions