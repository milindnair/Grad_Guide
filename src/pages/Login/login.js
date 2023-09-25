import React from 'react'
import { googleprovider,auth } from '../../utils/firebase-config';
import {signInWithPopup} from 'firebase/auth';
import { signOut } from 'firebase/auth';
const login = () => {

  const signInWithGoogle = async() => {
    try{
      await signInWithPopup(auth,googleprovider);
    }catch(err){
      console.log(err);
    }
  };

  const logout = async() => {
    try{
      await signOut(auth);
    }catch(err){
      console.log(err);
    }
  }



  return (
    <div>
      Login
      <button onClick={signInWithGoogle} >
        Sign in with google
      </button>
      <button onClick={logout}>
        Logout
      </button>
    </div>
    
  )
}

export default login;