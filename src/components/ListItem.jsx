import React from 'react'

const ListItem = ({ text, className }) => {
  return (
    <li className={`text-base text-black font-normal font-pop ${className}`}>{text}</li>
  )
}

export default ListItem