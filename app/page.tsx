import { Button } from "./components/utils/Button";
import CookieAgree from "./components/PopUps/CookieAgree";
import { Adventures } from "./components/adventures/Adventures";
import { Entrance } from "./components/entrance/Entrance";
import styles from "./page.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className={styles.main}>
      <CookieAgree />
      <SpeedInsights sampleRate={1}/>
      <Entrance />
      <Adventures />
    </main>
  );
}
