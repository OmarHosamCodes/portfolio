import { IconType } from "react-icons";
import styles from "./project.module.css";
import { useRouter } from "next/navigation";
interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: IconType[];
  image: string;
}

export default function Project(props: ProjectProps) {
  const router = useRouter();
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
      <a
        onClick={() => router.push(`/project/${props.id}`)}
        className={styles.viewProject}
      >
        View project
      </a>
    </div>
  );
}
