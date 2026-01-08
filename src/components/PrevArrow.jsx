import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";


const PrevArrow = ({className, style, onClick}) => {
  return (
     <div
      className={`${className} absolute -top-[60px]  right-[50px] z-20 bg-[#F5F5F5] w-[40px] h-[40px] block rounded-full text-black flex items-center justify-center`}
     
      onClick={onClick}
      
    >
      
       <FaArrowLeft />

    </div>
  )
}

export default PrevArrow