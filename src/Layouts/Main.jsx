import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
const Main = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Navbar />
            <Outlet />
            <Toaster />
        </div>
    );
};

export default Main;