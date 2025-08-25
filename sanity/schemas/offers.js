export default {
  // Computer Name
  name: 'offers',
  // visible title
  title: 'Offers',
  type: 'document',
  fields: [
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'offers',
      title: 'Offers',
      type: 'array',
      of: [{ type: 'offer', title: 'Offer', name: 'offer' }],
    },
  ],
};
