export default {
  name: 'race',
  title: 'Race',
  type: 'document',
  fields: [
    {
      name: 'race',
      title: 'Race',
      type: 'string',
    },
    {
      name: 'faction',
      title: 'Faction',
      type: 'reference',
      to: [
        {
          type: 'faction',
        }
      ]
    },
  ],
};