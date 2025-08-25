export default {
  // Computer Name
  name: 'team',
  // visible title
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'teamMembers',
      title: 'team Members',
      type: 'array',
      of: [{ type: 'teamMember', name: 'teamMember', title: 'Team Member' }],
    },
  ],
};
