import React from "react";

import styles from "./Navbar.module.css";
import Logo from "../assets/thinko.png";
const Navbar = ({ logoutHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <img src={Logo} alt="logo" style={{ width: "40px" }} />
        Thinko
      </div>
      <div className={styles.logout} onClick={logoutHandler}>
        Logout
      </div>
    </div>
  );
};

export default Navbar;
