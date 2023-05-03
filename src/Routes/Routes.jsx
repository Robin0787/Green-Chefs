import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from "../Pages/Authentication/Login/Login";
import SignUp from '../Pages/Authentication/SignUp/SignUp';
import ChefDetails from '../Pages/ChefDetails.jsx/ChefDetails';
import Home from '../Pages/Home/Home';
import ProtectedRoute from '../Pages/ProtectedRoute/ProtectedRoute';
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'blog',
                element: <p className='text-center text-3xl text-green-500'>Blog</p>
            },
            {
                path: 'chef/:id',
                element: <ProtectedRoute><ChefDetails /></ProtectedRoute>,
                loader: ({params}) => fetch(`https://green-cehfs-server-robin0787.vercel.app/chef/${params.id}`)
            }
        ]
    }
    // {
    //     path: '/chef/:id',
    //     element: <ChefDetails />,
    //     loader: ({params}) => fetch(`https://green-cehfs-server-robin0787.vercel.app/chef/${params.id}`)
    // }
])

export default Router;