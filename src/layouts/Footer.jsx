import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/footerlogo.png'
import { AiOutlineSend } from "react-icons/ai";
import ListItem from '../components/ListItem'
import Apple from '../assets/apple.png'
import Google from '../assets/andriod.png'
import Qr from '../assets/qr.png'
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";







const Footer = () => {
  return (
    <footer className='bg-black pt-20 pb-6'>
        <Container>
            <Flex className='pb-[60px]'>
                <div className='w-3/12'>
                 <Image src={Logo} alt="Logo Image"/>
                 <h4 className='text-xl text-primary font-medium font-pop py-6'>Subscribe</h4>
                 <p className='text-base text-primary font-medium font-pop'>Get 10% off your first order</p>

               <div className='relative w-[217px] border border-primary rounded-[4px] mt-4'>
                                   <input className='w-full py-3 pl-4 pr-7 text-white placeholder:text-xs placeholder:text-primary' type="text" placeholder='Enter your email?'/>
                                   <AiOutlineSend className='text-primary absolute top-1/2 right-[5px] -translate-y-1/2'/>

                                   
                </div>
                </div>
                <div className='w-3/12'>
                <strong className='text-xl text-primary font-medium font-pop mb-6 inline-block'>Account</strong>
                <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-primary" text="111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh."/>
                    <ListItem className="text-primary" text="exclusive@gmail.com"/>
                    <ListItem className="text-primary" text="+88015-88888-9999"/>
                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-primary font-medium font-pop mb-6 inline-block'>Account</strong>
                <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-primary" text="My Account"/>
                    <ListItem className="text-primary" text="Login / Register"/>
                    <ListItem className="text-primary" text="Cart"/>
                    <ListItem className="text-primary" text="Wishlist"/>
                    <ListItem className="text-primary" text="Shop"/>

                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-primary font-medium font-pop mb-6 inline-block'>Account</strong>
                <ul className='flex flex-col gap-y-4'>
                    <ListItem className="text-primary" text="Privacy Policy"/>
                    <ListItem className="text-primary" text="Terms Of Use"/>
                    <ListItem className="text-primary" text="FAQ"/>
                    <ListItem className="text-primary" text="Contact"/>

                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-primary font-medium font-pop mb-6 inline-block'>Download App</strong>
                <p className='text-primary text-xs pb-2'>Save $3 with App New User Only</p>
                <Flex className='justify-between'>
                    <Image src={Qr}/>
                <div>
                    <Image src={Apple}/>
                   <Image src={Google}/>
                </div>
                </Flex>
                <Flex className='gap-x-6 pt-6'>
                    <FaFacebookF  className='text-2xl text-primary'/>
                    <LuTwitter className='text-2xl text-primary' />
                    <FaLinkedinIn className='text-2xl text-primary'/>
                   <FaInstagram className='text-2xl text-primary'/>



                </Flex>
               
                </div>
            </Flex>
        </Container>
        <Flex className='gap-x-4 justify-center items-center border-t border-[#ffffff66] pt-4'>
             <FaCopyright className='text-[#ffffff66] text-xl'/>
             <p className=' text-[#ffffff66]'>Copyright Rimel 2022. All right reserved</p>
        </Flex>
    </footer>
  )
}

export default Footer