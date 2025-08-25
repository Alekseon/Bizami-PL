export default {
  // Computer Name
  name: 'benefits',
  // visible title
  title: 'Benefits',
  type: 'document',
  fields: [
    
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'benefit',
          name: 'benefit',
          title: 'Benefit',
        },
      ],
    },
  ],
};
