import React from 'react'
import Button from './Button'
function Header() {
  function handleChange(){
    alert("hi")
  }
  document.title = "Dashboard"
  return (
   <>
   {/* <img src="https://cdn.dribbble.com/userupload/2837346/file/original-6017020585d1f558e1a2fc67274b7ca0.png?resize=752x564&vertical=center" alt="" /> */}
   <div className=' h-screen grid grid-cols-2 items-center'>
     <div>
        <h1>welcome</h1>
        <Button onClick={handleChange} style={{backgroundColor: "black", color: 'white'}}>
          Download !
        </Button>
     </div>
     <div>
        <img src="https://www.binaryfolks.com/media/blog/Android%20App%20development/5035108%20(1).png" alt="" />
     </div>
   </div>
   </>
  )
}

export default Header