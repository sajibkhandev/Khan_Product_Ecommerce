import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/logo.png'
import ListItem from '../components/ListItem'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { TbUser } from 'react-icons/tb'




const Navbar = () => {
  let [dropdown, setDropdown] = useState(false)
 
  return (
    <nav className='pt-10 pb-4 border-[#9a9a9a4d] border'>
      <Container>
        <Flex>
          <div className='w-3/12'>
            <Image src={Logo} />
          </div>
          <div className='w-5/12 '>
            <ul className='flex gap-x-12 cursor-pointer'>
              <Link to='/'><ListItem text="Home" /></Link>
              <Link to='/products'> <ListItem text="Products" /></Link>
              <Link to='/login'><ListItem text="LogIn" /></Link>
              <Link to='/signup'><ListItem text="SignUp" /></Link>
              <Link to='/about'><ListItem text="About" /></Link>


            </ul>
          </div>
          <div className='w-4/12 pl-10 relative'>
            <Flex className='items-center justify-between'>
              <div className='relative w-[243px] bg-[#F5F5F5]'>
                <input className='w-full py-1 pl-4 pr-7  placeholder:text-xs' type="text" placeholder='What are you looking for?' />
                <IoSearchOutline className='absolute top-[9px] right-2 text-base' />
              </div>
              <IoIosHeartEmpty className='text-xl' />
              <IoCartOutline className='text-xl' />
              <div onClick={()=>setDropdown(!dropdown)} className='w-[25px] h-[25px] bg-[#DB4444] rounded-full flex justify-center items-center'>
                <TbUser className='text-white' />
              </div>
              {
                dropdown &&
                <div className='z-100 w-[200px] py-[20px] absolute top-full right-5 bg-red-500'>
                  <ul>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                  </ul>
                </div>
              }

            </Flex>



          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar