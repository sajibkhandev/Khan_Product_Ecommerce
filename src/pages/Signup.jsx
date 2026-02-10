import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import googleicon from '../assets/googleicon.png'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
  let patten = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let lowercase = /^(?=.*[a-z])/
  let uppercase = /(?=.*[A-Z])/
  let digit = /(?=.*\d)/
  let special = /(?=.*[@$!%*?&])/
  let min = /[A-Za-z\d@$!%*?&]{8,}$/


  const auth = getAuth();
  let [eye, setEye] = useState(false)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [nameerror, setNameError] = useState("")
  let [emailerror, setEmailError] = useState("")
  let [passworderror, setPasswordError] = useState("")

  let navigate = useNavigate()
  let handleEye = () => {
    setEye(!eye)

  }
  let handleName = (e) => {
    setName(e.target.value)
    setNameError("")
  }
  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError("")
  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }

  // this function for sign in
  let handleSignUp = () => {

    if (!name) {
      setNameError("Please enter your name");


    } if (!email) {
      setEmailError("Please Enter your Email")
    } else {
      if (!patten.test(email)) {
        setEmailError("Enter Your Vaild Email");

      }
    }


    if (!password) {
      setPasswordError("Please Enter your Password");

    } else if (!lowercase.test(password)) {
      setPasswordError("Please Lowercase");

    } else if (!uppercase.test(password)) {
      setPasswordError("Please Uppercase");

    } else if (!digit.test(password)) {
      setPasswordError("Please Digit");

    } else if (!special.test(password)) {
      setPasswordError("Please speciel charator");

    } else if (!min.test(password)) {
      setPasswordError("Please minimum 8")
    }


    if (name && email && patten.test(email) && password && lowercase.test(password) && uppercase.test(password) && digit.test(password) && special.test(password) && min.test(password)) {



      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {


          sendEmailVerification(auth.currentUser)
            toast.success(" Please Cleck Your email");
             
          


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("Email Alredy Use")
          } if (errorCode.includes("auth/weak-password")) {
            toast.error("Minimum 6 password")
          }
        });

    }


  }
  // this function for google

  let handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/")



      }).catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          console.log("some error here");

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
                <input onChange={handleName} type="text" placeholder='Name' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none' />
                {
                  nameerror && <p className='bg-red-500 text-white py-1 px-2 rounded-md mt-2 '>{nameerror}</p>
                }
              </div>
              <div className='pb-10 '>
                <input onChange={handleEmail} type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none ' />
                {
                  emailerror && <p className='bg-red-500 text-white py-1 px-2 rounded-md mt-2 '>{emailerror}</p>
                }

              </div>
              <div className='pb-10'>
                <div className='relative'>
                  <input
                    onChange={handlePassword}
                    type={eye ? "text" : "password"}
                    placeholder='Password'
                    className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none'
                  />
                  <div
                    onClick={handleEye}
                    className='absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer'
                  >
                    {eye ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>

                {passworderror && (
                  <p className='bg-red-500 text-white py-1 px-2 rounded-md mt-2'>
                    {passworderror}
                  </p>
                )}
              </div>

              <div onClick={handleSignUp} className='pt-10 pb-4'>
                <Button className='w-full' text="Create Account" />
              </div>

              <div onClick={handleGoogle}>
                <Flex className='relative w-[full] border border-[#CCCCCC] justify-center py-[16px] px-[86px]'>
                  <FcGoogle className='absolute text-xl top-[19px] left-[90px]' />
                  <p className='text-base font-normal font-pop pl-[16px]'>Sign up with Google</p>
                </Flex>
              </div>
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