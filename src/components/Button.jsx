import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`bg-secondary py-4 px-12 text-base text-primary font-pop font-medium rounded-sm ${className}`}>{text}</button>
  )
}

export default Button
 