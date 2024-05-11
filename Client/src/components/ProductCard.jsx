import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'animate.css';



function ProductCard( product) {
  const [count, setCount] = useState(0)
  const [animate, setAnimate] = useState(false);

  return (
    <div class='w-[200px] h-[320px] bg-white rounded-xl bottom-rounded-card'>
    <div class='p-4'>
        <NavLink to={"/product-details"} className='flex justify-center items-center'>
          <img src={product.data.image} class="w-full h-[135px] mb-3" alt={product.data.product_name}/>
        </NavLink>
        <p class='text-sm text-center font-semibold text-current mb-1'>{product.data.product_name}</p>
        <p class='text-center text-sm font-semibold text-gray mb-3'>{product.data.qty}</p>
        <p class='text-center text-xl font-extrabold text-current'>₹ {product.data.price}.
        <span class="text-sm text-current">99</span>
        </p>
        {
          count === 0 ? ( <div class='py-1 bg-[#f1f4eb] text-center mt-3 rounded-lg flex justify-center items-center'>
          <button class='text-current text-3xl text-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={(e) =>  (setCount(count + 1) , setAnimate(true))}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </button>                
      </div> ) : (<div class='py-1 bg-lightGreen text-center mt-3 rounded-lg flex justify-evenly items-center'>
            <button id="minusBtn" class='text-current text-3xl text-center mr-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={(e) => (setCount(count - 1) , setAnimate(true))}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            <span
              id="count"
              className={`text-xl text-current ${animate ? "animate__bounceIn" : ""}`}
              onAnimationEnd={() => setAnimate(false)} 
            >
              {count}
            </span>
            <button id="plusBtn" class='text-current text-3xl text-center ml-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 " onClick={(e) => (setCount(count + 1) , setAnimate(true))}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>                
        </div>)
        }
        
        

    </div>
</div>
  );
}

export default ProductCard;
