import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul className='flex gap-x-10 justify-center'>
        <Link to='/'><li>home</li></Link>
        <Link to=''><li>service</li></Link>
       <Link to='/contact'>  <li>contact</li></Link>
       <Link to='/about'> <li>about</li></Link>
       
      </ul>
      <button className='bg-purple-500 text-xl text-white py-3 px-8 rounded-md'>Home</button>

    </div>
  )
}

export default Home
