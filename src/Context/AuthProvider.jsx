import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [bidCountGlobal, setBidCountGlobal] = useState(0);
    const [theme, setTheme] = useState("light");

    // console.log("User from Auth Provider", user);

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update user profile data with name and photo
    const profileDataUpdate = (userData) => {
        return updateProfile(auth.currentUser, userData);
    }

    // user logout 
    const userLogout = () => {
        return signOut(auth);
    }

    // google sign in 
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Email and password sign in
    const emailLogIn =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // auth Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user, 
        setUser,
        createUser,
        profileDataUpdate,
        loading,
        setLoading,
        userLogout,
        googleSignIn,
        emailLogIn,
        bidCountGlobal,
        setBidCountGlobal,
        theme, 
        setTheme,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;