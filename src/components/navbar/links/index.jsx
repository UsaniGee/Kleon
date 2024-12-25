import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'

const Links = () => {
const [isOpen, setIsOpen] = useState(false)

const handleOpen =  () => {
  setIsOpen(true)
}
const handleClose =  () => {
  setIsOpen(false)
}

  return (
    <div className='w-full'>
      <ul className='hidden md:flex w-full justify-between'>
        <li className=''>Home</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Contact</li>
      </ul>

      <div className='md:hidden '>
      <div onClick={handleOpen} className='text-2xl'>
        <RxHamburgerMenu />
      </div>

      {isOpen && (
        <div className=' w-[80%] sm:w-1/2 h-screen bg-white dark:bg-gray-800 opacity-95  absolute top-0 right-0 shadow-2xl'>
         <button onClick={handleClose} className='p-3 text-2xl w-fit'>
          <CgClose />
         </button>
         
        <div>
          <ul className='p-20 flex flex-col w-full h-[300px] justify-between'>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact</li>
         </ul>
        </div>
        </div>
      )}
      </div>


    </div>
    
  )
}

export default Links
