import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import login from '../assets/login.png'
import Button from '../components/Button'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'



const Login = () => {

  const auth = getAuth();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [eye, setEye] = useState(false)
  let [emailerror, setEmailError] = useState("")
  let [passworderror, setPasswordError] = useState("")

  let [popup, setPopup] = useState(false)

  let navigate = useNavigate()

  let handleEye = () => {
    setEye(!eye)

  }
  let handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError("")
  }
  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordError("")
  }




  let handleLogin = () => {
    if (!email) {
      setEmailError("Please Enter your Email or phone number ")
    }

    if (!password) {
      setPasswordError("Please Enter your Password");

    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user.emailVerified)
          if (userCredential.user.emailVerified) {
            toast.success("Login Successfully")
            setTimeout(() => {
              navigate("/")
            }, 2000)
          } else {
            toast.error("Verify your email")
          }


        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid-credential")
          }
        });
    }





  }


  let handleForgetPassword = () => {
    setPopup(true)
  }
  let handleBack = () => {
    setPopup(false)

  }
  let handleSendEmail = (eail) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
   toast.success("Cleck your email for reset your email")
   setPopup(false)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    
    
  });


  }
  return (
    <>
      {
        popup
          ?
          <section>
            <div className='flex justify-center items-center z-50 absolute top-0 left-0 w-full h-screen bg-[#00000099]'>
              <div className='w-[600px] py-[150px] px-10 bg-white rounded-md'>
                <label className='text-2xl text-black font-inter font-medium' htmlFor="">Send Email for Reset Password:
                  <br />
                  <input className='w-[400px] border border-black py-2 px-3 rounded-md mt-3 text-base' type="text" />

                </label>
                <div className='mt-5'>
                  <Button onClick={handleBack} text="Back" />
                  <Button onClick={handleSendEmail} className='!bg-blue-500 hover:!text-black ml-5' text="Send" />
                </div>
              </div>
            </div>
          </section>

          :
          <section className='pt-[76px] pb-[140px]'>
            <Container>
              <Flex>
                <div className='flex items-center justify-between'>
                  <div className='w-7/12'>
                    <Image src={login} alt="login" />
                  </div>
                  <div className='w-4/12'>
                    <h2 className='text-4xl text-black font-inter font-medium pb-[24px]'>Log in to Exclusive</h2>
                    <h3 className='text-base text-black font-normal font-pop pb-[48px]'>Enter your details below</h3>
                    <div className='pb-[40px]'>
                      <div className='pb-10 '>
                        <input onChange={handleEmail} type="text" placeholder='Email or Phone Number' className='w-full border-0 border-b border-black py-2 placeholder:text-[18px] font-pop font-normal focus:outline-none ' />
                        {
                          emailerror && <p className='bg-red-500 text-white py-1 px-2 rounded-md mt-2 '>{emailerror}</p>
                        }

                      </div>
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

                    <Flex className='items-center pt-[40px]'>
                      <div onClick={handleLogin}>
                        <Button text="Log In" />
                      </div>
                      <p onClick={handleForgetPassword} className='text-base text-[#DB4444] font-normal font-pop pl-[87px] cursor-pointer'>Forget Password?</p>
                    </Flex>
                    <Flex className='justify-center pt-[32px]'>
                      <p className='text-base text-[#4D4D4D] font-pop font-normal'>New here? Let’s get you started.</p>
                      <div className='pl-4'>
                        <Link to='/signup'><p className='text-base text-[#4D4D4D] font-medium font-pop border-0 border-b'>Sign Up</p></Link>
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

      }


    </>

    // alifhasanredoy
  )
}

export default Login