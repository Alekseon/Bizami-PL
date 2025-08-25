import worldIcon from '../assets/images/icons8-world-50.png'
import styled from 'styled-components';
import { navigate } from 'gatsby';
import React  from 'react';

const LanguageButtonStyle = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  color: black !important;  
  font-family: system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  transform: translateY(-2px);

  .img{
    margin-right: 8px;
    transform: translateY(0px);
  }

  
  
  
`;


const LinkButton = styled.button`
  font-weight 500;
  padding: 2px;
  font-size: 16px;
  margin-right: 0px;
`;


export default function LanguageButton({locale}){


  function handleNavigate(newLocale) {

    function findSecondSlashIndex(inputString) {
      const firstSlashIndex = inputString.indexOf('/'); // znajdź indeks pierwszego wystąpienia '/'
      
      if (firstSlashIndex !== -1) {
        const secondSlashIndex = inputString.indexOf('/', firstSlashIndex + 1); // znajdź indeks drugiego wystąpienia '/', zaczynając od indeksu po pierwszym '/'
        
        return secondSlashIndex;
      }
      
      return -1; // zwróć -1 jeśli nie ma drugiego '/'
    }

    const currentUrl = window.location.pathname;// Current URL already has the locale, so remove it
    const check =  findSecondSlashIndex(currentUrl);
    
  

    
    if(check===3){
      navigate(newLocale+window.location.pathname.substring(4));
    }else
    if(check>3){
      navigate(newLocale+window.location.pathname);
    }else{
      navigate(newLocale);
    }
  }

  
return(
<>
    <LanguageButtonStyle>
      <img className='img' src={worldIcon} width="24" height="24" alt="" />
      {locale === 'en' ? (
        <>
          <LinkButton  onClick={()=>handleNavigate('/')}>PL</LinkButton> 
        </>
      ) : (
        <>
        <LinkButton   onClick={()=>handleNavigate('/en')}>EN</LinkButton> 
        </>
      )}
  </LanguageButtonStyle>
</>
)
}