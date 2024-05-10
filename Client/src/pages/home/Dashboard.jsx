import React from 'react'
import Button from '../../components/Button'
import Category from './Category'

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

 <div className='px-5 mt-10'>
    <h1 className='text-2xl font-bold text-[#064d4f]'>You Might Need</h1>

    <div className='mt-10'>

      <div className='w-48 h-[320px] bg-white rounded-xl'>
          <div className='p-4'>
            <img src="https://pngfre.com/wp-content/uploads/Beet-9.png" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|} mb-3" alt=""/>
            <p className='text-sm text-center font-semibold text-[#064d4f] mb-1'>Beetroot (Chukandar)</p>
            <p className='text-center text-sm font-semibold text-gray-500 mb-3'>500 gm.</p>
            <p className='text-center text-xl font-extrabold text-[#064d4f]'>₹ 17.
             <text class="text-sm text-[#064d4f]">99</text>
            </p>
            <div className='py-1 bg-[#f1f4eb] text-center mt-3  rounded-lg'>
                <button className='text-[#064d4f] text-3xl text-center'>+</button>                
            </div>
          </div>
      </div>

    </div>
 </div>
 </>
)
}

export default Dashboard