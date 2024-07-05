"use client";
import React from "react";
import styles from "./popUp.module.css";
import Image from "next/image";
import { Button } from "../utils/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
const CookieAgree = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [isAccepted, setIsAccepted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.getItem("useInfo")) {
        setPopUp(true);
      }
    }, 8000);
  }, []);
  useEffect(() => {
    if (isAccepted === true) {
      localStorage.setItem("useInfo", "Okay");
    }
  }, [isAccepted]);
  return (
    <div
      style={
        popUp !== true
          ? { transform: "translate(-120%, 0)", transition: "0.6s" }
          : { transform: "translate(0,0)", transition: "0.6s" }
      }
      className={styles.cookiePopUp}
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <h4>By using our site, you agree to eat our cookies.</h4>
          <button
            onClick={() => {
              setPopUp(false);
            }}
          >
            <Image
              src={"/icons/perform/popup.svg"}
              alt="close icon"
              width={16}
              height={16}
            />
          </button>
        </div>
        <div className={styles.perform}>
          <Button
            setter={() => {
              setIsAccepted(true);
              setPopUp(false);
            }}
            value
          >
            Accept cookies
          </Button>
          <Link href={"/settings"}>Go to settings</Link>
        </div>
      </div>
    </div>
  );
};

export default CookieAgree;
