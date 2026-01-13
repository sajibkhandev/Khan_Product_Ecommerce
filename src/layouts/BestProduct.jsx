import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Heading from '../components/Heading'
import Flex from '../components/Flex'

import CategoryBox from '../components/CategoryBox';
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import ProductOne from "../assets/product1.png";
import Card from '../components/Card'
import Button from '../components/Button'

const BestProduct = () => {
    return (
        <section className='pb-[140px]'>
            <Container>
                <Flex className='items-center justify-between'>
                   <div>
                    <SubHeading title="This Month" />
                    <Heading className="pt-6 pb-[60px]" text="Best Selling Products" />
                   </div>
                   
                    <Button text="View All"/>
                   
                </Flex>
                <Flex className='justify-between '>
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                    <Card image={ProductOne} title="HAVIT HV-G92 Gamepad" saleprice="120" regularprice="160" badge="new"
                    />
                </Flex>
              

            </Container>
        </section>
    )
}

export default BestProduct
