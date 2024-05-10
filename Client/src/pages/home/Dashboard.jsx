import React from 'react'
import Button from '../../components/Button'
import Category from './Category'
import Product from './Product'

function Dashboard() {
  document.title = "Dashboard"

  function submitContact(){
      alert("Working soon...")
  }
return (
 <>
 <div className=' grid xl:grid-cols-1 grid-cols-1'>
  <div className='px-5'>
    <div className='w-full bg-[#064d4f] h-[310px] rounded-xl '>
      <div className='grid xl:grid-cols-2 px-20'>
        <div className='flex justify-start items-center'>
          <div>
          <h1 className='mb-2 text-2xl font-black text-white'>We Bring the Store <br></br>to your door</h1>
          <p className='mb-2 text-white text-sm'>Food grown by respecting the cycles of nature, with no chemical pesticides or synthetic or genetically modified fertilisers, rotating crops to use up all nutrients in soil.</p>
          <button className='text-[#064d4f] font-semibold py-2 px-8 bg-green-300 rounded-lg'>Shop now</button>
          </div>
        </div>
        <div className='flex justify-end mt-3'>
          <img className='size-72' src="https://static.vecteezy.com/system/resources/previews/034/922/757/non_2x/ai-generated-vegetables-in-a-paper-bag-free-png.png" alt="" />
        </div>
      </div>
    </div>
  </div>      
</div>

 <Category/>

<Product/>
 </>
)
}

export default Dashboard