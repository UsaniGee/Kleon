import React from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20  py-20 px-6 md:px-24 bg-[#D6CFB4] dark:bg-inherit">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Atb Tech */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D39D55]">About Kleon</h4>
          <p className="text-sm">
          Kleon is a tech service provider that offers a comprehensive suite of services like Software Devlopment, Data Analytics, Cybersecurity, AI/ML and Blockchain Solutions to businesses in Africa and Asia. We utilize a hybrid method of operation to bolster growth across Nigeria, Africa and Asia. Our mission is to empower African and Asian companies to leverage technology to promote growth, innovation and transformation and employ African and Asian youths creating a sustainable source of income. With our strong team of experts, we aim to become a leading technology solutions provider in Africa and Asia.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D39D55]">What We Offer</h4>
          <ul className="text-sm">
            <li>Software Development</li>
            <li>Data Analysis</li>
            <li>Cyber Security</li>
            <li>AI/ML</li>
            <li>Blockchain Development</li>
            </ul>
        </div>

        {/* Our Products */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D39D55]">Our Products</h4>
          <ul className="text-sm">
            <li>Privacy And Policy</li>
            <li></li>
            <li></li>
            <li></li> 
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#D39D55]">Other Links</h4>
          <ul className="text-sm">
            <li>Our Clients</li>
            <li>Our Partners</li>
            <Link to={'/contact-us'}><li>Contact Us</li></Link>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="assets/K.png" alt="Kleon Logo" className="h-8 mr-2" /> {/* Replace with your logo path */}
          <span className="text-xs">&copy; 2024 Kleon.</span>
        </div>

        <div className="flex space-x-4">
          {/* Fcaebook */}
          <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>

          {/* Twitter */}
          <a href="#" className="text-gray-400 hover:text-black dark:hover:text-gray-100 text-2xl">
         <RiTwitterXLine />
          </a>

          {/* LinkedIn */}
          <a href="#" className="text-gray-400 hover:text-blue-900 dark:hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/kleon_tech/" className="text-gray-400 hover:text-red-500 dark:hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;