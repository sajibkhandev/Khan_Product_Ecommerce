import React, { useState } from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CategoryList from '../components/CategoryList'
import Card from '../components/Card'
import ProductImage from '../assets/product3.png'
import Pagination from '../components/Pagination'


const Products = () => {
  let [show,setShow]=useState(6)
  let handleSelect=(e)=>{
    setShow(e.target.value);
    
  }
  console.log(show);
  
  let data = useSelector((state) => state.breadcrumb.previousValue)
  return (
    <section className='pt-20 pb-[120px]'>
      <Container>
        <p className="pb-13"> <Link to={data == "Home" ? "/" : `/${data}`}>{data}</Link> > cart</p>
        <Flex>
          <div className='w-3/12'>
            <h3 className='text-xl text-[#262626] font-bold font-pop'>Shop by Category</h3>
            <ul className="flex flex-col gap-y-4 pt-4">
              <CategoryList text="Woman’s Fashion" />
              <CategoryList text="Men’s Fashion" />
              <CategoryList text="Electronics" />
              <CategoryList text="Home & Lifestyle" />
              <CategoryList text="Medicine" />
              <CategoryList text="Sports & Outdoor" />
              <CategoryList text="Baby’s & Toys" />
              <CategoryList text="Groceries & Pets" />
              <CategoryList text="Health & Beauty" />
            </ul>


            <h3 className='text-xl text-[#262626] font-bold font-pop pt-10'>Shop by Color</h3>
            <ul className="flex flex-col gap-y-4 pt-4">
              <Flex className='items-center gap-x-2.5'>

                <div className='w-[12px] h-[12px] bg-red-500 rounded-full'></div>
                <li>Color 1</li>
              </Flex>
              <Flex className='items-center gap-x-2.5'>

                <div className='w-[12px] h-[12px] bg-red-500 rounded-full'></div>
                <li>Color 1</li>
              </Flex>
              <Flex className='items-center gap-x-2.5'>

                <div className='w-[12px] h-[12px] bg-red-500 rounded-full'></div>
                <li>Color 1</li>
              </Flex>



            </ul>


          </div>
          <div className='w-9/12 '>
          <div className='flex justify-end items-center mb-8'>
            <label htmlFor="">Show: </label>
            <select onChange={handleSelect} className='ml-4 py-1 px-5 border border-black rounded-md'>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </div>

           <Pagination itemsPerPage={show} />
          
          
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Products