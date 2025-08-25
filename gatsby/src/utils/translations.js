
export default function getTranslation(key, locale, translations) {
    return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
  };

