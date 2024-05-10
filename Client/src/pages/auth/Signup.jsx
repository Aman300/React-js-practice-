import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
   <>
     <div className='h-screen flex justify-center items-center '>
        <div className='xl:w-[500px] shadow-xl rounded-xl p-10 bg-gray-200 bg-opacity-25 '>
            <div className='mb-8'>
               <h1 className='text-center font-extrabold text-2xl text-black'>Sign Up</h1>
            </div>
            <div className='mb-3'>
               <input type="text" className='w-full py-3 px-4 border outline-none rounded-xl' placeholder='Enter your name ' />
            </div>
            <div className='mb-3'>
               <input type="email" className='w-full py-3 px-4 border outline-none rounded-xl' placeholder='Enter your email ' />
            </div>
            <div className='mb-3'>
               <input type="text" className='w-full py-3 px-4 border outline-none rounded-xl'  placeholder='Enter your password ' />
            </div>
            <div className='mb-3'>
               <button type="button" className='w-full py-3 px-4 border outline-none rounded-xl bg-black hover:bg-black text-white font-semibold text-md' >Sign up</button>
            </div>

            <div className='mb-8 flex justify-center items-center'>
              <NavLink to={"/signin"} >Have an account? <span className="hover:text-black text-black">Sign In</span></NavLink>
            </div>

        </div>
    </div>
   </>
  )
}

export default Signup