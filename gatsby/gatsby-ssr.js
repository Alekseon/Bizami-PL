import React from 'react';
import Layout from './src/components/Layout';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { FormProvider } from './src/components/FormContext';

export function wrapPageElement({ element, props }) {
  
  return <GoogleReCaptchaProvider reCaptchaKey={`${process.env.GATSBY_CAPTCHA_KEY}`}>
           <Layout {...props}>{element}</Layout>;
         </GoogleReCaptchaProvider>
}

export function wrapRootElement({ element}) {
  
  return <FormProvider>{element}</FormProvider>
}
