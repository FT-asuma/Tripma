import { Button } from "./components/utils/Button";
import CookieAgree from "./components/PopUps/CookieAgree";
import { Adventures } from "./components/adventures/Adventures";
import { Entrance } from "./components/entrance/Entrance";
import { Header } from "./components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <CookieAgree />
      <Entrance />
      <Adventures />
    </main>
  );
}
