import { IconType } from "react-icons";
import styles from "./technology.module.css";

interface TechnologyProps {
  icon: IconType;
}

export default function Technology(props: TechnologyProps) {
  return (
    <div className={styles.technology}>
          <props.icon className={
            styles.icon
      } />
    </div>
  );
}
