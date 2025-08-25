import React, { useEffect } from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import SEO from './SEO';


import Cookies from 'js-cookie';

export default function Layout({ children, pathContext, data}) {
  
  useEffect(() => {
    Cookies.set('language', pathContext.locale, { expires: 7 }); // Ciasteczko wygaśnie po 7 dniach
  }, [pathContext.locale]);

 

  return (
    <>
      <GlobalStyles />
      <SEO location={ pathContext.locale }/>
      {/* Google Tag Manager (noscript) */}
      <iframe
        title="GTM"
        src="https://www.googletagmanager.com/ns.html?id=GTM-KS8TGWGS"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
      
      <div>
        
        <Header locale={pathContext.locale}  data={null} />
        
        {children}
        
      </div>
      
    </>
  );
}
