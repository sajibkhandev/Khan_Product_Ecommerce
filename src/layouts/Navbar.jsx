import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import  Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";




const Navbar = () => {
  return (
    <nav className='pt-10 pb-4'>
        <Container>
            <Flex>
                <div className='w-3/12'>
                <Image src={Logo}/>
                </div>
                <div className='w-5/12 '>
                <ul className='flex gap-x-12 cursor-pointer'>
                    <ListItem text="Home"/>
                    <ListItem text="Contact"/>
                    <ListItem text="About"/>
                    <ListItem text="Sign Up"/>
                </ul>
                </div>
                <div className='w-4/12 pl-10'>
                   <Flex className='items-center justify-between'>
                    <div className='relative w-[243px] bg-[#F5F5F5]'>
                    <input className='w-full py-1 pl-4 pr-7  placeholder:text-xs' type="text" placeholder='What are you looking for?'/>
                    <IoSearchOutline className='absolute top-[9px] right-2 text-base'/>
                   </div>
                   <IoIosHeartEmpty  className='text-xl'/>
                   <IoCartOutline  className='text-xl'/>
                   </Flex>



                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar