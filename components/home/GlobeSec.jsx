'use client'

import React from 'react'
import styled from 'styled-components';

const GlobeSec = () => {
    return (
        <Con>
            <h1 className="text-[30px] md:text-[48px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal md:leading-[80px] text-center mb-4">
                Learn a new language the fun way
            </h1>
            <p className="text-[16px] md:text-[22px] text-[rgb(0,0,0)] mb-16 text-center font-Raleway">Reach your language goals fast with the world`s #1 education app</p>

            <div className="flex items-center mb-4">
                <img className=" " src="/images/home/globe.png" alt="img" />
            </div>

            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between">
                <div className="mb-4">
                    <h2 className="text-[30px] md:text-[68px] text-[rgb(0,0,0)] font-bold font-Raleway text-center">4.5k+
                    </h2>
                    <p className="text-[15px] md:text-[15px] text-[rgb(0,0,0)] text-center font-Raleway">Daily register from new users
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-[30px] md:text-[68px] text-[rgb(0,0,0)] font-bold font-Raleway text-center">1.5k+
                    </h2>
                    <p className="text-[15px] md:text-[15px] text-[rgb(0,0,0)] text-center font-Raleway">Language In the world
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-[30px] md:text-[68px] text-[rgb(0,0,0)] font-bold font-Raleway text-center">1000+
                    </h2>
                    <p className="text-[15px] md:text-[15px] text-[rgb(0,0,0)] text-center font-Raleway">Total learners in the world
                    </p>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`   
  width: 100%;   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:rgba(255, 255, 255, 1);   
  padding: 40px 190px;
  @media (max-width: 1200px) { 
    padding: 30px 30px;
  } 
`;

export default GlobeSec