import React, { Fragment } from 'react'

const TextArea = ({ text, id, type, required, onChange, value, cols, rows, placeholder, className }) => {
   return (
      <Fragment>
         <label className='label' htmlFor={id}>{text}</label>
         <textarea
            className={className ? className : 'textarea'}
            type={type}
            id={id}
            required={required}
            onChange={onChange}
            value={value}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
         />
      </Fragment>
   )
}

export default TextArea