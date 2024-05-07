import React from 'react'
import Button from '../../components/Button'

function Dashboard() {
  document.title = "Dashboard"

  function submitContact(){
      alert("Working soon...")
  }
return (
 <>
 <div className=' grid xl:grid-cols-2 grid-cols-1 '>
      <div className='flex justify-center items-center xl:mt-0 mt-10'>
         <div>
          <h1 className='text-[50px] font-extrabold'>Cabin In The <br></br> Woods But In <br></br> A Good Way!</h1>
          <p className='text-gray-600 font-semibold'>Now you can enjoy camping anyware and anytime <br></br> and of course it's safe withs us.</p>
            <div className='mt-5'>
              <Button style={{backgroundColor: "black", color: "white", borderRadius: "40px",} }>
                Get Started
              </Button>
            </div>
          </div>
      </div>
      
      <div className='p-5'>
         <img src="https://localhappinez.com/wp-content/uploads/2022/02/iPhone-1-1.png" className='' alt="" />
      </div>      
      </div>
 </>
)
}

export default Dashboard