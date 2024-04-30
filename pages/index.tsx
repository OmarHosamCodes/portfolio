import styles from "@/styles/Home.module.css";
import Title from "./components/title";
import Socials from "./components/socials";
import Subtitle from "./components/subtitle";
import Divider from "./components/divider";
import Projects from "./components/projects";
import Technologies from "./components/technologies";
// #CFA7FF
export default function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <Socials />
      <Subtitle />
      <Divider width={"80vw"} thickness={1} />
      <Projects />
      <Divider width={"80vw"} thickness={1} />
      <Technologies />
    </main>
  );
}
