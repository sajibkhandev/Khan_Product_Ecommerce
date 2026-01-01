import React from 'react'
import Image from '../components/Image'
import Flex from '../components/Flex'
import Product1 from '../assets/product1.png'
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { FaStar } from "react-icons/fa";





const Card = () => {
  return (
    <div className='w-[270px] group'>
        <Flex className='relative overflow-hidden w-full h-[250px] justify-center items-center bg-[#F5F5F5] rounded-[4px]'>
            <Image src={Product1} alt="Product1"/>
            <p className=' absolute top-3 left-4 bg-[#DB4444] py-1 px-3 rounded-[4px] text-xs text-white font-pop font-normal'>-40%</p>
            <li className='absolute top-4 right-3 list-none bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center'><FaRegHeart className='text-base' /></li>
            <li className='absolute top-14 right-3 list-none bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center'><LuEye className='text-base' /></li>
            <div className='cursor-pointer bg-black py-2 w-full absolute -bottom-[40px] group-hover:bottom-0 duration-300 left-0 text-center rounded-b'><p className='text-base text-white font-medium font-pop '>Add To Cart</p></div>

        </Flex>
        <div>
        <h4 className='text-base text-black font-medium font-pop pt-4 pb-2'>HAVIT HV-G92 Gamepad</h4>
        <p className='text-base text-[#DB4444] font-medium font-pop'>$120 <span className='text-[#00000080]'><del className='text-[#00000080]'> $160</del></span></p>
        <Flex className='items-center pt-2 gap-x-2'>
            <ul className='flex gap-x-1  !p-0'>
            <li><FaStar className='text-[#FFAD33] text-sm list-none'/></li>
            <li><FaStar className='text-[#FFAD33] text-sm list-none'/></li>
            <li><FaStar className='text-[#FFAD33] text-sm list-none'/></li>
            <li><FaStar className='text-[#FFAD33] text-sm list-none'/></li>
            <li><FaStar className=' text-sm list-none'/></li>
            
        </ul>
        <p className='text-[#00000080] text-xs font-pop font-normal'>(88)</p>
        </Flex>
        </div>

    </div>
  )
}

export default Card