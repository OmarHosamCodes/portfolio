"use client";

import { useEffect, useRef } from "react";
import styles from "./splash.module.css";
import logo from "@/icons/Icon-192.png";
import Image from "next/image";
export default function Splash({
  loading,
  handleLoading,
}: {
  loading: boolean;
  handleLoading: () => void;
}) {
  const progressBarRef = useRef<HTMLDivElement>(null); // Add the type HTMLDivElement to the useRef function

  useEffect(() => {
    function setup() {
      setTimeout(() => {
        progressBarRef.current!.style.width = "10%";
      }, 500);
      setTimeout(() => {
        progressBarRef.current!.style.width = "100%";
      }, 1000);
      setTimeout(() => {
        handleLoading();
      }, 1500);
    }
    setup();
  });

  return (
    <div className={styles.splashScreen}>
      <Image
        src={logo}
        alt="Logo"
        width={192}
        height={192}
        className={styles.logo}
      />
      <div className={styles.progressContainer}>
        <div ref={progressBarRef} className={styles.progressBar}></div>
      </div>
    </div>
  );
}
