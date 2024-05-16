'use client'

import React from 'react'
import styled from 'styled-components';

const YellowButton = ({ content, onClick, disabled }) => {
    return (
        <>
            <Btn onClick={onClick} disabled={disabled}>{content}</Btn>
        </>
    )
}

const Btn = styled.button`  
    height: 45px; 
    color:rgba(0, 0, 0, 1);
    padding: 20px;
    background: rgba(255, 206, 49, 1);  
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px; 
    font-weight: 500;
    font-size: 16px; 
    transition: 300ms ease-in-out;

    &:hover{
      transform: scale(1.05);
    }
    

    &:disabled,
    button[disabled]{ 
      background:   #e066ff;
      color:white;
    }

`;

export default YellowButton