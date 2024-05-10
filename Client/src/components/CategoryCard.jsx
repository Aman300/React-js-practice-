import React from 'react';

function CategoryCard( category) {
  return (
    <div className='w-[250px] h-20 bg-white rounded-xl flex justify-between'>
      <div className='px-4 py-2'>
        <h1 className='text-[#064d4f] text-lg font-semibold'>{category.data.title}</h1>
        <p className='text-sm text-gray-600'>{category.data.dis}</p>
      </div>
      <div className='px-4 py-4'>
        <img className='w-14' src={category.data.image} alt={category.data.title} />
      </div>
    </div>
  );
}

export default CategoryCard;
