import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const Links = () => {
const [isOpen, setIsOpen] = useState(false)
const navigate = useNavigate()

useEffect (() => {
  window.scrollTo(0, 0);
},[navigate]);

const handleOpen =  () => {
  setIsOpen(true)
}
const handleClose =  () => {
  setIsOpen(false)
}

const handleClick = () => navigate ('/')




  return (

    // Desktop Menu
    <div className='w-full'>
      <ul className='hidden md:flex w-full justify-between'>
          <li onClick={handleClick} className=''>Home</li>
        <Link to={'/about-us'}>
         <li>About Us</li>
        </Link>
        <Link to={'/services'}>
          <li>Our Services</li>
        </Link>
        <Link to={'contact-us'}>
          <li>Contact</li>
        </Link>
       
        
      </ul>



      {/* Mobile view mwnu */}
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
          <Link onClick={handleClose} to={'/'}>
          <li className=''>Home</li>
        </Link>
        <Link onClick={handleClose} to={'/about-us'}>
         <li>About Us</li>
        </Link>
        <Link onClick={handleClose} to={'/services'}>
          <li>Our Services</li>
        </Link>
        <Link onClick={handleClose} to={'contact-us'}>
          <li>Contact</li>
        </Link>
         </ul>
        </div>
        </div>
      )}
      </div>


    </div>
    
  )
}

export default Links
