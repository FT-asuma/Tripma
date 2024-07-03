import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Container from "../container/Container";
interface PopUp {
  popUp: Boolean;
  setPopUp: Function;
}
export const PopUp = ({ popUp, setPopUp }: PopUp) => {
  return (
    <div
      style={
        popUp !== true
          ? { transform: "translate(0, -140%)", transition: "0.8s", height: 0 }
          : { transform: "translate(0, 0)", transition: "0.5s" }
      }
      className={styles.navbarPopUp}
    >
        <div className={styles.container}>
          <p className={`${styles.popUpText}`}>
            Join Tripma today and save up to 20% on your flight using code
            TRAVEL at checkout. Promotion valid for new users only.
          </p>
          <button
            onClick={() => {
              setPopUp(false);
            }}
            className={styles.closeIcon}
            type="button"
          >
            <Image
              className={styles.icon}
              alt="close icon"
              src={"/icons/perform/close.svg"}
              width={16}
              height={16}
            />
          </button>
        </div>
    </div>
  );
};
