import React from "react";

import { useForm } from "./FormContext";





const translations = {
  en: {
    name : 'Full Name',
    phone: 'Phone',
    fieldRequired: 'This field is required.',
  },
  pl: {
    name : 'Imię Nazwisko',
    phone: 'Telefon',
    fieldRequired: 'To pole jest wymagane.',
  },
};



 export const Pg2 = ({locale}) => {
  
  const { state, handleChange} = useForm();
  const { username, phone, email } = state;

 
  function getTranslation(key) {
    return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
  };
  

  return (
    
    <form >
      <div>
        <label id="requiredLabel1"  className="form-label">
          {getTranslation('name')}*
        </label>
        <input id="requiredInput1"
          type="text"
          value={username}
          onChange={(e) => handleChange("username", e.currentTarget.value)}
          className="input1"
          aria-describedby="requiredWarning1"
        />
         <span id="requiredWarning1" style={{ color: 'red', display: 'none' }}>{getTranslation('fieldRequired')}*.</span>
      </div>
      <div className="flexContainer" >
        <div className="box">
        <label id="requiredLabel2"  className="form-label">
        {getTranslation('phone')}*
        </label><br></br>
        <input id="requiredInput2"
          type="text"
          value={phone}
          onChange={(e) => handleChange("phone", e.currentTarget.value)}
          className="input2"
          aria-describedby="requiredWarning2"
        />
        <span id="requiredWarning2" style={{ color: 'red', display: 'none' }}>{getTranslation('fieldRequired')}</span>
      </div>
      <div className="box">
        <label id="requiredLabel3"  className="form-label">
          Email*
        </label><br></br>
        <input id="requiredInput3"
          type="email"
          value={email}
          onChange={(e) => handleChange("email", e.currentTarget.value)}
          className="input2"
          aria-describedby="requiredWarning3"
        />
        <span id="requiredWarning3" style={{ color: 'red', display: 'none' }}>{getTranslation('fieldRequired')}</span>
      </div>
    </div>
    </form>
    
  );
};
