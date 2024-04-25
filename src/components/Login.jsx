import React from 'react'
import { auth, provider }from '../config/firebase'
import { signInWithPopup }from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './Login.css'

export default function Login() {

  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    navigate('/')
  }

 
  return (
    <div className="login-container">
      <p className="login-text">Sign in with Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in
      </button>
    </div>
  )
}
