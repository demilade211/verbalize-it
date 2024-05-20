'use client'

import React from 'react'
import styled from 'styled-components';


const Reasons = () => {
    return (
        <Con>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                <h1 className="w-full lg:w-[50%] text-[30px] lg:text-[50px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal lg:leading-[80px] text-center lg:text-left mb-4">
                    Why you`ll love learning
                    with Verbalizelt
                </h1>
                <p className="w-full lg:w-[40%] text-[18px] lg:text-[20px] text-[rgb(0,0,0)] mb-8 text-center lg:text-left font-Raleway">We help you learn language easily, witjh small lessons , you`ll
                    earn points and unlock new levels while improving you rel world
                    communications.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex flex-col items-center justify-center p-10 pb-0 mr-9 mb-5 w-full lg:w-[35%] rounded-t-[40px] bg-[rgba(255,240,191,1)]">
                    <h2 className="text-[20px] lg:text-[30px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal text-center mb-2">
                        Make progress Quickly
                    </h2>
                    <p className="text-[13px] text-[rgb(0,0,0)] mb-8 text-center font-Raleway">
                        Combining the best of all and language science, lessons are
                        tailored to help you learn at just the right level and place.
                    </p>
                    <img className="w-[300px]" src="/images/home/p1.png" alt="img" />
                </div>
                <div className="flex flex-col items-center justify-center p-10 pb-0 mr-9 mb-5 w-full lg:w-[35%] rounded-t-[40px] bg-[rgba(255,240,191,1)]">
                    <h2 className="text-[20px] lg:text-[30px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal text-center mb-2">
                        Personalized Learning
                    </h2>
                    <p className="text-[13px] text-[rgb(0,0,0)] mb-10 text-center font-Raleway">
                        Research shows our courses effectively and
                        efficency teach reading, listening and speak skills.
                    </p>
                    <img className="w-[300px]" src="/images/home/p2.png" alt="img" />
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

export default Reasons