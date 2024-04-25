import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="px-10 py-5 bg-NeonWhite">
        <div className="navbar bg-white w-[100%] rounded-full">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to="/">Learning</NavLink></li>
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
              <li><NavLink to="/">Learning</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/team">Team</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>
            </ul>
          </div>
          <button className=" w-[200px] h-[62px] text-violet-600">Contact us</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
