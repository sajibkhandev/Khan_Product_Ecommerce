import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Flex from './Flex';


const Language = () => {
  return (
    <Flex className='gap-x-1'>
        <button className='text-sm text-primary font-normal font-pop'>Eiglish </button>
        <IoIosArrowDown className='text-primary'/>
        
    </Flex>

  )
}

export default Language