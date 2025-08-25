export default {
  // Computer Name
  name: 'partners',
  // visible title
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'partner', name: 'partner', title: 'Partner' }],
    },
  ],
};
