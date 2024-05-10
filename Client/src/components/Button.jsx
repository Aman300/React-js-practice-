import React from 'react'

function Button({style, children, onClick}) {
  return (
    <button onClick={onClick} style={style} className='py-3 px-4 '>
      {children}
    </button>
  )
}

export default Button