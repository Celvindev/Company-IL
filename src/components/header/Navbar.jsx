import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logoblack.svg';
import "@fortawesome/fontawesome-free/css/all.css";
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" var py-2 px-10 w-[100%] fixed" style={{ backgroundColor: scrolled ? '#181823' : 'transparent' }}>
        <div className="navbar rounded-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/">Learning</NavLink></li>
                <li><NavLink to="/alumni">Alumni</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/career">Career</NavLink></li>
              </ul>
            </div>
            <NavLink to="/" className="ml-10 mt-1">
              <img src={Logo} alt='logo' className='w-[90px]' />
            </NavLink>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><NavLink to="/learning">Learning</NavLink></li>
              <li><NavLink to="/alumni">Alumni</NavLink></li>
              {/* <li><NavLink to="/learning">Learning</NavLink></li> */}
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/team">Team</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>
            </ul>
          </div>
          <button className=" w-[200px] h-[62px] btncont text-white">
            <a href='https://wa.me/6282387597266'>
              Contact us  <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
