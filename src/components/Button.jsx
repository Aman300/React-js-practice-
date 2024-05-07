import React from 'react'

function Button({style, children, onClick}) {
  return (
    <button onClick={onClick} style={style} className='w-full py-3 px-4 border outline-none rounded-xl bg-black hover:bg-black text-white font-semibold text-md'>
      {children}
    </button>
  )
}

export default Button