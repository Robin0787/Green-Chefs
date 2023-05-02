import React from 'react';
import logo from '../../assets/green_cap_icon.avif';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white text-black rounded-xl">
                <div className="navbar-start rounded-xl">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white text-black">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2 py-2 px-4 cursor-pointer rounded-md text-green-700 hover:text-green-500 duration-300'>
                        <img src={logo} alt="" className='h-10 w-10'/>
                        <a className="normal-case text-xl md:text-2xl font-light">Green Chef</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="ml-auto">
                    <a className="btn bg-green-600 text-white">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;