import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const style = {
  wrapper: `flex justify-center`,
};

const googleSıgnI = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const SıgnIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSıgnI} />
    </div>
  );
};

export default SıgnIn;
