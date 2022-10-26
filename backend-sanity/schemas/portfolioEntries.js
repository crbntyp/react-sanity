export default {
  name: 'portfolioEntries',
  title: 'Portfolio Entries',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'portfolioCategory',
      title: 'Category',
      type: 'reference',
      to: [
        {
          type: 'portfolioCategory',
        }
      ]
    },
    {
      name: 'imageurl',
      title: 'Image Upload',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'someThing',
      title: 'Add something',
      type: 'string',
    },
  ],
};
