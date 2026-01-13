import React from 'react'


const CategoryBox = ({text,icon,className}) => {
  return (
    <div className={`group cursor-pointer hover:bg-red-400 hover:border-transparent duration-500 w-[170px] h-[145px] rounded-sm flex flex-col items-center justify-center border border-[#0000004d] ${className}`}>
        <div className='text-4xl group-hover:text-white duration-300'>{icon}</div>
        <p className='duration-300 group-hover:text-white text-base text-black font-pop font-normal pt-4 '>{text}</p>

      
    </div>
  )
}

export default CategoryBox
