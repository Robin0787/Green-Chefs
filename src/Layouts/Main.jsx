import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
const Main = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;