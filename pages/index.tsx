"use client";
import styles from "@/styles/Home.module.css";
import Title from "../components/title";
import Socials from "../components/socials";
import Subtitle from "../components/subtitle";
import Divider from "../components/divider";
import Projects from "../components/projects";
import Technologies from "../components/technologies";
import FloatingIsland from "../components/floatingIsland";
import Mail from "../components/mail";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Splash from "@/splash/splash";

//? TODO:
//! 1. Add Data
//! 2. Add Projects

// #CFA7FF

function Home() {
  const [isScrollStart, setScrollStart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      blockHeadless: true,

      limitRate: {
        id: "app",
        throttle: 1000,
      },
    });
  }, []);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollStart(true);
      } else {
        setScrollStart(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollStart]);

  if (loading) {
    return <Splash loading={loading} handleLoading={handleLoading} />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.splash} />
      {isScrollStart && <FloatingIsland />}
      <div className={styles.coloredBubble}></div>
      <div className={styles.container}>
        <Title />
        <Socials />
        <Subtitle />
        <MdKeyboardArrowDown
          className={styles.arrow}
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
      <Projects />
      <Divider width={"50vw"} thickness={1} />
      <Technologies />
      <Divider width={"50vw"} thickness={1} />
      <Mail />
    </main>
  );
}

const NoSSRHome = dynamic(() => Promise.resolve(Home), {
  ssr: false,
});

export default NoSSRHome;
