"use client";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from './AuthenticationProvider';
import axios from 'axios';



export default function ToggleModeButton() {
  const { theme , setTheme } = useAuth();
  const HandleToggleMode = () => {
    axios.put("/api" , { theme:theme === "dark" ? "" : "dark" })
        .catch(error => console.log(error.message));
    setTheme(prev => prev === "dark" ? "" : "dark");
  }
  
  return (
    <div className='cursor-pointer *:bg-gray-500 *:rounded-full flex items-center *:hover:scale-110 justify-center h-8 w-8 mx-auto py-8 lg:py-0 text-lg' onClick={HandleToggleMode}>
      <FontAwesomeIcon icon={faSun} className='p-2 text-white' id='dark' />
      <FontAwesomeIcon icon={faMoon} className='text-slate-900 py-2 px-[10px] hidden' id='light' />
    </div>
  )
}
