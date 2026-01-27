import React from 'react'
import Image from './Image'
import { RiCloseCircleFill } from 'react-icons/ri'

const ProductsCencel = ({src,ImgClass,alt}) => {
  return (
      <div className='w-13.5 h-13.5 relative flex justify-center items-center'>
      <Image src={src} className={ImgClass} alt={alt}/>
      <div className='bg-white rounded-full w-6 h-4 absolute -top-[4px] -left-[10px]'><RiCloseCircleFill  className='text-2xl  text-secondary'/></div>
    </div>
  )
}

export default ProductsCencel
