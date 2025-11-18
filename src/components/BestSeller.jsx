import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const BestSeller = () => {

  // Access global products from ShopContext
  const { products } = useContext(ShopContext);

  // Local state for best seller products
  const [bestSeller, setBestSeller] = useState([]);

  // Filter only best seller products and limit to 5
  useEffect(() => {
    const bestProducts = products.filter((item) =>(item.bestseller));
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className='my-10'>
      {/* Section Title */}
      <div className='py-8 text-3xl text-center'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
                Unveil the newest trends from FARAZE.
Designed with precision and crafted for perfection.
Your next statement piece begins here.
        </p>
      </div>

      {/* Products Grid (optional display later) */}
          
      {/* You can map over bestSeller here like in LatestCollection */}

        <div className='grid gap-4 drid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
  
    </div>
  )
}

export default BestSeller
