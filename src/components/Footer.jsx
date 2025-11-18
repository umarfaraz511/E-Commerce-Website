import React from 'react'
import { assets } from '../assets/assets'

// Footer component — displays company info, navigation, and contact details.
const Footer = () => {
  return (
    <div className='mt-40 text-sm text-gray-700'>
      {/* Main Footer Grid */}
      <div className='flex flex-col gap-14 my-10  mt-40 sm:grid grid-cols-[3fr_1fr_1fr]'>
        
        {/* --- Column 1: Logo & About --- */}
        <div>
          <img src={assets.logo} className='w-20 mb-5' alt="Company Logo" />
          <p className='w-full leading-relaxed text-gray-600 md:w-2/3'>
          We’re here to make your shopping experience better.
Join our community for news, deals, and more.
FARAZE — Fashion you can trust.
          </p>
        </div>

        {/* --- Column 2: Company Links --- */}
        <div>
          <p className='mb-5 text-xl font-semibold text-gray-800'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='transition cursor-pointer hover:text-black'>Home</li>
            <li className='transition cursor-pointer hover:text-black'>About Us</li>
            <li className='transition cursor-pointer hover:text-black'>Delivery</li>
            <li className='transition cursor-pointer hover:text-black'>Privacy Policy</li>
          </ul>
        </div>

        {/* --- Column 3: Contact / Get In Touch --- */}
        <div>
          <p className='mb-5 text-xl font-semibold text-gray-800'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>📞 +92-301-399-9068</li>
            <li>📧 umarfaraz511@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Copyright Bar --- */}
      <hr className='border-gray-300' />
      <p className='py-5 text-xs text-center text-gray-500'>
        © 2025 faraze.com — All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer

