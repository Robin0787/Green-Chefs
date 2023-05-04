import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import blankProfile from "../../assets/Navbar_Images/blank_profile.png";
import Loader from '../Shared/Loader/Loader';

const UserDetails = () => {
    const {user, loading} = useContext(authContext);
    if(loading) {
        return <Loader />
    }
    return (
        <div className='shadow-xl bg-gray-100 md:w-1/2 mx-auto text-center rounded-lg py-10 md:py-20 mt-16'>
            <img src={user?.photoURL || blankProfile} className='mb-3 mx-auto max-h-20' />
            <div className='space-y-2 text-gray-500'>
                <h1 className="text-lg text-gray-700 mb-4">Name : {user?.displayName}</h1>
                <h2 className="text-md">Email : {user?.email}</h2>
                <p className="text-sm">Provider : {user?.providerId}</p>
                <p className="text-sm">UID : {user?.uid}</p>
            </div>
        </div>
    );
};

export default UserDetails;