export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'surname',
            title: 'Surname',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
}