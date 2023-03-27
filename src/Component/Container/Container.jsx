import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Summary from '../Summary/Summary';
import './Container.css'

const Container = () => {
 const [Shoping,Sershoping]=useState([]);
 const [Cart,SetCart]=useState([]);

 useEffect(()=>{
     const  declare=async()=>{
          const res=await fetch("products.json");
          const data= await res.json();
          Sershoping(data);
     }
     declare()
 },[])

 


const ProductCardHendelaer=(product)=>{
      const products=[...Cart,product]
      SetCart(products);
      
}


     return (
     <div className=' mainContaienr'>
       

       <div className='products'>
          {
            Shoping.map((shop)=> <Card products={shop} key={shop.id}
            ProductCardHendelaer={ProductCardHendelaer} ></Card>)
          }
       </div>

          
      <div>
          
        <Summary Card={Cart}>  </Summary>
      </div>

      </div>
     );
};

export default Container;