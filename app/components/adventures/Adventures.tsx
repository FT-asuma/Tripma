"use client";
import React from "react";
import styles from "./adventure.module.css";
import Container from "../container/Container";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CARDS, BANNERS, UNIQUE_PLACES } from "@/constant/index";
import { Card as CaRd } from "../utils/Card";
import { Banner } from "../utils/Banner";
import { Button } from "../utils/Button";
export const Adventures = () => {
  return (
    <div className={styles.adventures}>
      <Container>
        <div className={styles.container}>
          <div className={styles.advertisement}>
            <div className={styles.advice}>
              <h3>
                Find your next adventure with these <span>flight deals</span>
              </h3>
              <Link href={"/adventure"}>
                All <BsArrowRight size={24} color="#A1B0CC" />
              </Link>
            </div>
            <div className={styles.cards}>
              <div className={styles.popularCards}>
                {CARDS.map((item, index) => (
                  <CaRd
                    img={item.img}
                    label={item.label}
                    link={item.link}
                    price={item.price}
                    title={item.title}
                    key={item.price}
                  />
                ))}
              </div>
              <div className={styles.long}>
                {BANNERS.map(({ title, img, label, link, price }) => {
                  return (
                    <Banner
                      img={img}
                      label={label}
                      link={link}
                      price={price}
                      title={title}
                      key={price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.advertisement}>
            <div className={styles.advice}>
              <h3>
                Find your next adventure with these{" "}
                <span style={{ color: "var(--turqoise)" }}>flight deals</span>
              </h3>
              <Link href={"/adventure"}>
                All <BsArrowRight size={24} color="#A1B0CC" />
              </Link>
            </div>
            <div className={styles.cards}>
              <div className={styles.popularCards}>
                {UNIQUE_PLACES.map((item, index) => (
                  <CaRd
                    img={item.img}
                    label={item.label}
                    link={item.link}
                    title={item.title}
                    key={item.link}
                    price={0}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={styles.loadMore}>
            <Button setter={() => {}} value>
              Explore more stays
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
