export default {
  // Computer Name
  name: 'partner',
  // visible title
  title: 'Partner',
  type: 'object',
  fields: [
    
    {
      name: 'descriptionT',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
