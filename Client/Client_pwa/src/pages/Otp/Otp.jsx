import React, { useState } from 'react';
import bg from '../../assets/bg.png'
// import logo from '../../assets/logo.png'
import Otpbox from '../../components/otp/Otpbox'
import { IoMdArrowRoundBack } from 'react-icons/io';
import {useNavigate} from 'react-router-dom'
// import { PhoneNumber } from 'react-phone-number-input';

function Otp({ handleLoginchange,PhoneNumber }) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const handleOtpVerification = () => {
    window.confirmationResult.confirm(otp).then((result) => {
      const user = result.user
      console.log('logged in successfully', user)

      user.getIdTokenResult().then((tokenResult) => {
        const { token } = tokenResult
        const accessToken = token
        // setLoading(false)
        localStorage.setItem('accessToken', accessToken)
        const refreshToken = tokenResult.token
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('phone', `${PhoneNumber}`)
        window.location.replace('/home')
      }).catch((error) => {
        console.log(error)
        setLoading(false)
        setError({ message: 'Sorry, the OTP you entered is incorrect. Please double-check the code and try again.', active: true })
        console.log('No access token')
      })
    }).catch((error) => {
      console.log(error)
      setLoading(false)
      setError({ message: 'Sorry, the OTP you entered is incorrect. Please double-check the code and try again.', active: true })
      console.log('user couldnt sign in')
    })
  };
  const isOtpFilled = true;

  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <div className="relative">
          <img src={bg} alt="background" />
          {/* <img src={logo} alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}
        </div>

        <div className='relative h-screen/2 w-screen bg-white flex flex-col justify-center items-center'>
          <div className='!mr-[20rem] !mt-3'>
            <IoMdArrowRoundBack size={40} onClick={handleLoginchange} />
          </div>
          <div className='flex flex-col items-center justify-center gap-y-3'>
            <h1 className='font-bold text-2xl text-teal-500 '>Enter OTP</h1>
            <p>We have send an OTP to your mobile number</p>
          </div>
          <div className='mt-[2rem]'>
            <Otpbox otp={otp} handleOtpChange={handleOtpChange} />
          </div>
          <div className='mt-[3rem]'>
            <button
              className='h-[52px] w-[335px] rounded-lg font-bold font-inter bg-teal-500  text-white'
              onClick={handleOtpVerification}
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
  );
}

export default Otp;