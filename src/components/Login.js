import React from "react";
import firebase from "firebase/app";

import styles from "./Login.module.css";
import google from "../assets/google.png";
import Logo from "../assets/thinko.png";
import { auth } from "../firebase";
const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.logoImage}>
          <img src={Logo} alt="logo" style={{ width: "300px" }} />
        </div>

        <h2>Welcome to Thinko</h2>
        <h4>A place to exchange ideas ;))</h4>
        <div
          className={styles.button}
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
