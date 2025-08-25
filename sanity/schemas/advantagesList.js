export default {
  // Computer Name
  name: 'advantagesList',
  // visible title
  title: 'Advantages List',
  type: 'document',
  fields: [
    
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [
        {
          type: 'advantagesListItem',
          name: 'advantagesListItem',
          title: 'List Item',
        },
      ],
    },
  ],
};
