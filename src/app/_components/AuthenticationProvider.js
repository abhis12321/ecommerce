"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
const user_context = React.createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
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

  const value = { user, login, logout };


  return (
    <user_context.Provider value={value}>
    <body className={`min-h-screen flex flex-col justify-between bg-gray-100 text-gray-950`}>
        <NavBar />
        {/* <div className='p-1'  style={{ minHeight: "calc(100vh - 4rem)" }} >
          {children}
        </div> */}
        <Footer />
    </body>
    </user_context.Provider>
  );
}


export const useAuth = () => {
  return React.useContext(user_context);
};