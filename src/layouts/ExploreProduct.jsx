import React, { useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import ProductOne from "../assets/product1.png";
import Card from '../components/Card'
import Button from '../components/Button'
import ApiData from '../data'
console.log(ApiData.length);


const ExploreProduct = () => {
    let [show,setShow]=useState(4)
    
   
  return (
     <section className='pb-[140px]'>
            <Container>
                    <SubHeading title="This Month" />
                    <Heading className="pt-6 pb-[60px]" text="Best Selling Products" />
               
                <Flex className='justify-between flex-wrap gap-y-10'>
                    {
                        ApiData.map((item,index)=>(
                            index < show &&
                            <Card image={item.image} title={item.name} saleprice={item.saleprice} regularprice={item.regularprice} badge={item.badge}
                        />
                        
                            
                        ))
                    }
                   
                   
                </Flex>
                {
                    show<ApiData.length&& <div onClick={()=>setShow(ApiData.length)} className='text-center pt-[60px]'>
                    <Button text="View All Products"/>
                </div>
                }
              

            </Container>
        </section>
  )
}

export default ExploreProduct
