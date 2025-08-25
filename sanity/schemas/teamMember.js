export default {
  // Computer Name
  name: 'teamMember',
  // visible title
  title: 'Team Member',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'positionT',
      title: 'PositionT',
      type: 'localeString',
    },
    {
      name: 'imageDesk',
      title: 'Image Desktop',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageMob',
      title: 'Image Mobile',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
