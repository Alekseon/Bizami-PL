export default {
  // Computer Name
  name: 'advantages',
  // visible title
  title: 'Advantages',
  type: 'document',
  fields: [
    {
      name: 'list',
      title: 'List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'advantagesList' }] }],
    },
    
    
  ],
};
