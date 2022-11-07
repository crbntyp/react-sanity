export default {
  name: 'classes',
  title: 'Class',
  type: 'document',
  fields: [
    {
      name: 'class',
      title: 'Class',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'classIcon',
      title: 'Class Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'race',
      title: 'Available Races',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'race'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'class',
      race: 'race',
      media: 'classIcon'
    },
    prepare(selection){
      const {title, race, media} = selection
      //console.log(subtitle)
      return {
        title: title,
        media: media,
        subtitle: `${race ? `${race.length} Races available` : `No Races added as yet...`}`
      }
    }
  }
};

