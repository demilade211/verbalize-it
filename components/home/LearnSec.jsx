import React from 'react'
import styled from 'styled-components'; 

const LearnSec = () => {
    return (
        <Con>
            <h1 className="text-[30px] md:text-[58px] text-[rgb(0,0,0)] font-bold font-Raleway leading-normal md:leading-[80px] text-center mb-4">
                Learn a new language for
                free downlaod app Now!
            </h1>
            <div className="flex items-center">
                <img className="mr-3 w-[150px] cursor-pointer" src="/images/home/apple.png" alt="img" />
                <img className="mr-3 w-[150px] cursor-pointer" src="/images/home/play.png" alt="img" />
            </div>
        </Con>
    )
}

const Con = styled.section`   
  width: 100%;  
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:rgba(255, 206, 49, 1);   
  padding: 40px 190px;
  @media (max-width: 1200px) { 
    padding: 40px 30px;
  } 
`;

export default LearnSec