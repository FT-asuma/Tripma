import React, { useRef } from "react";
import styles from "./utils.module.css";
import Image from "next/image";
import { ICard } from "@/interfaces";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
export const Banner = ({ img, title, price, label, link }: ICard) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.7", "0.6 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className={styles.banner}
      style={{
        opacity: scaleProgress,
        scale: scaleProgress,
      }}
      ref={ref}
    >
      <Link href={`/cards/${link.toLocaleLowerCase()}`} key={title}>
        <div className={styles.cardImage}>
          <Image src={img} alt={title} width={1500} height={1500} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.description}>
            <h4>
              {title} <span>{link}</span>
            </h4>
            <p>{label}</p>
          </div>
          <p className={styles.price}>${price}</p>
        </div>
      </Link>
    </motion.div>
  );
};
