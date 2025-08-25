// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import hero from './hero';
import aboutBizami from './aboutBizami';
import benefits from './benefits';
import benefit from './benefit';
import contact from './contact';
import offers from './offers';
import offer from './offer';
import advantages from './advantages';
import advantagesList from './advantagesList';
import advantagesListItem from './advantagesListItem';
import partner from './partner';
import partners from './partners';
import azymut from './azymut';
import team from './team';
import teamMember from './teamMember';
import footer from './footer';
import privacyPolicy from './privacyPolicy';
import modalBox from './modalBox';
import translationsString from './localeString';
import translationsText from './localeText';
import translationsArray from './localeArray';
import video from './video';
import pageMetadata from "./pageMetadata";
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    translationsArray,
    translationsString,
    translationsText,
    pageMetadata,
    hero,
    aboutBizami,
    benefits,
    benefit,
    offers,
    offer,
    advantages,
    advantagesList,
    advantagesListItem,
    partner,
    partners,
    contact,
    azymut,
    team,
    teamMember,
    footer,
    privacyPolicy,
    modalBox,
    video,
    

    
  ]),
});
