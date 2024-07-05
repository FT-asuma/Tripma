import React from 'react'
import styles from "./utils.module.css"
import Image from 'next/image'
import { ICard } from '@/interfaces'
import Link from 'next/link'
export const Banner = ({img, title, price, label, link}: ICard) => {
  return (
    <Link href={`/cards/${link.toLocaleLowerCase()}`} key={title} className={styles.banner}>
      <div className={styles.cardImage}>
        <Image src={img} alt={title} width={1500} height={1500} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.description}>
          <h4>{title} <span>{link}</span></h4>
          <p>{label}</p>
        </div>
        <p className={styles.price}>${price}</p>
      </div>
    </Link>
  )
}
