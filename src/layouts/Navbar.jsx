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
import { useDispatch } from 'react-redux'
import { addbreadcrumb } from '../slices/breadCrumbSlice'
import ProductOne from '../assets/product1.png'




const Navbar = () => {
  let [dropdown, setDropdown] = useState(false)
  let [cartdropdown, setCartDropdown] = useState(false)
  let dispatch=useDispatch()

  let handleBreadCrumb=(name)=>{
    dispatch(addbreadcrumb(name))
  
    
  }

 
  return (
    <nav className='pt-10 pb-4 border-[#9a9a9a4d] border'>
      <Container>
        <Flex>
          <div className='w-3/12'>
            <Image src={Logo} />
          </div>
          <div className='w-5/12 '>
            <ul className='flex gap-x-12 cursor-pointer'>
              <Link onClick={()=>handleBreadCrumb("Home")} to='/'><ListItem text="Home" /></Link>
              <Link onClick={()=>handleBreadCrumb("Cart")} to='/cart'> <ListItem text="Cart" /></Link>
              <Link onClick={()=>handleBreadCrumb("Checkout")} to='/checkout'><ListItem text="Checkout" /></Link>
              <Link onClick={()=>handleBreadCrumb("Contact")} to='/contact'><ListItem text="Contact" /></Link>
              <Link onClick={()=>handleBreadCrumb("About")} to='/about'><ListItem text="About" /></Link>


            </ul>
          </div>
          <div className='w-4/12 pl-10 relative'>
            <Flex className='items-center justify-between'>
              <div className='relative w-[243px] bg-[#F5F5F5]'>
                <input className='w-full py-1 pl-4 pr-7  placeholder:text-xs' type="text" placeholder='What are you looking for?' />
                <IoSearchOutline className='absolute top-[9px] right-2 text-base' />
              </div>
              <IoIosHeartEmpty className='text-xl' />


             <IoCartOutline onClick={()=>setCartDropdown(!cartdropdown)} className='text-xl' />
             {
              cartdropdown &&
             <div className='absolute top-12 left-0 z-50 w-[400px] h-[80vh] overflow-y-scroll bg-primary1'>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-sm font-semibold font-pop'>
                <li>Image:</li>
                <li>Name:</li>
                <li>Quantity:</li>
                <li>SubTotal:</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
            
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
            
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
            
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
            
              <ul className='border-b border-black pb-4 flex justify-between items-center my-5 mx-5 text-black text-xs font-normal font-pop'>
                <li><Image className='w-[35px] h-[35px]' src={ProductOne}/></li>
                <li>Product One</li>
                <li className='border border-black py-1 px-3'>
                  <button className='mr-2'>-</button>
                  <button>1</button>
                  <button className='ml-2'>+</button>
                  </li>
                <li>60$</li>
              </ul>
            
             </div>
             }








              <div onClick={()=>setDropdown(!dropdown)} className='w-[25px] h-[25px] bg-[#DB4444] rounded-full flex justify-center items-center'>
                <TbUser className='text-white' />
              </div>
              {
                dropdown &&
                <div className='z-100 w-[200px] py-[20px] absolute top-full right-5 bg-red-500'>
                  <ul>
                    <li>login</li>
                    <li>registration</li>
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