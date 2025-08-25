import { supportedLanguages } from "../contentTypes/supportedLanguages"
  
export default {
    name: "localeArray",
    type: "object",
    fieldsets: [
      {
        title: "TranslationsArray",
        name: "translationsArray",
        options: { collapsible: true },
      },
    ],
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: "array",
      of: [
        {
          type: 'block',
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
      fieldset: lang.isDefault ? null : "translationsArray",
    })),
  }