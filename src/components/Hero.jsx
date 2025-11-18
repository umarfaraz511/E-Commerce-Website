import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero left side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            {/* Horizontal line */}
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            {/* Title */}
            <p className="text-sm font-medium md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className='text-3xl prata-regular sm:py-3 lg:text-5xl leadind-relaxed'>Latest Arrivals</h1>
          <div className='items-start gap-2 flwx'>
            <p className='font-semibold text-s md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bd-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side  */}
      <img  className='w-full sm:w-1/2' src={ assets.hero_img} alt="" />
</div>
  )
}

export default Hero
