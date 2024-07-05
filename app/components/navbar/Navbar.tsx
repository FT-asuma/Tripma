import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../utils/Button";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const { push } = useRouter();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <Image
                alt="logo"
                src={"/icons/logo/logo.svg"}
                width={107}
                height={30}
              />
            </Link>
          </div>
          <ul className={styles.navbarList}>
            <li>
              <Link href="/flights">Flights</Link>
            </li>
            <li>
              <Link href="#">Hotels</Link>
            </li>
            <li>
              <Link href="#">Packages</Link>
            </li>
            <li>
              <Link href="#">Sign in</Link>
            </li>
            <Link href={"/auth"}>
              <Button value setter={() => push("/auth")}>
                Sign Up
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
