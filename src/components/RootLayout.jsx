import React from 'react'
import NewsPart from '../layouts/NewsPart'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <NewsPart/>
        <Navbar/>

        <Outlet/>
        
        <Footer/>
    </div>
  )
}

export default RootLayout