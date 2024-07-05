import React from "react";
import styles from "./footer.module.css";
import Container from "../container/Container";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import Link from "next/link";

export const Corp = () => {
  return (
    <div className={styles.corp}>
      <Container>
        <div className={styles.container}>
          <div className={styles.links}>
            <Link target="_blank" href={"https://github.com/FT-asuma"}>
              <FaGithub size={24} color="#6E7491"/>
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/haunter_ins/"}>
              <FaInstagram size={24} color="#6E7491"/>
            </Link>
            <Link target="_blank" href={"https://t.me/asadullah_oo6"}>
              <FaTelegram size={24} color="#6E7491"/>
            </Link>
          </div>
          <p>© 2020 Tripma incorporated</p>
        </div>
      </Container>
    </div>
  );
};
