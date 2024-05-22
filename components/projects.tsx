
import styles from "./projects.module.css";
import Project from "./project";
import {
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGnometerminal,
  SiPython,
  SiReact,
} from "react-icons/si";

import { MdHive } from "react-icons/md";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.splash} />
      <Project
        id="Quantum-Muscle"
        title="Quantum Muscle"
        description="New Age Of Fitness"
        technologies={[SiFlutter, SiFirebase, MdHive]}
      />
      <Project
        id="Odin-Wear"
        title="Odin Wear"
        description="Great UI For Great Fashion"
        technologies={[SiReact, SiFirebase, TbBrandNextjs]}
      />

      <Project
        id="Mastery-Bot"
        title="Mastery Bot"
        description="Clash Royal Helper ;)"
        technologies={[SiPython, SiGnometerminal, SiGithub]}
      />

      <Project
        id="Sportion"
        title="Sportion"
        description="For Healthy Lifestyle"
        technologies={[SiFlutter, TbApi, BsDatabase]}
      />
    </div>
  );
}
