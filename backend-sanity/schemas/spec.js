export default {
  name: 'spec',
  title: 'Specialisation',
  type: 'document',
  fields: [
    {
      name: 'spec',
      title: 'Specialisation',
      type: 'string',
    },
    {
      name: 'specIcon',
      title: 'Specialisation Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [
        {
          type: 'classes',
        }
      ]
    },
    {
      name: 'role',
      title: 'Role',
      type: 'reference',
      to: [
        {
          type: 'role',
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'spec',
      classes: "class.class",
      role: "role.role",
      media: 'specIcon'
    },
    prepare(selection){
      const {title, classes, role, media} = selection
      return {
        title: title,
        media: media,
        subtitle: `${classes}, ${role}`
      }
    }
  },
};