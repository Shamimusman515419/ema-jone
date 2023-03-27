import React from 'react';
import './Card.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
   
 
   const handleAddToCart=props.ProductCardHendelaer;
  
     const {name, seller,img,price,ratings}=props.products;
     return (
     <div className=' product'>
     <div>
       <img src={img} alt="" />
      <div className='product-info'>
      <h2> {name}</h2>   
       <p>Price: ${price}</p>   
       <p>Manufacturer: {seller}</p>   
       <p>Rating: {ratings}</p>   
      </div>
      <button onClick={()=>{handleAddToCart(props.products)}} className='btn-cart'>
         Add to Cart
         <FontAwesomeIcon className=' fonticon' icon={faShoppingCart} />
         </button>
      </div> 
               
     </div>
     );
};

export default Card;