"use client";
import React, { useState } from "react";
import styles from "./utils.module.css";
import Image from "next/image";
import { ICard } from "@/interfaces";
import Link from "next/link";
export const Card = ({ img, title, price, label, link }: ICard) => {
  return (
    <Link
      href={`/cards/${link.toLocaleLowerCase()}`}
      key={title}
      className={`${styles.card}`}
    >
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
  );
};
