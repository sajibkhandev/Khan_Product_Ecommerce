import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import Language from '../components/Language'

const NewsPart = () => {
  return (
    <section className='bg-black py-3'>
         <Container>
            <Flex className="justify-between ">
                <Flex className='pl-[300px]'>
                    <p className='text-sm text-primary font-normal font-pop'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <Link to='/janina'><span className='font-semibold ml-2'><u>ShopNow</u></span></Link></p>
                </Flex>
                
                
            <Language/>
            </Flex>
         </Container>
    </section>
  )
}

export default NewsPart