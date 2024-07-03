"use client";
import React, { useEffect, useState } from "react";
import { PopUp } from "../navbar/PopUp";
import styles from "./header.module.css";
import { Navbar } from "../navbar/Navbar";
export const Header = () => {
  const [popUp, setPopUp] = useState<boolean>(false);
  useEffect(() => {
    setPopUp(true)
  }, []);
  return (
    <div className={styles.header}>
      <PopUp popUp={popUp} setPopUp={setPopUp}/>
      <Navbar />
    </div>
  );
};
