import styles from "./projects.module.css";
import Project from "./project";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <Project
        id="project1"
        image="https://i.ibb.co/y0FZgcG/Quantum-Muscle.png"
        title="Project 1"
        description="This is the first project."
        technologies={[FaGithub, FaGithub, FaGithub]}
      />
      <Project
        id="project2"
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 2"
        description="This is the second project."
        technologies={[FaGithub, FaGithub, FaGithub]}
      />

      <Project
        id="project3"
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 3"
        description="This is the third project."
        technologies={[FaGithub, FaGithub, FaGithub]}
      />

      <Project
        id="project4"
        image="https://i.ibb.co/y01VfrV/Mockup.png"
        title="Project 4"
        description="This is the fourth project."
        technologies={[FaGithub, FaGithub, FaGithub]}
      />
    </div>
  );
}
