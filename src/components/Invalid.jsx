import React from 'react'

const Invalid = ({ className, text }) => {
  return (
    <span className={`${className} font-pop font-normal text-base text-opblack4 pb-0 mb-[-22px]`}>
      {text}
      <span className="text-red-600 ">*</span>
    </span>
  )
}

export default Invalid
