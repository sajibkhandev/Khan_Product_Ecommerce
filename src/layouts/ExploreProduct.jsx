import React, { use, useEffect, useState } from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import ProductOne from "../assets/product1.png";
import Card from '../components/Card'
import Button from '../components/Button'
import { log } from 'firebase/firestore/lite/pipelines'




const ExploreProduct = () => {
    let [show,setShow]=useState(4)
    let [Apidata,setApiData]=useState([])


    useEffect(()=>{
      fetch("https://dummyjson.com/products")
      .then((res)=>res.json())
      .then((data)=>setApiData(data.products))
      

    },[])



  




    
   
  return (
     <section className='pb-[140px]'>
            <Container>
                    <SubHeading title="This Month" />
                    <Heading className="pt-6 pb-[60px]" text="Best Selling Products" />
               
                <Flex className='justify-between flex-wrap gap-y-10'>
                    {
                        Apidata.map((item,index)=>(
                            index < show &&
                            <Card image={item.thumbnail} title={item.title} saleprice={item.saleprice} regularprice={item.regularprice} badge={"new"}
                        />
                        
                            
                        ))
                    }
                   
                   
                </Flex>
                {
                    show<Apidata.length&& <div onClick={()=>setShow(Apidata.length)} className='text-center pt-[60px]'>
                    <Button text="View All Products"/>
                </div>
                }
              

            </Container>
        </section>
  )
}

export default ExploreProduct
