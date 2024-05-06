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
// #CFA7FF
function Home() {
  emailjs.init({
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    blockHeadless: true,

    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 1000,
    },
  });

  return (
    <main className={styles.main}>
      <FloatingIsland />
      <Title />
      <Socials />
      <Subtitle />
      <Divider width={"50vw"} thickness={1} />
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
