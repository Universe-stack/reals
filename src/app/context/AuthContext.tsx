'use client'
import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { signInWithPopup,signOut,onAuthStateChanged,GoogleAuthProvider,User } from "firebase/auth";
import { auth } from "../../firebase/initFirebase";

interface AuthContextProps {
  children: ReactNode;
}
interface AuthContextValue {
    user: User | null;
    googleSignIn: () => void;
    logOut: () => void;
}
  
const AuthContext = React.createContext<AuthContextValue | null>(null);

export const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User|null>(null)

  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth,provider)
  }

  const logOut = ()=> {
    signOut(auth)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=> {
        setUser(currentUser)
    })
    return ()=> unSubscribe();
  },[user])

  return (
    <AuthContext.Provider value={{user,googleSignIn,logOut}}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
