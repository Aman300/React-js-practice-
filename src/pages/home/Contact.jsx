import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../components/Button'

function Contact() {
    document.title = "Contact"

    function submitContact(){
        alert("Working soon...")
    }
  return (
   <>
   <div className=' grid xl:grid-cols-2 grid-cols-1 '>
        <div className='flex justify-center items-center'>
            <h1 className='text-[50px] font-extrabold'>Contact Us !</h1>
        </div>
        <div className='p-5'>
            <form >
           
            <div className='mb-8'>
               <h1 className='text-center font-extrabold text-2xl text-black'>Contact Us !</h1>
            </div>
            <div className='mb-3'>
               <input type="text" className='w-full py-3 px-4 border outline-none rounded-xl' placeholder='Enter your name ' />
            </div>
            <div className='mb-3'>
               <input type="email" className='w-full py-3 px-4 border outline-none rounded-xl' placeholder='Enter your email ' />
            </div>
            <div className='mb-3'>
               <textarea type="text" className='w-full py-3 px-4 border outline-none rounded-xl'  placeholder='Type your message..' />
            </div>
            <div className='mb-3'>
                <Button style={{backgroundColor: "white", color: 'black'}} onClick={submitContact}>
                    Submit
                </Button>
               
            </div>
            </form>
        </div>

   </div>
   </>
  )
}

export default Contact