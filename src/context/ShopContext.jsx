import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a global context to share shop-related data (like products, currency, and delivery fee)
// across the entire React app without having to pass props manually between components.
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  // Common shop data used throughout the app
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch, setShowSearch]= useState(false)
  const [cartItem,setCartItem] = useState({});
  const navigate = useNavigate();

// addToCart function select size

  const addToCart = async (itemId, size) => {

    if(!size) 
      {
          toast.error('Select Peoduct Size');
          return;
    }
    
    let cartData =structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size] ) {
         cartData[itemId] [size] += 1;

      }

      else{
        cartData[itemId][size] =1;
      }

    }

    else{
      cartData[itemId] ={};
      cartData[itemId][size]=1;
    }

    setCartItem(cartData);

  }

  const getCartCount = ()=>{
    let totalCount =0;
    for(const items in cartItem){
      for(const item in cartItem[items]){

        try{
          if (cartItem[items][item] >0){
              totalCount += cartItem[items][item];
          }
        } catch(error){

        }
      }
    }

    return totalCount;

  }

  // card data modify

  const updateQuantity = async (itemId,size,quantity)=> {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] =quantity;
    setCartItem(cartData);
  }

// get cart amount

const getCartAmount = () =>{
  let totalAmount =0;
  for( const items in cartItem){
    let itemInfo= products.find((products)=> products._id === items);
    for(const item in cartItem[items]){
    try {
      if(cartItem[items][item] > 0){
        totalAmount+= itemInfo.price * cartItem[items][item]
      }
    } catch (error) {
      
    }
  
  }
 }  
 return totalAmount;
}


  // Combine all shared values into one object
  const value = {
    products,
    currency,
    delivery_fee,
search, setSearch, showSearch, setShowSearch, cartItem, addToCart
, getCartCount, updateQuantity,getCartAmount, navigate


  };




  // useEffect(()=> {

  //   console.log(cartItem);

  // },[cartItem])

  // Provide the context to all child components that need access to shop data
  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
