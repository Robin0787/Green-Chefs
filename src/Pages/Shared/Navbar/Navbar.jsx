import React, { useContext } from 'react';
// import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { authContext } from '../../../AuthProvider/AuthProvider';
import blankProfile from "../../../assets/Navbar_Images/blank_profile.png";
import logo from '../../../assets/green_cap_icon.avif';
import "./NavbarStyle.css";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(authContext);
    function handleLogOut() {
        logOut()
            .then(() => toast.success('log Out Successful'))
            .catch((err) => toast.error("Can't log Out"));
    }
    return (
        <div>
            <div className="navbar text-black">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white text-black">
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'bg-white'} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'bg-white'} to='/blog'>Blog</NavLink>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-2 py-2 px-4 cursor-pointer rounded-md text-green-700 hover:text-green-500 duration-300' onClick={() => navigate('/')}>
                        <img src={logo} alt="" className='h-10 w-10' />
                        <a className="normal-case text-xl md:text-2xl font-light">Green Chef</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-5 text-gray-400">
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/blog'>Blog</NavLink>
                    </ul>
                </div>
                <div className="ml-auto">
                    <div className="dropdown dropdown-end flex">
                        {
                            user ?
                                <div>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="right">
                                            <img src={user?.photoURL || blankProfile} className='h-6 w-6 object-contain bg-white rounded-full' />
                                        </div>
                                    </label>
                                    <Tooltip id='my-tooltip' />
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName}
                                            </a>
                                        </li>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to='/login' className='text-white bg-green-600 hover:bg-green-500 py-2 px-6 rounded-md hover:ring-4 ring-green-200 duration-300'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;