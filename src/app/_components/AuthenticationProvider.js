"use client";
import React, { useEffect } from "react";
const context = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ecommerse-user"));
    setUser(data);
  }, []);

  const login = (person) => {
    setUser(person);
    localStorage.setItem('ecommerse-user', JSON.stringify(person));
  };

  const logout = () => {
    localStorage.setItem('ecommerse-user', JSON.stringify(null));
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };


  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}


export const useAuth = () => {
  return React.useContext(context);
};