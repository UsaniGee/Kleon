import React from 'react'
import Logo from './logo'
import Links from './links'
import Toggle from '../toggle'

const Navbar = () => {

  return (
    <div className=' flex justify-between px-5 lg:px-[100px] items-center py-2 shadow-md text-gray-400 dark:text-white font-semibold z-20 fixed w-full bg-white dark:bg-inherit pb-6 cursor-default'>
      <Logo />
      <div className='flex md:w-1/2 justify-between items-center gap-5'>
      <Links />
      <Toggle />
      </div>
    </div>
  )
}

export default Navbar
