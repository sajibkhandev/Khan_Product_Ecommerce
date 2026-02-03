import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import googleicon from '../assets/googleicon.png'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const Signup = () => {
  const auth = getAuth();
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")


  let handleSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Registration Successfully");


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        if(errorCode.includes("auth/email-already-in-use")){
          toast.error("Email Alredy Use")
        }if(errorCode.includes("auth/weak-password")){
          toast.error("Minimum 6 password")
        }


      });


  }
  return (
    <section className='pt-19 pb-35'>
      <Container>
        <Flex>
          <div className='flex items-center justify-between'>
            <div className='w-7/12'>
              <Image src={login} alt="Signup" />
            </div>
            <div className='w-4/12'>
              <h2 className='text-4xl text-black font-inter font-medium pb-6'>Create an account</h2>
              <h3 className='text-base text-black font-normal font-pop pb-12'>Enter your details below</h3>
              <div className='pb-10'>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
              </div>
              <div className='pb-10'>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal ' />
              </div>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />

              <div onClick={handleSignUp} className='pt-10 pb-4'>
                <Button className='w-full' text="Create Account" />
              </div>

              <Flex className='w-[full] border border-[#CCCCCC] justify-center py-4 px-21.5'>
                <Image src={googleicon} alt="google" />
                <p className='text-base font-normal font-pop pl-4'>Sign up with Google</p>
              </Flex>
              <Flex className='justify-center pt-8'>
                <p className='text-base text-[#4D4D4D] font-pop font-normal'>Already have account?</p>
                <div className='pl-4'>
                  <Link to='/login'><p className='text-base text-[#4D4D4D] font-medium font-pop border-0 border-b'>Log in</p></Link>
                </div>
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

export default Signup