import React from 'react'
import './Footer.css'
// IMPORT LOGO
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// IMPORT IMG
import Logo from '../../assets/logoblack.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer relative z-10  px-20 py-20 bg-Charcoal text-base-content roud">
                <aside>
                    <img className="w-[245px] h-[70px]" src={Logo} />
                    <p className="mt-20 text-NeonWhite">Digital Park, Sambau, Kecamatan<br />Nongsa, Kota Batam, Kepulauan Riau<br />29466</p>
                </aside>
                <nav className='mt-8'>
                    <h6 className="footer-ttitle">Program</h6>
                    <a href='..\regular' className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal mt-8">Regular Course</a>
                    <a href='..\msib' className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">MSIB</a>
                </nav>
                <nav className='mt-8'>
                    <h6 className="footer-ttitle">Community</h6>
                    <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal  mt-8">About us</a>
                    <a href='https://wa.me/6282387597266' className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Contact</a>
                </nav>
                <nav className='mt-8'>
                    <h6 className="footer-ttitle">About</h6>
                    <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal  mt-8">Terms of use</a>
                    <a className="text-NeonWhite text-base font-normal font-['Montserrat'] leading-normal">Privacy policy</a>
                </nav>
                <nav className='mt-8'>
                    <h6 className="footer-ttitle">Our Social Media</h6>
                    <div className="grid grid-flow-col gap-10 mt-8">
                        <a href='https://www.instagram.com/infinitelearning_id?igsh=MWo4YXNleXdhd3Bjbg=='><BsInstagram className='ig' /></a>
                        <a href='https://www.linkedin.com/company/infinite-learning-indonesia/'><FaLinkedin className='li' /></a>
                        <a href='https://www.tiktok.com/@infinitelearning_id?_t=8mO282LZXy4&_r=1'><FaTiktok className='tt' /></a>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center pt-6 copyrig text-base-content ">
                <aside>
                    <p className="text-gray-100 text-lg font-normal font-['Montserrat'] leading-[30px]">Copyright © 2023 | Infinite Learning Indonesia</p>
                </aside>
            </footer>
        </>
    )
}

export default Footer