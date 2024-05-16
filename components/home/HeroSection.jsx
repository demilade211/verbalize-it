'use client'

import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const HeroSection = () => {
  return (
    <Con>HeroSection</Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  height: 50vh;
  display: flex;
  background:rgba(0, 0, 0, 1);   
  @media (max-width: 1200px) { 
    flex-direction: column-reverse;
    height: auto;
  }
`;

export default HeroSection