import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);

    console.log("User from Auth Provider", user);

    // create user with email and password
    const createUser = (email, password) => {
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

    // auth Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false);
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
        setloading,
        userLogout,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;