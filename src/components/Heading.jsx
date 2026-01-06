import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-4xl text-black font-semibold font-pop ${className}`}>{text}</h2>
  )
}

export default Heading
