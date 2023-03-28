import React from 'react';

const Summary = (propos) => {
     
     const {Card}=propos;
    
     let totolprice=0;
     let shipping=0;
    let quantity=0;
     for (const product of Card) {
          product.quantity=product.quantity || 1;
          totolprice=totolprice + product.price * product.quantity ;
          shipping=shipping +product.shipping;
         
          quantity=quantity + product.quantity
     }

     const tex=totolprice *7/100;
  
     const grandtotal=totolprice +tex + shipping;
     return (
          <div>
                <h1> Order Summary </h1>
                <p> Selected item: {quantity} </p>
                <p> totolprice Price:  ${totolprice} </p>
                <p> Total Shipping Charge: ${shipping.toFixed(2)} </p>
                <p> Tax:  ${tex.toFixed(2)} </p>
                <h2>Grand Total: ${grandtotal.toFixed(2)} </h2>
          </div>
     );
};

export default Summary;