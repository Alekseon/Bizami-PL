import React from 'react';
import { MobileMenuStyles } from '../styles/HeaderStyles';
import phoneIcon from '../assets/images/gridicons_phone.svg';
import scrollToId from '../utils/scrollToId';
import ModalBox from './ModalBox';
import LanguageButton from './LanguageButton';

const translations = {
  en: {
    whyBizami: 'Why Bizami?',
    Offer: 'Offer',
    About: 'About us',
    Contact: 'Contact',
  },
  pl: {
    whyBizami: 'Dlaczego Bizami?',
    Offer: 'Oferta',
    About: 'O nas',
    Contact: 'Kontakt',
  },
};




export default function MobileMenu({ menuState, onMenuStateChange, locale}) {
  function scrollToHandle(id) {
    const headerHeight = document.querySelector('header').offsetHeight * -1;
    onMenuStateChange(!menuState);
    scrollToId(id, 0, headerHeight);
  }

  function getTranslation(key) {
    return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
  };
  
  

  return (
    <MobileMenuStyles className={`${menuState ? 'open' : ''}`}>
      
      <ul>
      <LanguageButton locale = {locale}/>
        <li>
          <button type="button" onClick={() => scrollToHandle('readMoreAbout')}>
           { getTranslation('whyBizami')}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToHandle('offer')}>
          { getTranslation('Offer')}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToHandle('about')}>
          { getTranslation('About')}
          </button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToHandle('contact')}>
          { getTranslation('Contact')}
          </button>
        </li>
        <li className="demoButton">
         <ModalBox locale={locale} type="button"/>
        </li>
        
      </ul>
      <div className="contact">
        <span>
          <img src={phoneIcon} width="32" height="32" alt="" />
          { getTranslation('Contact')}: <a href="tel:+48603603285">+48 603 603 285</a>
        </span>
      </div>
    </MobileMenuStyles>
  );
}
