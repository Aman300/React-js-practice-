import React from 'react';
import CategoryCard from '../../components/CategoryCard';

function Category() {
  const categories = [
    {
      id: 1,
      title: "Vegetable",
      image: "https://www.svgrepo.com/show/265678/vegetables-salad.svg",
      dis: "Local vegetable"    
    },
    {
      id: 2,
      title: "Fruit",
      image: "https://www.svgrepo.com/show/265671/fruits-banana.svg",
      dis: "Fresh fruits"    
    },
    {
      id: 3,
      title: "Grains",
      image: "https://www.svgrepo.com/show/382424/barley-crop-food-grain-harvest-plant.svg",
      dis: "Healthy grains"    
    },
    {
      id: 4,
      title: "Dairy",
      image: "https://www.svgrepo.com/show/486303/milk.svg",
      dis: "Dairy products"    
    },
    {
      id: 5,
      title: "Chicken legs",
      image: "https://www.svgrepo.com/show/297758/chicken-leg-chicken.svg",
      dis: "Forozen Meal"    
    }
  ];

  return (
    <div className='mt-10 px-5 flex justify-between gap-4'>
      {categories.map(category => (
        <CategoryCard key={category.id} data={category} />
      ))}
    </div>
  );
}

export default Category;
