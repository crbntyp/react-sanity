export default {
  name: 'role',
  title: 'Role',
  type: 'document',
  fields: [
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'roleIcon',
      title: 'Role Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};