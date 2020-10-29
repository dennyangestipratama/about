import React from 'react'

const Button = ({ text, disabled, onClick, arrow }) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className='button'
      >
         {text} {arrow ? <div>&gt;</div> : null}
      </button>
   )
}

export default Button