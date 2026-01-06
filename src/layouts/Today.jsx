import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Card from '../components/Card'
import Flex from '../components/Flex'
import Button from '../components/Button'
import ProductOne from '../assets/product1.png'

const Today = () => {
  return (
    <section className='mb-20 '>
        <Container>
            <div className='border-b  border-[#9a9a9a4d] pb-[60px]'>
                <SubHeading title="Today’s"/>
            <Heading className='pt-6 pb-8' text="Flash Sales"/>
           <Flex className='justify-between'>
             <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new" />
            <Card image={ProductOne} title="AK-900 Wired Keyboard" saleprice="120" regularprice="160" badge="new" />
            <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new" />
            <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new" />
           </Flex>
           <div className='text-center mt-[60px]'>
              <Button text="View All Products"/>
           </div>
            </div>

        </Container>
    </section>
  )
}

export default Today
