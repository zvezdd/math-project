import React from "react";
import {auth} from '../config/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import './Profile.css'

export default function Profile() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user && (
        <div  className="profile-card">
          <img src={user?.photoURL || ""} alt="" />
          <h1 className="profile-title">{user?.displayName}</h1>
          <p>{user?.email}</p>
        </div>
      )}
      {!user && (
        <div>
         <h1>you have to log in :)</h1>
        </div>
      )}
    </div>
  );
}
