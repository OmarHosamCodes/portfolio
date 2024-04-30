import styles from "./socials.module.css";
import { FaGithub } from "react-icons/fa";
import SocialButton from "./socialButton";

export default function Socials() {
  return (
    <div className={styles.row}>
      <SocialButton name="GitHub" icon={FaGithub} />
      <SocialButton name="GitHub" icon={FaGithub} />
      <SocialButton name="GitHub" icon={FaGithub} />
    </div>
  );
}
