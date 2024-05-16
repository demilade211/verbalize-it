'use client'

import React, { useState } from "react";
import styled from 'styled-components';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Router from "next/router"
import YellowButton from "./YellowButton";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname()

    const isActive = route => pathname === route;
    return (
        <LandingNavbarCon>
            <Bottom>
                <div className="logo" onClick={() => router.push(`/`)}>
                    <img src="/images/components/logo.png" alt="img" />
                </div>
                <nav>
                    <ul>
                        <li onClick={() => router.push(`/`)}> Service</li>
                        <li onClick={() => router.push(`/products`)}> Blog</li>
                        <li onClick={() => router.push(`/about`)}> About Us</li>
                        <li onClick={() => router.push(`/faq`)}> Contact</li>
                    </ul>
                </nav>
                <div className="btn-con">
                    <YellowButton content="Register" />
                </div>
                <div className='mobile-right'>
                    <RxHamburgerMenu onClick={() => setShowNav(!showNav)} />
                </div>
                <div className={`mobile-nav ${showNav && "active"}`}>
                    <div className="close" onClick={() => setShowNav(false)} >
                        <RxHamburgerMenu onClick={() => setShowNav(!showNav)} />
                    </div>
                    <ul>
                        <li onClick={() => router.push(`/`)}>Home</li>
                        <li onClick={() => router.push(`/products`)}>Products</li>
                        <li onClick={() => router.push(`/about`)}>About us</li>
                        <li onClick={() => router.push(`/faq`)}>FAQ</li>
                        {/* <li className="flex items-center">
                            <img className="mr-5 cursor-pointer" src="/images/components/insta.svg" alt="img" />
                            <img className="mr-5 cursor-pointer" src="/images/components/twit.svg" alt="img" />
                            <img className="mr-5 cursor-pointer" src="/images/components/fb.svg" alt="img" />
                        </li> */}
                    </ul>
                </div>
            </Bottom>
        </LandingNavbarCon>
    )
}

const LandingNavbarCon = styled.header`
    width:100%;   
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px solid rgba(168, 168, 168, 1);
`;



const Bottom = styled.div`
    width:100%;   
    height: 100%;
    padding: 15px 80px; 
    display: flex;
    justify-content: space-between;
    align-items: center;   
    @media (max-width: 1200px) { 
        padding: 20px 30px; 
    }
    .logo{ 
        cursor: pointer;
        @media (max-width: 600px) { 
            width: 131px; 
        }
    }
    nav{
        @media (max-width: 1200px) { 
            display:none; 
        }
        ul{
            display: flex;
            align-items: center;
            li{
                list-style-type:none;
                margin:0 30px;
                color: rgba(0, 0, 0, 1);
                text-align: center; 
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                cursor: pointer;
                position: relative;
                &:hover {     
                    transition: 200ms ease-in;
                }  
                
            } 
        }
    }
    .btn-con{
        display: block;
        @media (max-width: 1200px) { 
            display:none; 
        }
    }
    .mobile-right{
        display:none;
        img{
            margin-left:30px;
        }
        @media (max-width: 1200px) { 
            display:flex;
            align-items:center; 
        }
    }
    .mobile-nav{ 
        position: absolute;
        width: 100%;
        top: -100%; /* Start above the viewport */
        left: 0;
        display: block; /* Change to 'none' when you want to hide it */ 
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background:rgba(255, 255, 255, 1);
        padding: 20px 50px;
        opacity: 0; /* Start fully transparent */
        transition: 900ms ease-in;
        transform: translateY(0); /* Start at the original position */ 
        z-index:5;
        &.active {
            /* Add a class 'active' when you want to show the navigation */
            top: 0; /* Move it to the original position */
            opacity: 1; /* Make it fully visible */
            transform: translateY(0); /* Ensure it's at the original position */
        }
        .close{
            display:flex;
            justify-content:flex-end;
            align-items:center;
            margin-bottom:40px;
        }
        ul{
            li{
                text-align:left;
                list-style-type:none;
                margin-bottom:30px;
                color: rgba(0, 0, 0, 1);
                font-family: "Raleway", sans-serif;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
            .contact{
                border-radius: 10px;
                border: 1px solid #F58634;
                padding: 20px 40px;
            }
        }
        @media (max-width: 1200px) { 
            display:block;  
        }
    }
`; 

export default Navbar