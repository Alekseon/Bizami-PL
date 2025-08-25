export default {
  // Computer Name
  name: 'offer',
  // visible title
  title: 'Offer',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      description: 'icons to type: "arrow", "portrait"',
      type: 'string',
    },
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'descriptionT',
      title: 'DescriptionT',
      type: 'localeText',
    },
  ],
};
