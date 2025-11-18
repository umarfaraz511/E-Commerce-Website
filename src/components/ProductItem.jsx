import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// The ProductItem component displays an individual product card.
// It shows the product image, name, and price, and links to the product's detail page.
// The currency symbol is taken from the global ShopContext.
const ProductItem = ({ id, image, name, price }) => {

  // Access shared data (like currency) from ShopContext
  const { currency } = useContext(ShopContext);

  return (
    // Wrap the entire product item in a Link to its product detail page
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        {/* Product image with smooth zoom-in effect on hover */}
        <img
          className='transition ease-in-out hover:scale-110'
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product name */}
      <p className='pt-3 pb-1 text-sm'>{name}</p>

      {/* Product price with currency symbol */}
      <p className='font-mono text-medium'>
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem
