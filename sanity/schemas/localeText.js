import { supportedLanguages } from "../contentTypes/supportedLanguages"


export default {
    name: "localeText",
    type: "object",
    fieldsets: [
      {
        title: "TranslationsText",
        name: "translationsText",
        options: { collapsible: true },
      },
    ],
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: "text",
      fieldset: lang.isDefault ? null : "translationsText",
    })),
  }