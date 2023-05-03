import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
const SignUp = () => {
    const [validatePass, setValidatePass] = useState('');
    const [isPassOk, setIsPassOk] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const { registerWithEmailAndPass } = useContext(authContext);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!isPassOk) {
            toast.error('Password is not valid!');
            return;
        }
        else {
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const image = e.target.image.value;
            registerWithEmailAndPass(email, password)
                .then(result => {
                    toast.success('SignUp Successful');
                    e.target.reset();
                    setShowEyeIcon(false);
                    updateProfile(result.user, { displayName: name, photoURL: image })
                        .catch(err => { toast.error(err.message) });
                })
                .catch(err => toast.error(err.message));
        }
    }

    const handlePassChange = (e) => {
        const pass = e.target.value;
        if (pass.length < 6) {
            setValidatePass('Password must contain minimum 6 characters');
            setIsPassOk(false);
        }
        else {
            setValidatePass('');
            setIsPassOk(true);
        }
        handleShowIcon(pass);
    }
    
    function handleShowIcon(pass) {
        if (pass.length > 0) {
            setShowEyeIcon(true);
        }
        else {
            setShowEyeIcon(false);
            setValidatePass('');
        }
    }

    return (
        <div className='flex justify-center items-center mt-12'>
            <form className='border rounded-md lg:w-[30%] p-5 px-10 text-gray-500 shadow-[-5px_5px_0_rgba(72,238,22,0.404)]' onSubmit={handleFormSubmit}>
                <h2 className="text-2xl text-center font-semibold mt-3 mb-4">Sign UP</h2>
                <label htmlFor="name" className='text-sm'>Name</label><br />
                <input type="text" name='name' className='w-full border mt-1 mb-5 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 bg-white p-1' required />
                <label htmlFor="name" className='text-sm'>Image</label><br />
                <input type="text" name='image' className='w-full border mt-1 mb-5 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 bg-white p-1' required />
                <label htmlFor="email" className='text-sm'>Email</label><br />
                <input type="email" name='email' className='w-full border mt-1 mb-5 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 bg-white p-1' required />
                <label htmlFor="password" className='text-sm'>Password</label><br />
                <div className='relative'>
                    <div className="relative">
                        <input type={showPass ? "text" : 'password'} name='password' onChange={handlePassChange} className='w-full border mt-1 mb-2 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 bg-white p-1' required /><br />
                        {
                            showEyeIcon ?
                                showPass ?
                                    <EyeIcon className='h-4 w-4 text-green-400 cursor-pointer absolute top-[14px] right-3' onClick={() => { setShowPass(!showPass) }} />
                                    :
                                    <EyeSlashIcon className='h-4 w-4 text-green-400 cursor-pointer absolute top-[14px] right-3' onClick={() => { setShowPass(!showPass) }} />
                                :
                                ''
                        }
                    </div>
                    <p className="text-xs mb-3 text-red-400 absolute top-11">{validatePass}</p>
                </div>
                <button type='submit' className='bg-green-500 text-md duration-500 hover:bg-green-400 text-white w-full font-semibold py-2 mt-10'>Sign UP</button>
                <p className='text-sm text-center text-gray-700 mt-2'>Already have an account? <Link to='/login' className='text-green-600'>Login</Link></p>
            </form>
        </div>
    );
}

export default SignUp;