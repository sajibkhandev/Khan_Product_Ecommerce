import React from 'react'
import Image from '../components/Image'
import Container from '../components/Container'
import PromotionImage from '../assets/promotion.png'
import { Link } from 'react-router-dom'

const Promotion = () => {
  return (
    <section className='pb-[70px]'>
        <Container>
           <Link to='/login'> <Image src={PromotionImage}/></Link>
        </Container>
    </section>
  )
}

export default Promotion
