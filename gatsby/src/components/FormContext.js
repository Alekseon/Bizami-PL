
import React, { useState, createContext, useContext } from "react";


const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const initialState = {
    username: '',
    phone: '',
    company: '',
    itemCount: '',
    magCount: '',
    email: '',
    token: '',
    erp: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  

  return (
    <FormContext.Provider 
      value={{
        state,
        handleChange,
        setState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;