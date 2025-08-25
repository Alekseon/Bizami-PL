import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import { HeaderTag, HeaderMain, HeaderTopInfo } from '../styles/HeaderStyles';
import phoneIcon from '../assets/images/gridicons_phone.svg';
import MobileMenu from './MobileMenu';




const translations = {
  en: {
    Contact: 'Contact',
   
  },
  pl: {
    Contact: 'Kontakt',
  },
};



 function getTranslation(key, locale) {
  return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
};

 function pushDataLayer() {
   window.dataLayer?.push({
     event: 'top-click-phone'
   });
 }

export default function Header({  data, locale }) {

  
  
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <HeaderTag>
        <HeaderTopInfo>
          
          <div className="contact">
            <img src={phoneIcon} width="32" height="32" alt="" />
            <span>
              {getTranslation('Contact', locale)} <a href="tel:+48603603285" onClick={() => pushDataLayer()}>+48 603 603 285</a>
            </span>
          </div>
        </HeaderTopInfo>
        <HeaderMain>
          <Logo locale={locale}/>
          
          <Nav menuState={menuState} setMenuState={setMenuState} locale={locale}  />
         
        </HeaderMain>
      </HeaderTag>
      <MobileMenu locale={locale} menuState={menuState} onMenuStateChange={setMenuState} />
    </>
  );
}

  