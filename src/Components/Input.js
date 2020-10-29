import React, { Fragment } from 'react'

const Input = ({ text, id, type, required, onChange, value, placeholder, className }) => {
   return (
      <Fragment>
         <label className='label' htmlFor={id}>{text}</label>
         <input
            className={className ? className : 'input'}
            type={type}
            id={id}
            required={required}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
         />
      </Fragment>
   )
}

export default Input