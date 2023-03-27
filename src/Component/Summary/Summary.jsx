import React from 'react';

const Summary = (propos) => {
     
     const {Card}=propos;
     console.log(Card);
     let totolprice=0;
     let shipping=0
     for (const item of Card) {
         
          totolprice=totolprice +item.price;
          shipping=shipping +item.shipping;
     }

     const tex=totolprice *7/100;
  
     const grandtotal=totolprice +tex + shipping;
     return (
          <div>
                <h1> Order Summary </h1>
                <p> Selected item: {Card.length} </p>
                <p> totolprice Price:  ${totolprice} </p>
                <p> Total Shipping Charge: ${shipping.toFixed(2)} </p>
                <p> Tax:  ${tex} </p>
                <h2>Grand Total: ${grandtotal.toFixed(2)} </h2>
          </div>
     );
};

export default Summary;