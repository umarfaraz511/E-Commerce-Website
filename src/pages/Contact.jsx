import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className="w-full px-4 md:px-20">
      
      {/* Section Title */}
      <div className="text-center text-3xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Content */}
      <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-12 mb-28">
        
        {/* Image */}
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-lg"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Info Section */}
        <div className="flex flex-col justify-center items-start gap-6 md:gap-8 text-gray-600">
          
          {/* Store Info */}
          <div className="flex flex-col gap-6 py-10">
            <p className="font-semibold text-xl text-gray-800">Our Store</p>
            <p className="text-gray-500">
              999068 FARAZE HOUSE <br />
              Hasilpur, Bahawalpur
            </p>
            <p className="text-gray-500">
              Tel: +92 301 3999068 <br />
              Email: umarfaraz511@gmail.com
            </p>
          </div>

          {/* Careers Info */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-gray-800">Careers at FARAZE</p>
            <p className="text-gray-500 ">
           Your trusted destination for quality, comfort, and style.
            </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
          
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default Contact;
