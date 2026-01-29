import React from 'react'
import Container from '../components/Container'
import Flex from "../components/Flex"
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Button from "../components/Button"
import Input from '../components/Input';
const Contact = () => {
  return (
    <>
      <section>
        <Container>

          <div className='mt-[80px] mb-[120px] cursor-pointer'>
            <ul className='flex justify-between gap-[12px] w-[130px] font-pop font-normal text-black '>
              <li>Home</li>
              <li>/</li>
              <li>Contact</li>
            </ul>
          </div>



  <Flex className='gap-[30px]'>

            <div className='w-4/12 cursor-pointe p-[35px]'>
              <div className='text-black font-pop font-normal text-sm  h-[122px]'>

                <Flex className="gap-[16px] items-center mb-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#DB4444] rounded-full flex items-center justify-center cursor-pointer">
                    <FaPhoneAlt className="text-white text-2xl " /></div>
                  <h1 className='font-medium font-[16px] hover:text-[#DB4444] cursor-pointer'>Call To Us</h1>
                </Flex>
                <p>We are available 24/7, 7 days a week.</p>
              </div>

              <div className='w-[270px] h-[1px] bg-black p-0 mt-[32px] mb-[32px]'></div>


              <div className=' w-[250px] h-[180px] text-black font-pop font-normal text-sm '>
                <Flex className="gap-[16px] items-center mb-[24px]">
                  <div className="w-[40px] h-[40px] bg-[#DB4444] rounded-full flex items-center justify-center ">
                    <GoMail className="text-white text-2xl" /></div>
                  <h1 className='font-medium font-[16px] hover:text-[#DB4444] cursor-pointer'>Write To US</h1>
                </Flex>



                <div className="text-sm leading-11">
                  <div className='text-sm leading-5.5'>
                    <p>Fill out our form and we will contact you within 24 hours.</p></div>
                  <p>Emails: customer@exclusive.com</p>
                  <p>Emails: support@exclusive.com</p>
                </div>
              </div>
            </div>


    <div className='w-8/12 ml-[30px] mt-[35px] mb-[140px]'>

      <div className='flex gap-[16px]'>


     <Flex className="gap-[14px]">

         <Input placeholder="Your Name"/>
          <label className="
    relative text-transparent top-[10px] left-[-140px]
    pointer-events-none transition-opacity peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
    <span className='text-base font-pop text-base font-normal absolute'> Your Name </span>
    <span className="text-[#DB4444] text-xl">*</span>
          </label>

         <Input placeholder="Your Email"/>
          <label className="
     relative top-[11px] left-[-145px] text-transparent
    pointer-events-none transition-opacity peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
    <span className='text-base font-pop text-base font-normal absolute'> Your Email </span>
    <span className="text-[#DB4444] text-xl">*</span>
          </label>

         <Input placeholder="Your Phone"/>
          <label className="
     relative top-[11px] left-[-140px] text-transparent
    pointer-events-none transition-opacity peer-focus:opacity-0 peer-not-placeholder-shown:opacity-0">
    <span className='text-base font-pop text-base font-normal absolute '> Your Phone</span>
    <span className="text-[#DB4444] text-xl">*</span>
          </label>


     </Flex>


      </div>

              <textarea className="w-full h-[207px] rounded-[4px] pt-[16px] bg-primary1 mt-[32px] px-[16px] placeholder: pb-[144px]
                       text-sm text-opblack font-pop font-normal placeholder:text-base 
                       placeholder: text-black/50 resize-none"
                placeholder="Your Message" />
              <Button className='w-[215px] h-[56px] py-[16px] px-[46px] text-base ml-[562px] mt-[32px]' text='Send Massage' />
            </div>


  </Flex>

        </Container>
      </section>
    </>
  )
}

export default Contact