import React from 'react'
import Container from "../components/Container"
import Flex from "../components/Flex"
import Input from '../components/Input'
import Invalid from '../components/Invalid'
import Checkinput from '../components/Checkinput'
import Image from "../components/Image";
import Miniconsol from '../assets/miniconsol.png'
import Minidragon from '../assets/minidragon.png'
import { useState } from "react";
import Roundeicon from "../components/Roundicon"
import Payment from '../assets/payment.png'
import Button from '../components/Button'
const Checkout = () => {
  return (
    <section>
      <Container>
        <ul>
          <div className='w-[455px] flex justify-between font-pop font-normal text-sm text-opblack p-0 mt-[80px] cursor-pointer'>
            <li>Account</li>
            <li>/</li>
            <li>My Account</li>
            <li>/</li>
            <li>Product</li>
            <li>/</li>
            <li>View Cart</li>
            <li>/</li>
            <li className='text-black'>CheckOut</li>
          </div>
        </ul>

        <h1 className='text-black font-inter text-4xl mt-[80px] mb-[80px]'>Billing Details</h1>
        <Flex className='gap-[173px]'>


        <div className='w-5/12  flex flex-col gap-[32px]'>

          <Invalid text="First Name"/>
          <Checkinput/>

          <Invalid text="Company Name"/>
          <Checkinput/>

          <Invalid text="Street Address"/>
          <Checkinput/>
          
          <Invalid text="Apartment, floor, etc. (optional)"/>
          <Checkinput/>

          <Invalid text="Town/City"/>
          <Checkinput/>

          <Invalid text="Phone Number"/>
          <Checkinput/>

          <Invalid text="Email Address"/>
         <Checkinput/>

          <div className='w-[560px] mt-[26px] mb-[140px] flex'><input type="checkbox" className='accent-[#DB4444] mr-[15px] h-[24px] w-[24px]'/>
           <p className=' font-pop font-normal text-black text-base [word-spacing:2px] '>
            Save this information for faster check-out next time</p>
          </div>



       </div>



          <div className='w-6/12 mt-[32px] w-[422px]'>



            <div className='flex justify-between items-center mb-[32px]'>
              <div className='flex items-center'><Image src={Miniconsol}/>
                 <p className='ml-[24px] font-pop font-normal text-base '>LCD Monitor</p> 
              </div>
                 <p className='font-pop font-normal text-base'>$650</p>
            </div>
          

            <div className='flex justify-between items-center'>
              <div className='flex items-center'><Image src={Minidragon}/>
                 <p className='ml-[24px] font-pop font-normal text-base '>H1 Gamepad</p> 
              </div>
                 <p className='font-pop font-normal text-base'>$1100</p>
            </div>

            <div className='mt-[32px] flex flex-col gap-[16px]'>
              <div className='flex justify-between items-center'><h1 className='font-pop font-normal text-base'>Subtotal :</h1><p className='font-pop font-normal text-base'>$1750</p></div>
              <div className='w-[422px] h-[1px] bg-black'></div>
              <div className='flex justify-between items-center'><h1 className='font-pop font-normal text-base'>Shipping :</h1><p className='font-pop font-normal text-base'>Free</p></div>
              <div className='w-[422px] h-[1px] bg-black'></div>
              <div className='flex justify-between items-center'><h1 className='font-pop font-normal text-base'>Total :</h1><p className='font-pop font-normal text-base'>$1750</p></div>

                <div className='flex justify-between mt-[32px] mb-0'>
                      <div className='flex gap-[16px] '><Roundeicon/><p className='font-pop font-normal text-base'>Bank</p></div>
                      <Image src={Payment}/>
                </div>

   

          </div>






                <div className='flex gap-[16px] mt-[18px] mt-[42px]'><Roundeicon/><p className='font-pop font-normal text-base'>Cash on delivery</p></div>
                <div className='flex items-center justify-between mt-[32px] w-[527px]'><Input className='w-[300px] h-[56px]' placeholder='Coupon Code'/> <Button className='w-[222px] h-[56px] ml-[16px] ' text='Apply Coupon'/></div>
                <Button className='w-[192px] h-[56px] mt-[32px]' text='Place Order'/>
      </div>

        </Flex>
  
      </Container>
    </section>
  )
}

export default Checkout
