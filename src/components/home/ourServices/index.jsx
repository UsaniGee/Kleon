import React from 'react'
import Button from '../../button'

const OurServices = () => {
  return (
    <div className='flex items-center justify-center p-10 md:px-[60px] md:py-[150px]'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 h-full w-full shadow-2xl justify-center-center p-10 gap-10'>
        <div className='flex flex-col gap-5 justify-between items-center h-full w-full'>
            <img className='rounded-full aspect-square w-[50%] object-cover' src="assets/KleonHero.jpg" alt="" />            
            <div className='uppercase font-bold text-[#D39D55]'>Software Development</div>
            <div className='text-xs md:text-sm'>
                At Kleon we create apps for everyone, every category and every business. We specialize in gaming apps, augmented reality, IoT, Telemedicine, and service apps.
            </div>
           <Button title={"Learn More"}/>
        </div>
        <div className='flex flex-col gap-5 justify-between items-center h-full w-full'>
            <img className='rounded-full aspect-square w-[50%] object-cover' src="assets/KleonHero.jpg" alt="" />
            <div className='uppercase font-bold text-[#D39D55]'>Data Analysis</div>
            <div className='text-xs md:text-sm'>
            At Kleon, we turn data into actionable insights. We specialize in data mining, data visualization, predictive modeling, and business intelligence.
            </div>
            <Button title={"Learn More"}/>
        </div>
        <div className='flex flex-col gap-5 justify-between items-center h-full w-full'>
            <img className='rounded-full aspect-square w-[50%] object-cover' src="assets/KleonHero.jpg" alt="" />
            <div className='uppercase font-bold text-[#D39D55]'>CyberSecurity</div>
            <div className='text-xs md:text-sm'>
                At Kleon, we safeguard your digital world. We specialize in threat detection, vulnerability management, data protection, and security audits for businesses of all sizes.
                </div>
            <Button title={"Learn More"}/>
        </div>
        <div className='flex flex-col gap-5 justify-between items-center h-full w-full'>
            <img className='rounded-full aspect-square w-[50%] object-cover' src="assets/KleonHero.jpg" alt="" />
            <div className='uppercase font-bold text-[#D39D55]'>AI/ML</div>
            <div className='text-xs md:text-sm'>
            At Kleon, we build intelligent solutions for a smarter future. We specialize in machine learning models, predictive analytics, natural language processing, and computer vision.
            </div>
            <Button title={"Learn More"}/>
        </div>
      </div>
    </div>
  )
}

export default OurServices
