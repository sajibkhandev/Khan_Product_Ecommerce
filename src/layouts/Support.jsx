import React from 'react'
import Container from '../components/Container'
import Icon from '../assets/support.png'
import SupportCard from '../components/SupportCard'
import Flex from '../components/Flex'

const Support = () => {
  return (
    <section className='py-35'>
        <Container>
          <Flex className='justify-evenly'>
              <SupportCard image={Icon} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140"/>
            <SupportCard image={Icon} title="24/7 CUSTOMER SERVICE" text="Friendly 24/7 customer support"/>
            <SupportCard image={Icon} title="FREE AND FAST DELIVERY" text="Free delivery for all orders over $140"/>
          </Flex>
          
        </Container>
    </section>
  )
}

export default Support
