import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    }
])

export default Router;