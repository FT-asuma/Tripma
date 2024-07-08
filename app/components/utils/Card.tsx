"use client";
import React, { useRef, useState } from "react";
import styles from "./utils.module.css";
import Image from "next/image";
import { ICard } from "@/interfaces";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
export const Card = ({ img, title, price, label, link }: ICard) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.7", "0.7 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      style={{
        opacity: scaleProgress,
        scale: scaleProgress,
      }}
      className={`${styles.card}`}
      ref={ref}
    >
      <Link href={`/cards/${link.toLocaleLowerCase()}`} key={title}>
        <div className={`${styles.cardContainer}`}>
          <div className={styles.cardImage}>
            <Image src={img} alt={title} width={1000} height={1000} />
          </div>
          <div className={styles.cardBody}>
            <div className={styles.description}>
              <h4>
                {title} <span>{link}</span>
              </h4>
              <p>{label}</p>
            </div>
            {price !== 0 && <p className={styles.price}>${price}</p>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
