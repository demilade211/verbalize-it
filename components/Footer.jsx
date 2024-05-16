'use client'

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Con>
            <div className="inner-con">
                <div className="left">
                    <div className="logo" onClick={() => router.push(`/`)}>
                        <img src="/images/components/logo.png" alt="img" />
                    </div>
                    <p>
                        Learning is  a global training provider<br />
                        based across the UK that specialises<br />
                        in accrodited and bespoke training
                        course.
                    </p>
                </div>
                <div className="right ">
                    <ul>
                        <li>About Us </li>
                        <li>Service </li>
                        <li>Blog</li>
                    </ul>
                    <ul>
                        <li>Terms & conditions </li>
                        <li>Privacy Policy</li>
                        <li> Become a Partner</li>
                    </ul>
                    <ul>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <HorizontalLine></HorizontalLine>
            <div className="flex justify-center">
                <p className="text-[15px] text-center">Privacy Policy | Terms & Conditions | Cookies Policy </p>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    padding: 30px 80px;
    background:rgba(255, 255, 255, 1);  
    @media (max-width: 1200px) { 
        padding: 50px 30px;
    }
    .inner-con{ 
        width: 100%;
        display: flex; 
        justify-content: space-between;
        @media (max-width: 700px) {  
            flex-direction: column;
            align-items: center;
        }
        .left{
            @media (max-width: 700px) {  
                margin-bottom: 20px; 
            }
            .logo{
                margin-bottom: 20px;
                @media (max-width: 700px) {  
                    display: flex;
                    justify-content: center;
                }
            }
            p{ 
                color: rgba(0, 0, 0, 1); 
                font-family: "Raleway", sans-serif;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 36px;   
                @media (max-width: 1200px) {  
                    font-size: 14px; 
                }
                @media (max-width: 700px) {  
                    text-align: center;
                }
            }
        }
        .right{
            width: 400px; 
            display: flex;
            justify-content: space-between;
            @media (max-width:600px) {  
                width: 100%;
                flex-direction: column; 
                align-items: center;
            }
            ul{
                @media (max-width:600px) {  
                    margin-bottom: 20px;
                }
                li{
                    color: rgba(0, 0, 0, 1); 
                    font-family: "Raleway", sans-serif;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal; 
                    margin-bottom: 20px;
                    @media (max-width: 1200px) {  
                        font-size: 15px;
                        text-align: center;
                    }
                }
            }
        }
    }
    
`;

const HorizontalLine = styled.div`  
    width: 100%;   
    border-top : 1px solid rgba(0, 0, 0, 1);
    margin: 20px 0;
`;



export default Footer