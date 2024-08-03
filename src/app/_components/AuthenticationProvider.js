"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
const user_context = React.createContext();

export default function AuthProvider({ children , initial_theme}) {
  const [user, setUser] = useState(null);
  const [theme , setTheme] = useState(initial_theme);
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ecommerse-user"));
    data && setUser(data);
  }, []);

  const login = (person) => {
    setUser(person);
    localStorage.setItem('ecommerse-user', JSON.stringify(person));
  };

  const logout = () => {
    localStorage.setItem('ecommerse-user', JSON.stringify(null));
    setUser(null);
  };

  const value = { user, login, logout , theme , setTheme };


  return (
    <user_context.Provider value={value}>
    <body className={`${theme} bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-white`}>
        <NavBar />
        <div className='p-1'  style={{ minHeight: "calc(100vh - 4rem)" }} >
          {children}
        </div>
        <Footer />
    </body>
    </user_context.Provider>
  );
}


export const useAuth = () => {
  return React.useContext(user_context);
};