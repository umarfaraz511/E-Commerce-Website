import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // FIXED useEffect
  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  // Prevent UI crash
  if (!productData) {
    return <div className='text-center py-20'>Loading...</div>;
  }

  return (
    <div className='border-t-2 pt-10'>
      {/* Product Section */}
      <div className='flex gap-12 flex-col sm:flex-row'>
        
        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className='w-[24%] sm:w-full sm:mb-3 cursor-pointer'
                alt=''
              />
            ))}
          </div>

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3.5' />
            <img src={assets.star_icon} className='w-3.5' />
            <img src={assets.star_icon} className='w-3.5' />
            <img src={assets.star_icon} className='w-3.5' />
            <img src={assets.star_dull_icon} className='w-3.5' />
            <p className='px-2'>{122}</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>

          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Sizes */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? 'border-green-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return & exchange within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            E-commerce is the buying and selling of goods or services online,
            offering convenience and global reach.
          </p>
          <p>
            It has become a major part of modern business, providing fast and
            efficient shopping experiences.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
