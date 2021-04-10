import React, {
    createContext,
    useState,
  } from 'react';
  
  export const AuthenticationCtxt = createContext({});
 
  
  export const AuthenticationCtxtProvider = (props) => {

    const [authData, setAuthData] = useState(undefined);
   const value = {authData,setAuthData};
  
    return (
      <AuthenticationCtxt.Provider value={value}>
        {props.children}
      </AuthenticationCtxt.Provider>
    );
  };