import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, onClick, arrow, to }) => {
   return (
      <Link to={to}>
         <button
            onClick={onClick}
            className='button'
         >
            {text} {arrow ? <div>&gt;</div> : null}
         </button>
      </Link>
   )
}

export default Button