import React from 'react';
import ProductCard from '../../components/ProductCard';
import { NavLink } from 'react-router-dom';

function Product() {
    const products = [
        {
          id: 1,
          product_name: "Beetroot (Chukandar)",
          image: "https://pngfre.com/wp-content/uploads/Beet-9.png",
          qty: "500 gm.",
          price: 60,
          dis: 10, 
        },
        {
          id: 2,
          product_name: "Apple",
          image: "https://pngimg.com/uploads/apple/apple_PNG12443.png",
          qty: "1 kg",
          price: 100,
          dis: 5,
        },
        {
          id: 3,
          product_name: "Banana",
          image: "https://pngimg.com/uploads/banana/small/banana_PNG825.png",
          qty: "6 pieces",
          price: 30,
          dis: 0,
        },
        {
          id: 4,
          product_name: "Tomato",
          image: "https://pngimg.com/uploads/tomato/tomato_PNG12542.png",
          qty: "1 kg",
          price: 40,
          dis: 0,
        },
        {
          id: 5,
          product_name: "Orange",
          image: "https://pngimg.com/uploads/orange/small/orange_PNG811.png",
          qty: "1 kg",
          price: 80,
          dis: 15,
        },
        {
          id: 6,
          product_name: "Carrot",
          image: "https://pngimg.com/uploads/carrot/carrot_PNG4985.png",
          qty: "500 gm",
          price: 50,
          dis: 0,
        },
    ];
        

  return (
   
     <div className='px-5 mt-10'>
        <div className='flex justify-between'>
            <h1 className='text-2xl font-bold text-current'>You Might Need</h1>
            <NavLink className="text-rose font-semibold flex justify-between gap-2">See more <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </NavLink>
        </div>
        <div className='mt-10 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2'>
        {products.map(Product => (
            <ProductCard key={Product.id} data={Product} />
        ))}

        </div>
    </div>
  );
}

export default Product;
