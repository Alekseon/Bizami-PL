// schemas/page.js

export default {
    name: 'video',
    // visible title
    title: 'Video',
    type: 'document',
    fields: [
      {
        name: 'videoTitle',
        type: 'localeString',
        title: 'Video Title'
      },
      {
        name: 'title',
        type: 'localeString',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'localeText',
        title: 'Description'
      },
      {
      name: 'imageVideo',
      title: 'Image Desktop',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
      {
        name: 'videoSrcURL',
        type: 'url',
        title: 'Video Source URL'
      },
      
      
    ]
  }
  