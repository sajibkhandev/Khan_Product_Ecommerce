import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const CategoryList = ({type,text,className,classNameForIcon}) => {
    
  return (
    <li className={`text-base text-black font-pop font-normal list-none cursor-pointer ${className}`}>{text} {type=="true" && <IoIosArrowForward className={`inline-block ml-13 ${classNameForIcon}`}/>}</li>
  )
}

export default CategoryList
