import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

  const [visible,setVisible]= useState(false);
const { setShowSearch ,getCartCount} = useContext(ShopContext);

  return (
<div className="flex items-center justify-between px-0 py-0 font-medium ">
  <Link to='/'>  <img src={assets.logo} className='w-24 h-auto' alt="" /></Link>

    <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>

            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>

              <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>

              <NavLink to='/about' className='flex flex-col gap-1 itmes-center'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>

              <NavLink to='/contact' className='flex flex-col gap-1 itmes-center'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
     </ul>
<div className="flex items-center gap-6">
  {/* Search Icon */}
  <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

  {/* Profile Dropdown */}
  <div className="relative group">
   <Link to='/login'><img
      className="w-5 cursor-pointer"
      src={assets.profile_icon}
      alt="Profile"
    /></Link> 

    {/* Dropdown Menu */}
    <div className="absolute right-0 hidden pt-4 group-hover:block">
      <div className="flex flex-col w-40 gap-2 px-5 py-3 text-gray-500 rounded-md shadow-md bg-slate-100">
        <p className="cursor-pointer hover:text-black">My Profile</p>
        <p className="cursor-pointer hover:text-black">Orders</p>
        <p className="cursor-pointer hover:text-black">Logout</p>
      </div>
    </div>
  </div>
  <Link to='/cart' className='relative'>
    <img src={assets.cart_icon} className='w-5 min-w-5 ' alt="" />
   <p className="absolute right-[-5px] bottom-[-5px] w-4 aspect-square text-center leading-4 bg-black text-white rounded-full text-[8px]">{getCartCount()}</p>
  </Link>
  
  <img   onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'  alt="" />
  
</div>

{/* sidebar menu for small screeen */}

<div
  className={`absolute top-0 right-0 h-full overflow-hidden bg-white z-50 transition-all duration-300 ${
    visible ? 'w-full sm:w-64' : 'w-0'
  }`}
>
  <div className="flex flex-col text-gray-600">
    {/* Back Button */}
    <div
      onClick={() => setVisible(false)}
      className="flex items-center gap-4 p-3 border-b cursor-pointer"
    >
      <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
      <p>Back</p>
    </div>

    {/* Navigation Links */}
    <NavLink
      to="/"
      onClick={() => setVisible(false)}
      className="py-2 pl-6 border-b hover:bg-gray-50"
    >
      HOME
    </NavLink>

    <NavLink
      to="/collection"
      onClick={() => setVisible(false)}
      className="py-2 pl-6 border-b hover:bg-gray-50"
    >
      COLLECTION
    </NavLink>

    <NavLink
      to="/about"
      onClick={() => setVisible(false)}
      className="py-2 pl-6 border-b hover:bg-gray-50"
    >
      ABOUT
    </NavLink>

    <NavLink
      to="/contact"
      onClick={() => setVisible(false)}
      className="py-2 pl-6 border-b hover:bg-gray-50"
    >
      CONTACT
    </NavLink>
  </div>
</div>


</div>

  

  ) 
}

export default Navbar
