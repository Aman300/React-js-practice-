import React, { useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { NavLink } from 'react-router-dom'

function CategoryDetails() {
  document.title = "CategoryDetails"

  function submitContact(){
      alert("Working soon...")
  }

  const [show, setShow] = useState(false)

  function showHide(e){
    if(show){
        setShow(false)
    }else{
        setShow(true)
    }
  }

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
    {
        id: 7,
        product_name: "Broccoli",
        image: "https://pngimg.com/uploads/broccoli/small/broccoli_PNG72859.png",
        qty: "500 gm",
        price: 70,
        dis: 0,
    },
    {
        id: 8,
        product_name: "Egg",
        image: "https://pngimg.com/uploads/egg/small/egg_PNG25.png",
        qty: "6 pic",
        price: 25,
        dis: 10,
    },
    {
        id: 9,
        product_name: "Cucumber",
        image: "https://pngimg.com/uploads/cucumber/small/cucumber_PNG12629.png",
        qty: "500 gm",
        price: 25,
        dis: 5,
    },
    {
        id: 10,
        product_name: "Meat",
        image: "https://pngimg.com/uploads/meat/small/meat_PNG3912.png",
        qty: "1 kg",
        price: 600,
        dis: 0,
    },
    {
        id: 11,
        product_name: "Spinach",
        image: "https://pngimg.com/uploads/spinach/small/spinach_PNG6.png",
        qty: "500 gm",
        price: 35,
        dis: 0,
    },
    {
        id: 12,
        product_name: "Mango",
        image: "https://pngimg.com/uploads/mango/small/mango_PNG9168.png",
        qty: "1 kg",
        price: 150,
        dis: 20,
    },
];

return (
 <>
   <div className='px-5 mt-2'>
        <div className='flex justify-between'>
            <h1 className='text-2xl font-bold text-current'>Gromuse / All category</h1>
            {/* <NavLink to={"/"} className="text-rose font-semibold flex justify-between gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>home 

            </NavLink> */}
        </div>
        <div className='flex justify-between items-center mt-5'>
            <div className='grid grid-cols-7 gap-2'>
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full  justify-center gap-x-1.5 rounded-3xl bg-current text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    All Category
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    Price
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    Review
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    Color
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    Matraial
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                    <div className="relative inline-block text-left">
                    <div>
                        <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                        onClick={(e) => showHide(e)}
                        >
                        Offer
                        <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </button>
                    </div>
                        {
                            show ? (<div
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1" role="none">
                                {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                <a
                                    href="#"
                                    className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                >
                                    Price (Low to high)
                                </a>
                                <a
                                    href="#"
                                    className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-1"
                                >
                                    Price (High to low)
                                </a>
                                <a
                                    href="#"
                                    className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-2"
                                >
                                    Name (A to Z)
                                </a>
                                {/* <form method="POST" action="#" role="none">
                                    <button
                                    type="submit"
                                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-3"
                                    >
                                    Sign out
                                    </button>
                                </form> */}
                                </div>
                            </div>) : null
                        }
                        
                    </div>
                    <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    All Filters
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
                </div>
                
                <div className="relative inline-block text-left">
                <div>
                    <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-3xl bg-white text-current px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={(e) => showHide(e)}
                    >
                    Sort by
                    <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </button>
                </div>
                    {
                        show ? (<div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                            >
                                Price (Low to high)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                            >
                                Price (High to low)
                            </a>
                            <a
                                href="#"
                                className="text-gray block px-4 py-2 text-sm hover:text-current font-semibold"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-2"
                            >
                                Name (A to Z)
                            </a>
                            {/* <form method="POST" action="#" role="none">
                                <button
                                type="submit"
                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-3"
                                >
                                Sign out
                                </button>
                            </form> */}
                            </div>
                        </div>) : null
                    }
                    
                </div>
            </div>
        <div className='mt-10 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-2'>
        {products.map(Product => (
            <ProductCard key={Product.id} data={Product} />
        ))}

        </div>
    </div>
 </>
)
}

export default CategoryDetails