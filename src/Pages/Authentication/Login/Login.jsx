import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useContext, useRef, useState } from 'react';
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import github from '../../../assets/github.png';
import google from '../../../assets/google.png';
const Login = () => {
    const [showEyeIcon, setShowEyeIcon] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const {logInWithGoogle, logInWithGithub, logInWithEmailAndPass, passwordReset} = useContext(authContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    function continueWithGoogle() {
        logInWithGoogle()
        .then(res => {
            toast.success('Login Successful');
            navigate(from, {replace: true});
        })
        .catch(err => toast.error(err.message.slice(22, -2).replace(/-/g, ' ')));
    }
    
    function continueWithGithub () {
        logInWithGithub()
        .then(res => {
            toast.success('Login Successful');
            navigate(from, {replace: true});
        })
        .catch(err => toast.error(err.message.slice(22, -2).replace(/-/g, ' ')));
    }

    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInWithEmailAndPass(email, password)
        .then(res => {
            toast.success('Login Successful');
            e.target.reset();
            setShowEyeIcon(false);
            navigate(from, {replace: true});
        })
        .catch(err => toast.error(err.message.slice(22, -2).replace(/-/g, ' ')));
    }


    function handlePassChange(e) {
        const pass = e.target.value;
        if(pass.length > 0) {
            setShowEyeIcon(true);
        } 
        else {
            setShowEyeIcon(false);
        }
    }

    // Password reset function

    function resetPassword () {
        const email = emailRef.current.value;
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
           toast.error('Invalid Email');
           return;
        }
        passwordReset(email)
        .then(() => toast.success('Email Sent'))
        .catch(err => toast.error('Error'));

    }

    return (
        <div className='flex justify-center items-center mt-12'>
            <form className='border rounded-md lg:w-[30%] p-5 px-10 text-gray-500 shadow-[-5px_5px_0_rgba(72,238,22,0.404)]' onSubmit={handleLoginSubmit}>
                <h2 className="text-2xl text-center font-semibold mt-3 mb-4">Login</h2>
                <label htmlFor="email" className='text-sm'>Email</label><br />
                <input type="email" name="email" ref={emailRef} className='w-full bg-white border mt-1 mb-5 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 p-2' required/><br />
                <label htmlFor="confirmPass" className='text-sm'>Password</label><br />
                <div className="relative">
                <input type={showPass ? 'text' : 'password'} name="password" className='w-full bg-white border mt-1 mb-2 duration-300 border-gray-300 rounded-sm focus:outline-0 focus:ring ring-green-300 p-2' onChange={handlePassChange} required/>
                {
                    showEyeIcon ?
                    showPass ? 
                    <EyeIcon className="h-4 w-4 text-green-400 cursor-pointer absolute top-4 right-3" onClick={() => {setShowPass(!showPass)}}/>
                    :
                    <EyeSlashIcon className="h-4 w-4 text-green-400 cursor-pointer absolute top-4 right-3" onClick={() => {setShowPass(!showPass)}}/>
                    :
                    ''
                }
                <p className='text-sm text-gray-700 mt-1'>Forgot password? <span className='text-green-700 cursor-pointer' onClick={resetPassword}>reset</span></p>
                </div>
                <button type="submit" className='bg-green-500 text-md duration-500 hover:bg-green-400 text-white w-full font-semibold py-2 mt-5'>Login</button>
                <p className='text-sm text-center text-gray-700 mt-1'>Don't have an account? <Link to='/signup' className='text-green-700'>Sign Up</Link></p>
                <div className="flex justify-between items-center gap-3 my-5">
                    <hr className='w-2/3' />
                    <span className='text-xs'>Or</span>
                    <hr className='w-2/3' />
                </div>
                <div onClick={continueWithGoogle} className='border rounded-sm w-full py-2 font-semibold flex justify-center items-center cursor-pointer gap-2 mb-2'>
                    <img src={google} className='h-5 w-5' />
                    <p className="text-sm" >Continue with Google</p>
                </div>
                <div onClick={continueWithGithub} className='border rounded-sm w-full py-2 font-semibold flex justify-center items-center cursor-pointer gap-2 mb-2'>
                    <img src={github} className='h-6 w-6' />
                    <p className="text-sm" >Continue with Github</p>
                </div>
            </form>
        </div>
    );
}

export default Login;