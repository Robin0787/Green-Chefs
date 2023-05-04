import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from "../Pages/Authentication/Login/Login";
import SignUp from '../Pages/Authentication/SignUp/SignUp';
import Blogs from '../Pages/Blogs/Blogs';
import ChefDetails from '../Pages/ChefDetails.jsx/ChefDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import ProtectedRoute from '../Pages/ProtectedRoute/ProtectedRoute';
import UserDetails from '../Pages/UserDetails/UserDetails';

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
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'chef/:id',
                element: <ProtectedRoute><ChefDetails /></ProtectedRoute>,
                loader: ({params}) => fetch(`https://green-cehfs-server-robin0787.vercel.app/chef/${params.id}`)
            },
            {
                path: '/userDetails',
                element: <UserDetails />
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])

export default Router;