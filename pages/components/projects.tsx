import styles from "./projects.module.css";
import Project from "./project";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Project
        image="https://i.ibb.co/y0FZgcG/Quantum-Muscle.png"
        title="Project 1"
        description="This is the first project."
        technologies={[FaGithub, FaGithub, FaGithub]}
        link="/"
      />
      <Project
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 2"
        description="This is the second project."
        technologies={[FaGithub, FaGithub, FaGithub]}
        link="/"
      />

      <Project
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 3"
        description="This is the third project."
        technologies={[FaGithub, FaGithub, FaGithub]}
        link="/"
      />

      <Project
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 4"
        description="This is the fourth project."
        technologies={[FaGithub, FaGithub, FaGithub]}
        link="/"
      />
    </div>
  );
}
