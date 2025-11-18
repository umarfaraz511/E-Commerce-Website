import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'; // adjust path if needed


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-4 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-3 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">

          <p>FARAZE is a contemporary fashion brand built on bold design, premium craftsmanship, and modern identity. We believe clothing should empower you—helping you express confidence, individuality, and effortless style. Every collection is thoughtfully created with attention to detail.</p>
          <p>At FARAZE, our commitment goes beyond fashion. We focus on quality, comfort, and authenticity, ensuring every product reflects our dedication to excellence. As we continue to evolve, our mission remains constant: to inspire self-expression and celebrate personal style through designs that speak for themselves.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at FARAZE is to redefine modern style with timeless, high-quality fashion.
              We aim to create pieces that inspire confidence and celebrate individuality.
                With a commitment to craftsmanship and detail, we deliver products made to last.
                  At FARAZE, we strive to make premium fashion accessible to everyone.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance: </b>
          <p className="text-gray-600 text-center md:text-left">
  We ensure every FARAZE product meets strict quality standards before it reaches you.  
  Each piece is carefully crafted, inspected, and tested for durability and comfort.  
  Our commitment to quality ensures you receive fashion you can trust and wear with pride.
</p>

        </div>

           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
          <p className="text-gray-600 text-center md:text-left">
  FARAZE makes shopping effortless with a seamless online experience.  
  Our products are designed for easy care, comfort, and everyday wear.  
  We aim to provide style that fits effortlessly into your lifestyle.
</p>

        </div>


         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service: </b>
    <p className="text-gray-600 text-center md:text-left">
  At FARAZE, we prioritize your satisfaction every step of the way.  
  Our team is dedicated to providing prompt, helpful, and friendly support.  
  We ensure your shopping experience is smooth, enjoyable, and worry-free.
</p>

        </div>

      
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
