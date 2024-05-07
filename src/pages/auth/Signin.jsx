import React from 'react'
import { NavLink } from 'react-router-dom'

function Signin() {
  return (
   <>
    <div className='h-screen flex justify-center items-center '>
        <div className='xl:w-[500px] shadow-xl rounded-xl p-10 bg-gray-200 bg-opacity-25 '>
            <div className='mb-8'>
               <h1 className='text-center font-extrabold text-2xl text-indigo-600'>Sign in</h1>
            </div>
            <div className='mb-3'>
               <input type="text" className='w-full py-3 px-4 border outline-none rounded-xl' placeholder='Enter your email ' />
            </div>
            <div className='mb-3'>
               <input type="text" className='w-full py-3 px-4 border outline-none rounded-xl'  placeholder='Enter your password ' />
            </div>
            <div className='mb-3'>
               <button type="button" className='w-full py-3 px-4 border outline-none rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-md' >Sign in</button>
            </div>

            <div className='mb-8 flex justify-center items-center'>
              <NavLink to={"/signup"} >Don't Have an account? <span className="hover:text-indigo-600 text-indigo-500">Sign Up</span></NavLink>
            </div>
        </div>
    </div>
   </>
  )
}

export default Signin