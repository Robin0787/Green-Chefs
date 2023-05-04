import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorAnimation from "../../assets/lottie/ErrorAnimation.json";

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
             <Lottie animationData={ErrorAnimation} loop={true}/>
             <Link to={'/'} className='bg-green-600 hover:bg-green-500 duration-500 px-5 py-2 text-white rounded-md'>Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;