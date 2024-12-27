import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
    <div className="flex items-center mb-4 md:mb-0 ">
      <img className="aspect-square w-[20%] mr-2" src="assets/K.png" alt="Logo" />
    </div></Link>
  )
}

export default Logo
