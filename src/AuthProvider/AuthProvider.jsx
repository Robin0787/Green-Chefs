import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';

export const authContext = createContext(null);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerWithEmailAndPass = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);
    const authInfo = {user, setUser, logInWithGoogle, logInWithGithub, registerWithEmailAndPass, logInWithEmailAndPass, logOut, loading, passwordReset};
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;