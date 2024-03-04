
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState('');
    // console.log("child",children);
    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
            {/* {console.log("asdf",user)} */}
          {user && <p>User Details: {user}</p>}
        </UserContext.Provider>
      );
};