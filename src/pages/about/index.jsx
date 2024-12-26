import React from 'react'

const About = () => {
  return (
    <div className='pt-[80px]'>
      <div className='bg-black relative'>
      <img className='h-[400px] md:h-[350px] opacity-65 w-full object-cover' src="assets/AboutUss.jpg" alt="AboutUs" />
      <div className='grid gap-10 lg:mr-10 place-items-center absolute top-2 p-10'>
        <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dar:text-inherit'>About Us</h1>
        <h3 className='text-xl lg:text-2xl text-white font-bold text-center'> <span className='dark: font-bold dark: bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text dark: text-transparent leading-normal '>Kleon</span> provides software development, data analytics, cybersecurity, AI/ML, and blockchain solutions to drive growth and transformation across Africa.</h3>
      </div>
      </div>
    </div>
  )
}

export default About
