import { IconType } from "react-icons";
import styles from "./project.module.css";
import Image from "next/image";
interface ProjectProps {
  title: string;
  description: string;
  technologies: IconType[];
  image: string;
  link: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div
      className={styles.project}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className={styles.technologies}>
        {props.technologies.map((Technology, index) => (
          <Technology key={index} className={styles.technology} />
        ))}
      </div>
      <a href={props.link}>View project</a>
    </div>
  );
}
