import React from 'react'
import bg from '../../assets/bg.png'
import Otpbox from '../../components/Otp/Otpbox'
import {IoMdArrowRoundBack} from 'react-icons/io';

 function Otp() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <div className="relative">
          <img src={bg} alt="background" />
          
        </div>

        <div className='relative h-screen/2 w-screen bg-white flex flex-col justify-center items-center'>
          <div className='!mr-[20rem] !mt-3'>
            <IoMdArrowRoundBack size={40}  />
          </div>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h1 className='font-bold text-2xl text-teal-500 '>Enter OTP</h1>
            <p>We have send an OTP to your mobile number</p>
          </div>
          <div className='mt-[2rem]'>
            <Otpbox  />
          </div>
          <div className='mt-[3rem]'>
            <button
              className='h-[52px] w-[335px] rounded-lg font-bold font-inter bg-teal-500  text-white'
              
            >
              Sign In
            </button>

            <div className="mt-5 flex flex-col justify-center items-center">
              <p className="text-gray-600 inline">Did'nt recieve the otp?</p>
              <p className="text-green-600 inline">Resend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otp;