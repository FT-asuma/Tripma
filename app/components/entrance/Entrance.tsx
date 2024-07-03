"use client";
import React from "react";
import styles from "./entrance.module.css";
import { Form } from "./Form";
export const Entrance = () => {
  return (
    <div className={styles.entrance}>
      <h1>It’s more than just a trip</h1>
      <div className={styles.whereToMove}>
        <Form />
      </div>
    </div>
  );
};
