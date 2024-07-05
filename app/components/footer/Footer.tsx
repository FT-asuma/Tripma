"use client";
import React from "react";
import styles from "./footer.module.css";
import Container from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { FaApple } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                src={"/icons/logo/logo.svg"}
                width={107}
                height={30}
                alt="logo image"
              />
            </Link>
          </div>
          <ul className={styles.navigatorLists}>
            <li className={styles.navigator}>
              <h3>About</h3>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>About Tripma</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>How it works</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Careers</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Press</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Blog</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Forum</Link>
            </li>
          </ul>
          <ul className={styles.navigatorLists}>
            <li className={styles.navigator}>
              <h3>Partner with us</h3>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Partnership programs</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Affiliate program</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Connectivity partners</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Promotions and events</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Integrations</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Community</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Loyalty program</Link>
            </li>
          </ul>
          <ul className={styles.navigatorLists}>
            <li className={styles.navigator}>
              <h3>Support</h3>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Help Center</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Contact us</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Privacy policy</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Terms of service</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Trust and safety</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Accessibility</Link>
            </li>
          </ul>
          <ul className={styles.navigatorLists}>
            <li className={styles.navigator}>
              <h3>Get the app</h3>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Tripma for Android</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Tripma for iOS</Link>
            </li>
            <li className={styles.navigator}>
              <Link href={"#"}>Mobile site</Link>
            </li>
            <li className={styles.navigator}>
              <Button
                color="secondary"
                style={{
                  backgroundColor: "#000",
                }}
                variant="contained"
              >
                <FaApple size={28} color="white" />
                <div className={styles.desc}>
                  <p>Download on the</p>
                  <h3>App Store</h3>
                </div>
              </Button>
            </li>
            <li className={styles.navigator}>
              <Button
                color="secondary"
                style={{
                  backgroundColor: "#000",
                }}
                variant="contained"
              >
                <Image
                  src={"/icons/perform/play.svg"}
                  width={24}
                  height={24}
                  alt="google play image"
                />
                <div className={styles.desc}>
                  <p>get it on</p>
                  <h3>google play</h3>
                </div>
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
