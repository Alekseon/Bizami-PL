import React from "react";
import {useForm} from "./FormContext";


export const Pg1 = ({locale}) => {

  

  const { state, handleChange} = useForm();
// Wydobycie zmiennych z state
  const { company, itemCount, magCount, erp } = state;
  

  const translations = {
    en: {
      company : 'Company Name',
      erp: 'Currently used ERP system',
      magCount: 'Number of warhouses',
      itemCount: 'Number of products',
      fieldRequired: 'This field is required',
    },
    pl: {
      company : 'Nazwa Firmy',
      erp: 'Obecnie używany system ERP',
      magCount: 'Liczba magazynów',
      itemCount: 'Liczba produktów',
      fieldRequired: 'To pole jest wymagane'
    },
  };
  
   function getTranslation(key) {
    return translations[locale] && translations[locale][key] ? translations[locale][key] : translations['pl'][key];
  };



  return (
    
    <form >
      <div >
        <label id="required" htmlFor="company" className="form-label">
          {getTranslation('company')}*
        </label><br></br>
        <input
          
          className="input1"
          type="text"
          id="company"
          value={company}
          onChange={(e) => handleChange("company", e.currentTarget.value)}
          aria-describedby="usernameWarning"
          
        />
        <span id="companyWarning" style={{ color: 'red', display: 'none' }}>{getTranslation('fieldRequired')}</span>
      </div>
      <div >
        <label htmlFor="itemCount" className="form-label">
        {getTranslation('erp')}*
        </label><br></br>
        <input
          className="input1"
          type="text"
          id="erp"
          value={erp}
          onChange={(e) => handleChange("erp", e.currentTarget.value)}
          
          
        />
      </div>
      <div className="flexContainer" >
        <div className="box">
          <label htmlFor="itemCount" className="label2">
          {getTranslation('itemCount')}
          </label><br></br>
          
          <input
            className="input2"
            type="text"
            id="itemCount"
            value={itemCount}
            onChange={(e) => handleChange("itemCount", e.currentTarget.value)}
            
          />
        </div>
        <div className="box">
        <label htmlFor="magCount" className="label2">
        {getTranslation('magCount')}
          </label><br></br>
          <input
            className="input2"
            type="text"
            id="magCount"
            value={magCount}
            onChange={(e) => handleChange("magCount", e.currentTarget.value)}
            
          />
        </div>
      </div>
    </form>
    
  );
};
