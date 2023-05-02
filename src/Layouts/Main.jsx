import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div className='md:w-[90%] mx-auto shadow-2xl rounded-2xl'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;