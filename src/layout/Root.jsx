import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Root = () => {
  return (
    <div className='bg-white dark:bg-black dark:text-[#D6CFB4]'>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Root
