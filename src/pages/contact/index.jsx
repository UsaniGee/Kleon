import React from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { PiPhoneBold } from 'react-icons/pi';

const Contact = () => {
  return (
    <div className='md:pt-[110px] pt-[120px]'>
      <div className='bg-black relative'>
      <img className='h-[400px] md:h-[350px] opacity-65 w-full object-cover' src="assets/AboutUss.jpg" alt="AboutUs" />
      <div className='grid gap-10 lg:mr-10 place-items-center absolute top-2 p-10 w-full'>
        <h1 className='text-3xl lg:text-5xl font-bold text-[#D39D55] dar:text-inherit'>Contact Us</h1>
        <h3 className='text-xl lg:text-2xl text-white font-bold text-center'> Reach out to us for inquiries, collaborations, or to discuss your project needs.</h3>
      </div>
      </div>

    
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className='grid items-center'>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Contact Information</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">Location:</h3>
            <div className="ml-4">
             
              <p className="mt-2 text-gray-600 dark:text-gray-300">Abuja Office:</p>
              <p className="text-gray-600 dark:text-gray-300">Ring Road, Jabi. Abuja.</p>
            </div>
          </div>
          <div className="mb-4">
            <a href="tel:+23407049324714">
            <h3 className="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2"><PiPhoneBold /> Call Us:</h3>
            <p className="text-gray-600 dark:text-gray-300">0700 225 5282</p>
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2"><IoMailOutline /> Send Us a Mail:</h3>
            <a href="mailto:supports@kleon.tech">
            <p className="text-gray-600 dark:text-gray-300">supports@kleon.tech</p>
            </a>
           <a href="mailto:info@kleon.tech">
           <p className="text-gray-600 dark:text-gray-300">info@kleon.tech</p>
           </a>
          </div>
        </div>

        {/* Image/Map Section (You can choose one or both) */}
        <div>
          {/* Option 1: Image */}
          <img src="assets/WhatAreWeAbout.jpg" alt="Contact Illustration" className=" aspect-squar object-cover rounded-lg shadow-md" /> {/* Replace with your image */}

          {/* Option 2: Google Maps Embed (More complex, requires setup) */}
          {/*<iframe
            src="https://www.google.com/maps/embed?..." // Your Google Maps embed URL
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>*/}
        </div>
      </div>
    </div>
  );
};

export default Contact;