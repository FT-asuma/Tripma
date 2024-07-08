"use client";
import React, { useEffect } from "react";
import styles from "./entrance.module.css";
import { Form } from "./Form";
import { motion } from "framer-motion";
export const Entrance = () => {
  useEffect(() => {});
  return (
    <div className={styles.entrance}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        It’s more than just a trip
      </motion.h1>
      <div className={styles.whereToMove}>
        <Form />
      </div>
    </div>
  );
};
