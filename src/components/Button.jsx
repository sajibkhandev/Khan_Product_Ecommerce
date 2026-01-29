import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-4 px-12 text-base cursor-pointer text-primary font-pop font-medium rounded-sm
       border border-transparent hover:bg-transparent hover:border-secondary
        hover:text-secondary duration-300 ${className}`}>{text}</button>
  )
}

export default Button
 