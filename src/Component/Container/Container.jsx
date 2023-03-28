import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

 useEffect(()=>{
     let addCard=[];
   const stogetCard=getShoppingCart();
    for( const id in stogetCard){
      const addproduct=  Shoping.find(product=>product.id ==id);
       if(addproduct){
        const quntity=stogetCard[id];
        addproduct.quantity=quntity
        addCard.push(addproduct);
       }

       SetCart(addCard) 

      // console.log( "product",addproduct)
   
    }
  
    
    
 },[Shoping])


const ProductCardHendelaer=(product)=>{
      const products=[...Cart,product]
      SetCart(products);
      addToDb(product.id)
      
}


     return (
     <div className=' mainContaienr'>
       

       <div className='products'>
          {
            Shoping.map((shop)=> <Card products={shop} key={shop.id}
            ProductCardHendelaer={ProductCardHendelaer} ></Card>)
          }
       </div>

          
      <div className=' summatry'>
          
         <Summary Card={Cart}></Summary>
      </div>

      </div>
     );
};

export default Container;