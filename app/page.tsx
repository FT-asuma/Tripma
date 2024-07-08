"use client";
import CookieAgree from "./components/PopUps/CookieAgree";
import { Adventures } from "./components/adventures/Adventures";
import { Entrance } from "./components/entrance/Entrance";
import styles from "./page.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense, useState } from "react";
import LoadingSkeleton from "./components/loader/LoadingSkeleton";
import { useEffect } from "react";
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    setIsLoaded(false);
  }, []);
  return (
    <>
      {isLoaded ? (
        <LoadingSkeleton />
      ) : (
        <main className={styles.main}>
          <CookieAgree />
          <SpeedInsights sampleRate={1} />
          <Entrance />
          <Adventures />
        </main>
      )}
    </>
  );
}
