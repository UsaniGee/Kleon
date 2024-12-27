import React from 'react'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 px-10 lg:px-[100px] pt-[200px] md:pt-[200px] pb-[70px] bg-gray-50 dark:bg-inherit gap-10 text-center md:text-left'>
      <div className='grid gap-10 lg:mr-10'>
        <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dar:text-inherit'> Empowering African and Asian businesses through technology:</h1>
        <h3 className='text-xl lg:text-2xl dark:text-[#D6CFB4]'> <span className='dark: font-bold dark: bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text dark: text-transparent leading-normal '>Kleon</span> provides software development, data analytics, cybersecurity, AI/ML, and blockchain solutions to drive growth and transformation across Africa and Asia.</h3>
      </div>
      <div className='dark:bg-black rounded-2xl '>
        <img className='dark:opacity-70 rounded-2xl h-full object-cover' src="assets/KleonHero.jpg" alt="Hero" />
      </div>
    </div>
  )
}

export default Hero
