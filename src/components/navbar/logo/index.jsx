import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'}>
    <div className="flex items-center mb-4 md:mb-0 pt-2">
      <img className="aspect-squar w-[25%] mr-2 object-cover" src="assets/K.png" alt="Logo" />
    </div>
    </Link>
  )
}

export default Logo
