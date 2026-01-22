import React from 'react'
import Banner from '../layouts/Banner'
import Button from '../components/Button'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Today from '../layouts/Today'
import Category from '../layouts/Category'
import BestProduct from '../layouts/BestProduct'
import Promotion from '../layouts/Promotion'
import ExploreProduct from '../layouts/ExploreProduct'
import NewArrival from '../layouts/NewArrival'
import Support from '../layouts/Support'




const Home = () => {
  return (
    <>
    <Banner/>
    <Today/>
    <Category/>
    <BestProduct/>
    <Promotion/>
    <ExploreProduct/>
    <NewArrival/>
    <Support/>
    
    
    </>
  )
}

export default Home