import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center gap-10 md:gap-0 px-10 lg:px-[100px] pt-20 md:pt-20 pb-[70px] dark:bg-inherit text-center md:text-left'>
       <div className='dark:bg-black rounded-2xl w-[70%]'>
        <img className='dark:opacity-70 rounded-2xl aspect-square  object-cover' src="assets/WhyChooseUs.jpg" alt="WhyChooseUs" />
      </div>
      <div className='grid gap-5 md:gap-10 lg:mr-10'>
        <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dar:text-inherit'> Why Choose Kleon</h1>
        <h3 className='text-xl lg:text-2xl dark:text-[#D6CFB4]'><span className='font-bold  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text dark: text-transparent leading-normal '>Kleon,</span> is very friendly to African users  as it offers good pricing  favorable to each country's  local currency. </h3>
      </div>
    </div>
  )
}

export default WhyChooseUs
