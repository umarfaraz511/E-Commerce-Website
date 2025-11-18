import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

// The LatestCollection component displays a grid of the latest products.
// It takes the first 10 products from the global ShopContext and renders them using the ProductItem component.
const LatestCollection = () => {

  // Access shared data (products) from the ShopContext
  const { products } = useContext(ShopContext);

  // Local state to store the latest (first 10) products
  const [latestProducts, setLatestProducts] = useState([]);

  // Load the latest 10 products when the component first mounts
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]); // added products as dependency for better reactivity

  return (
    <div className='my-10'>
      {/* Section title and description */}
      <div className='py-8 text-3xl text-center'>
        <Title text1={'latest'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
Unveil the newest trends from FARAZE.
Designed with precision and crafted for perfection.
Your next statement piece begins here.
        </p>
      </div>

      {/* Product grid */}
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item._id || index} // use _id if available, fallback to index
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
