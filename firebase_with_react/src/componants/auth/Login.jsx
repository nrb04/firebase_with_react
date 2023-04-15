import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import appAuth from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(appAuth);
  console.log(auth);
  const provider = new GoogleAuthProvider();
  const googleHandleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch(console.error());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(results);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={googleHandleSignin}> buttun</button>
      <button onClick={handleSignOut}> signout</button>

      {user && (
        <div>
          <h3> USer: {user.displayName}</h3>
          <h3> USer: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
