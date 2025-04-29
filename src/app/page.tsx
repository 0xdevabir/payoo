'use client';
import Link from 'next/link';
import React from 'react'

export default function Login (){

  function loginVerify(){
      // window.location.href = '/home'
     const mobileNumberText = document.getElementById('mobileNumber');
     const pinNumberText = document.getElementById('pinNumber');
     const mobileNumber = mobileNumberText.value;
     const pinNumber = pinNumberText.value;

     console.log(pinNumber);
      if((pinNumber === '1234')&&(mobileNumber != ' ')){
          window.location.href = '/home'
      }
      else{
        alert('wrong number or password')
      }

  }


  return (
    <div className="flex justify-center bg-[#1b1b1b]">
      <div className='h-[100vh] w-[100vw] md:w-[600px] bg-[#F4F5F7]'>
        

        <div className="flex justify-center items-center h-[100vh]">
              <div className="bg-white w-[90%] p-[5vh] rounded-3xl">
                <p className='text-[16px] font-[500]'>Mobile Number</p>
                <input id='mobileNumber' type="text" placeholder='Enter Your Number' className='mt-[2vh] bg-[#F4F5F7] py-[10px] pl-[10px] w-[100%] rounded-2xl'/>
                <p className='text-[16px] font-[500] mt-[2vh]'>4 Digit Pin</p>
                <input id='pinNumber' type="text" placeholder='Enter 4 Digit Pin' className='mt-[2vh] bg-[#F4F5F7] py-[10px] pl-[10px] w-[100%] rounded-2xl'/>
                <br />  
                <button className='bg-[#0874F2] text-white py-[10px] w-[100%] rounded-2xl mt-[2vh]' onClick={loginVerify}>Login</button>
                {/* <Link href="/home" className='text-[#0874F2] text-[14px] font-[500] mt-[2vh]'>Create an account</Link> */}
              </div>
        </div>

      </div>
    </div>
  )
}

