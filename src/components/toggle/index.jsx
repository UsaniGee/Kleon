import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { CiLight, CiDark } from 'react-icons/ci'




const Toggle = () => {

  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className='aspect-square lg:w-[50px] lg:flex lg:items-center lg:justify-center bg-gray-100 dark:bg-blue-950 rounded-full'>
      {theme === "dark" ?  (
        <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} className='text-blue-500 shadow-none p-2 focus:outline-none text-3xl rounded-full outline-none ring-transparent cursor-pointer'>
       <CiDark />
        </button>
      ) : (
        <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")} className='text-blue-500 shadow-none p-2 focus:outline-none  rounded-full outline-none ring-transparent cursor-pointer '>
        <CiLight className='text-3xl'/>
        </button>
    )}
    </div>
  )
}

export default Toggle
