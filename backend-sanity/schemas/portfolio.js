export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        {
            name: 'client_name',
            title: 'Client Name',
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