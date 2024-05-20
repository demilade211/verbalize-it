'use client'

import styled from 'styled-components';
import AppLayout from '@/layouts/AppLayout';
import HeroSection from '@/components/home/HeroSection';
import LearnSec from '@/components/home/LearnSec';
import GlobeSec from '@/components/home/GlobeSec';
import Reasons from '@/components/home/Reasons';

const Home = () => {
  return (
    <AppLayout>
      <Con>
        <HeroSection />
        <Reasons/>
        <GlobeSec />
        <LearnSec />
      </Con>
    </AppLayout>
  )
}

const Con = styled.div`  
  width: 100%;    
`;

export default Home