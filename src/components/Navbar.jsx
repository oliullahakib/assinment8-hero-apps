import React from 'react';
import { Link, NavLink } from 'react-router';
import gitlogo from "../assets/git-logo.png"
const Navbar = () => {
    return (
        <div className=" bg-base-100 shadow-sm">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/apps">Apps</NavLink>
                            <NavLink to="/installation">Installation</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl"> <img src="/logo.png" alt="" className='w-10' /><span className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>HERO.IO</span></Link>
                </div>
                <div className="navbar-end  justify-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-semibold gap-8 px-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/apps">Apps</NavLink>
                        <NavLink to="/installation">Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='https://github.com/oliullahakib/assinment8-hero-apps' className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white"><img src={gitlogo} alt="" /> Contribute</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;