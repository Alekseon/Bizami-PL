import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaUserCog } from 'react-icons/fa';

// List of custom items to avoid redundancy
const customItems = [
  { title: 'Page metadata', schemaType: 'pageMetadata', documentId: 'pageMetadataId' },
  { title: 'Hero', schemaType: 'hero', documentId: 'heroId' },
  { title: 'About Bizami', schemaType: 'aboutBizami', documentId: 'aboutBizamiId' },
  { title: 'Benefits', schemaType: 'benefits', documentId: 'benefitsId' },
  { title: 'Offers', schemaType: 'offers', documentId: 'offersId' },
  { title: 'Advantages', schemaType: 'advantages', documentId: 'advantagesId' },
  { title: 'Partners', schemaType: 'partners', documentId: 'partnersId' },
  { title: 'Contact', schemaType: 'contact', documentId: 'contactId' },
  { title: 'Azymut', schemaType: 'azymut', documentId: 'azymutId' },
  { title: 'Team', schemaType: 'team', documentId: 'teamId' },
  { title: 'Footer', schemaType: 'footer', documentId: 'footerId' },
  { title: 'ModalBox', schemaType: 'modalBox', documentId: 'modalBoxId' },
  { title: 'Video', schemaType: 'video', documentId: 'videoId' },
  
];

export default () => {
  return S.list()
    .title('Base')
    .items([
      ...customItems.map(item => 
        S.listItem()
          .title(item.title)
          .icon(FaUserCog)
          .child(
            S.editor()
              .schemaType(item.schemaType)
              .documentId(item.documentId)
          )
      ),
      // Add the rest of the document items, excluding the custom ones
      ...S.documentTypeListItems().filter(
        item => !customItems.some(customItem => customItem.schemaType === item.getId())
      ),
    ]);
};
