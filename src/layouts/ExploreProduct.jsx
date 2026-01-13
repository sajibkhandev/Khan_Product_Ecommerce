import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import ProductOne from "../assets/product1.png";
import Card from '../components/Card'
import Button from '../components/Button'

const ExploreProduct = () => {
  return (
     <section className='pb-[140px]'>
            <Container>
                    <SubHeading title="This Month" />
                    <Heading className="pt-6 pb-[60px]" text="Best Selling Products" />
               
                <Flex className='justify-between flex-wrap gap-y-10'>
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                </Flex>
                <div className='text-center pt-[60px]'>
                    <Button text="View All Products"/>
                </div>
              

            </Container>
        </section>
  )
}

export default ExploreProduct
