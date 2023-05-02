import React from 'react';
import blankProfile from "../../assets/Navbar_Images/blank_profile.png";
import logo from '../../assets/green_cap_icon.avif';

const Navbar = () => {
    return (
        <div>
            <div className="navbar text-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white text-black">
                            <li><a>Home</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2 py-2 px-4 cursor-pointer rounded-md text-green-700 hover:text-green-500 duration-300'>
                        <img src={logo} alt="" className='h-10 w-10' />
                        <a className="normal-case text-xl md:text-2xl font-light">Green Chef</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10">
                                <img src={blankProfile} className='h-6 w-6 object-contain bg-white rounded-full' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Name
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;