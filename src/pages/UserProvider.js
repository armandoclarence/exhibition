
import React, { createContext } from 'react';
import {jwtDecode} from 'jwt-decode'
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('', 'jwt');

  console.log(token)
  const decrypted = token ? jwtDecode(token): null;
  const removeJWT = () => {
    window.localStorage.removeItem('jwt')
  }
  return (
    <UserContext.Provider value={{ decrypted, removeJWT }}>
      {children}
    </UserContext.Provider>
  );
};