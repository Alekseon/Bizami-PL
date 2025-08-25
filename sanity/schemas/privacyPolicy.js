export default {
  // Computer Name
  name: 'privacyPolicy',
  // visible title
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    
  
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'descriptionT',
      title: 'Description',
      type: 'localeArray',
      of: [
        {
          type: 'block',
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
      ],
    },
  ],
};
