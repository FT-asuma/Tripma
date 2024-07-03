import React from "react";
import Register from "./Register";
import styles from "./auth.module.css";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const page = () => {
  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2>Sign up for Trigma</h2>
          <p>
            Tripma is totally free to use. Sign up using your email address or
            phone number below to get started.
          </p>
        </div>
        <Register />
        <div className={styles.providers}>
          <div className={styles.line} />
          <p>or</p>
          <div className={styles.line} />
        </div>
        <div className={styles.provider}>
          <Button style={{ width: "100%", height: "3rem" }} variant="outlined">
            <FcGoogle size={20} />
            <span
              style={{ width: "99%", textAlign: "center", fontWeight: 600 }}
            >
              Continue with Google
            </span>
          </Button>
          <Button style={{ width: "100%", height: "3rem", marginTop: "1rem" }} variant="outlined">
            <FaGithub size={20} />
            <span
              style={{ width: "99%", textAlign: "center", fontWeight: 600 }}
            >
              Continue with Github
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
