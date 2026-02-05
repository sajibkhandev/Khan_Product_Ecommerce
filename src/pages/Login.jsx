import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'



const Login = () => {

  const auth = getAuth();
  let [email,setEmail]=useState()
  let [password,setPassword]=useState()

  let navigate=useNavigate()



  let handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    toast.success("Login Successfully")
   setTimeout(()=>{
     navigate("/")

   },2000)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    if(errorCode.includes("auth/invalid-credential")){
      toast.error("Invalid-credential")
    }
  });
    
  }
  return (
    <section className='pt-19 pb-35'>
      <Container>
        <Flex>
          <div className='flex items-center justify-between'>
            <div className='w-7/12'>
          <Image src={login} alt="login"/>
          </div>
          <div className='w-4/12'>
          <h2 className='text-4xl text-black font-inter font-medium pb-6'>Log in to Exclusive</h2>
          <h3 className='text-base text-black font-normal font-pop pb-12'>Enter your details below</h3>
          <div className='pb-10'>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none'/>
          </div>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
          

 

          <Flex className='items-center pt-10'>
             <div onClick={handleLogin}>
              <Button text="Log In"/>
             </div>
            <p className='text-base text-[#DB4444] font-normal font-pop pl-21.75'>Forget Password?</p>
          </Flex>
            
          
          </div>
          </div>
        </Flex>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
    </section>

    // alifhasanredoy
  )
}

export default Login