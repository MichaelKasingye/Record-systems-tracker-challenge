/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../config/firebaseInit';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const auth = getAuth();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [errors, setErrors] = useState(null);

  const [loading, setLoading] = useState(true);

  function login({email, password}) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrors(errorCode);
      console.log(errorCode);
      return new Error(`An error ocurred ${errorMessage}`)
    });
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    errors,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
