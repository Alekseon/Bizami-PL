import { supportedLanguages } from "../contentTypes/supportedLanguages"
  
export default {
    name: "localeString",
    type: "object",
    fieldsets: [
      {
        title: "TranslationsString",
        name: "translationsString",
        options: { collapsible: true },
      },
    ],
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: "string",
      fieldset: lang.isDefault ? null : "translationsString",
    })),
  }