import React from 'react';

function ProductCard( product) {
  return (
    <div class='w-[200px] h-[320px] bg-white rounded-xl bottom-rounded-card'>
    <div class='p-4'>
       <div className='flex justify-center items-center'>
        <img src={product.data.image} class="w-full h-[135px] mb-3" alt={product.data.product_name}/>
        </div>
        <p class='text-sm text-center font-semibold text-[#064d4f] mb-1'>{product.data.product_name}</p>
        <p class='text-center text-sm font-semibold text-gray-500 mb-3'>{product.data.qty}</p>
        <p class='text-center text-xl font-extrabold text-[#064d4f]'>₹ {product.data.price}.
        <span class="text-sm text-[#064d4f]">99</span>
        </p>
        <div class='py-1 bg-[#f1f4eb] text-center mt-3 rounded-lg'>
            <button class='text-[#064d4f] text-3xl text-center'>+</button>                
        </div>
    </div>
</div>
  );
}

export default ProductCard;
