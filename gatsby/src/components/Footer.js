import React from 'react';
import logo_footer from '../assets/images/logo_footer.svg';
import { FooterStyles } from '../styles/FooterStyles';
import scrollToId from '../utils/scrollToId';
import { Link, } from 'gatsby';


const translations = {
  en: {
    whyBizami: 'Why Bizami?',
    Offer: 'Offer',
    About: 'About us',
    Contact: 'Contact',
    PrivacyPolicy: 'Privacy Policy',
    href: '/en/polityka-prywatnosci/',
  },
  pl: {
    whyBizami: 'Dlaczego Bizami?',
    Offer: 'Oferta',
    About: 'O nas',
    Contact: 'Kontakt',
    PrivacyPolicy: 'Polityka Prywatności',
    href: '/polityka-prywatnosci/',
  },
};

 function getTranslation(key, locale) {
  return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
};

export default function Footer({ data , locale}) {

  
  
  return (
    <FooterStyles>      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo-wrapper">
            <img
              className="footer-logo"
              src={logo_footer}
              alt="footer logo"
              width="320"
              height="160"
            />
            <span className="footer-logo-text">Bizami Your Logistic</span>
          </div>
          <p>{data.descriptionT}</p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <button
                type="button"
                onClick={() => scrollToId('readMoreAbout', -150, -100)}
              >
                Bizami
              </button>
            </li>
            <li>
              <button
                role="link"
                onClick={() => scrollToId('advantages', 0, 100)}
              >
                {getTranslation('whyBizami',locale)}
              </button>
            </li>
            <li>
              <button
                role="link"
                onClick={() => scrollToId('offer', -150, -50)}
              >
                {getTranslation('Offer',locale)}
              </button>
            </li>
            <li>
              <button
                role="link"
                onClick={() => scrollToId('about', -150, -50)}
              >
               {getTranslation('About',locale)}
              </button>
            </li>
            <li>
              <button role="link" onClick={() => scrollToId('contact')}>
                {getTranslation('Contact',locale)}
              </button>
            </li>
            <li>
              <Link to={getTranslation('href',locale)}>
                {getTranslation('PrivacyPolicy',locale)}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-row">
        <span className="copyright">
          Copyright © Bizami {new Date().getFullYear()}
        </span>
      </div>
    </FooterStyles>
  );
}
