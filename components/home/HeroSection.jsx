'use client'

import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import SearchInput from '../SearchInput';
import YellowButton from '../YellowButton';

const HeroSection = () => {
  return (
    <Con>
      <div className="flex mb-10 flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start justify-center ">
          <h1 className="text-[30px] lg:text-[58px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal lg:leading-[80px] text-center lg:text-left mb-4">
            We make you
            learn language
            easily!
          </h1>
          <p className="text-[18px] lg:text-[20px] text-[rgb(0,0,0)] mb-10 text-center lg:text-left font-Raleway">We help you learn language easily, witjh small lessons , you`ll
            earn points and unlock new levels while improving you rel world
            communications.
          </p>
          <div className="flex items-center">
            <SearchInput place="Enter your email" />
            <div className="mr-3"></div>
            <YellowButton content="Get Started" />
          </div>
        </div>
        <div className="w-full lg:w-[60%] flex justify-center mb-5 lg:mb-0">
          <img className="w-[80%]" src="/images/home/leftImg.png" alt="img" />
        </div>
      </div>
      <div className="w-full flex justify-between items-center flex-col lg:flex-row my-10 lg:mb-4">
        <div className="mb-10">
          <img className=" " src="/images/home/stu.png" alt="img" />
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <img className="lg:mr-8 mb-8 lg:mb-0" src="/images/home/visa.png" alt="img" />
          <img className="lg:mr-8 mb-8 lg:mb-0" src="/images/home/spotify.png" alt="img" />
          <img className="lg:mr-8 mb-8 lg:mb-0" src="/images/home/linkedIn.png" alt="img" />
          <img className=" " src="/images/home/zoom.png" alt="img" />
        </div>
      </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;   
  display: flex;
  flex-direction: column;
  background:rgba(255, 255, 255, 1);   
  padding: 80px 80px; 
  @media (max-width: 1200px) {  
    padding: 30px 30px;
  }
`;

export default HeroSection