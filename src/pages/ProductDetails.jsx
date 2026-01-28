import React from 'react'
import Container from './../components/Container';
import Flex from './../components/Flex';
import Image from '../components/Image';
import productimageone from '../assets/productimageone.png'
import productimagetwo from '../assets/productimagetwo.png'
import productimagethree from '../assets/productimagethree.png'
import productimagefour from '../assets/productimagefour.png'
import productmainimage from '../assets/productmainimage.png'
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import Card from '../components/Card';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import ProductOne from "../assets/product1.png";
import productsuggestone from "../assets/productsuggestone.png";
import productsuggesttwo from "../assets/productsuggesttwo.png";
import productsuggestthree from "../assets/productsuggestthree.png";

const ProductDetails = () => {
   return (
    <section>
      <Container>
        <Flex className='py-20'>
          <h1 className='text-sm text-gray-400 font-pop font-normal'>Account <span className='px-2'> /</span></h1>
          <h2 className='text-sm text-gray-400 font-pop font-normal'>Gaming <span className='px-2'> /</span></h2>
          <p className='text-sm text-black font-pop font-normal'>Havic HV G-92 Gamepad</p>

        </Flex>
        <div className='flex'>
          <div className='mr-7'>
            <div className='pb-4'>
              <Image src={productimageone} />
            </div>
            <div className='pb-4'>
              <Image src={productimagetwo} />
            </div>
            <div className='pb-4'>
              <Image src={productimagethree} />
            </div>
            <div className='pb-4'>
              <Image src={productimagefour} />
            </div>
          </div>
          <div className="">
            <Image src={productmainimage} />
          </div>
          <div className='ml-18'>
            <p className='text-2xl font-semibold  font-int'>Havic HV G-92 Gamepad</p>
            <div className='flex  py-4'>
              <ul className='flex gap-[2px]'>
                <li className='text-[#F9BD2C] text-base'><FaStar /></li>
                <li className='text-[#F9BD2C] text-base'><FaStar /></li>
                <li className='text-[#F9BD2C] text-base'><FaStar /></li>
                <li className='text-[#F9BD2C] text-base'><FaStar /></li>
                <li className='text-[#F9BD2C] text-base'><FaStar /></li>
              </ul>
              <p className='text-sm text-gray-500 font-pop font-normal ml-2'> (150 Reviews) <span className='mx-3'>|</span> </p>
              <p className='text-sm text-[#00FF66] font-pop font-normal'>In Stock</p>

            </div>
            <p className='text-2xl font-normal  font-int'>$192.00</p>
            <p className='text-sm text-black font-pop font-normal leading-[23px] w-[353px] py-6'>PlayStation 5 Controller Skin High quality vinyl
              with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <div className='w-[400px] h-[1px] bg-black'></div>
            <div className="flex items-center gap-4 py-4">
              <p className="text-xl font-normal font-int">Colours:</p>


              <div
                className="
                   w-6 h-6 rounded-full 
                   flex items-center justify-center
                   hover:ring-2 hover:ring-black
                   transition
                      "
              >
                <span className="w-5 h-5 rounded-full bg-[#A0BCE0]"></span>
              </div>


              <button
                className="
                     w-6 h-6 rounded-full 
                    flex items-center justify-center
                    hover:ring-2 hover:ring-black
                    transition
                  "
              >
                <span className="w-5 h-5 rounded-full bg-red-400"></span>
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <p className="text-xl font-normal font-int">Size:</p>

              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL"].map((item) => (
                  <button
                    key={item}
                    className={`
                                      w-8 h-8 border border-gray-00 rounded text-sm font-medium
                                      transition
                            hover:bg-red-500 hover:text-white hover:border-red-500" 
                                    
                          `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-6">

              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <button className="w-12 h-11 flex items-center border-r-1 border-gray-400 justify-center text-xl hover:bg-red-500 duration-300">
                  −
                </button>

                <div className="w-12 h-11 flex items-center justify-center font-semibold">
                  2
                </div>

                <button className="w-12 h-11 flex items-center justify-center  border-l-1 border-gray-400  text-xl hover:bg-red-500 duration-500 ">
                  +
                </button>
              </div>


              <button className="h-11 w-[169px] bg-red-500 text-white hover:bg-transparent duration-300 border hover:border-red-500 hover:text-red-500 font-semibold rounded-md">
                Buy Now
              </button>


              <div className="w-10 h-10 border border-gray-300 rounded-md flex items-center text-2xl justify-center">
                <GoHeart />

              </div>
            </div>

            <div className="mt-6 border border-gray-300 rounded-md overflow-hidden">


              <div className="flex items-start gap-3 p-4 border-b border-gray-300">
                <span className="text-4xl">🚚</span>
                <div>
                  <p className="font-medium font-pop text-base pb-2">Free Delivery</p>
                  <p className="font-medium font-pop text-xs text-black underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>


              <div className="flex items-start gap-3 p-4">
                <span className="text-4xl">🔄</span>
                <div>
                  <p className="font-medium font-pop text-base pb-2">Return Delivery</p>
                  <p className="font-medium font-pop text-xs text-black ">
                    Free 30 Days Delivery Returns.
                    <span className="underline cursor-pointer font-normal font-pop text-xs text-black ml-1">Details</span>
                  </p>
                </div>
              </div>

            </div>

          </div>


        </div>
        <Flex className='items-center justify-between'>
          <div className='pt-[150px] pb-18'>
            <SubHeading title="Related Item" />

          </div>



        </Flex>
        <Flex className='justify-between  pb-[140px] '>
          <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="20%"
          />
          <Card image={productsuggestone} title="ASUS FHD Gaming Laptop" saleprice="700" regularprice="1100" badge="40%"
          />
          <Card image={productsuggesttwo} title="Gucci duffle bag" saleprice="960" regularprice="1320" badge="31%"
          />
          <Card image={productsuggestthree} title="RGB liquid CPU Cooler" saleprice="160" regularprice="200" badge="20%"
          />
        </Flex>



      </Container>
    </section>
  )
}

export default ProductDetails