import React from 'react'

const WhatAreWeAbout = () => {
  return (
    <div className='grid md:grid-cols-2 px-10 lg:px-[100px] pt-20 pb-[70px] bg-gray-50 dark:bg-inherit gap-10 text-center md:text-left'>
      <div className='grid gap-10 lg:mr-10'>
        <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dar:text-inherit'> What Are We about</h1>
        <h3 className='text-xl lg:text-2xl dark:text-[#D6CFB4]'> At <span className='font-bold  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text dark: text-transparent leading-normal '>Kleon,</span> we're passionate about unlocking Africa's potential through technology. We offer a comprehensive suite of services, including custom software development, data analytics, robust cybersecurity solutions, advanced AI/ML capabilities, and innovative blockchain implementations. We partner with businesses across Africa to drive growth, foster innovation, and achieve digital transformation.</h3>
      </div>
      <div className='dark:bg-black rounded-2xl '>
        <img className='dark:opacity-70 rounded-2xl h-full object-cover' src="assets/WhatAreWeAbout.jpg" alt="WhatAreWeAbout" />
      </div>
    </div>
  )
}

export default WhatAreWeAbout
