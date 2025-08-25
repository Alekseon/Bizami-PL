export default {
  // Computer Name
  name: 'contact',
  // visible title
  title: 'Contact',
  type: 'document',
  fields: [
   

    //translated

    {
      name: 'subtitleT',
      title: 'Subtitle',
      type: 'localeString',
    },
    {
      name: 'titleT',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'descriptionT',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'addressT',
      title: 'Address',
      type: 'localeText',
      description: 'Press enter to set text to the new line.',
    },
    {
      name: 'googlemaps',
      title: 'Link to Google Maps localization',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Contact e-mail',
      type: 'localeString',
    },
    {
      name: 'phone1',
      title: 'Phone number in header section',
      type: 'localeString',
    },
    {
      name: 'phone2',
      title: 'Phone number in contact section',
      type: 'localeString',
    },
  ],
};
