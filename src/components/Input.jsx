import React from 'react'

const Input = ({placeholder, type='text', className}) => {
  return (
    <>
    <input type={type} placeholder={placeholder} className={`peer w-[235px] h-[50px] rounded-[4px] bg-primary1 px-4 text-base 
    outline-none border border-transparent focus:border-black text-base font-pop text-base font-normal text-opblack ${className}`} />
    </>
  )
}

export default Input