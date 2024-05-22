import styles from "./socials.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "./socialButton";
import { BsLinkedin } from "react-icons/bs";

export default function Socials() {
  return (
    <div className={styles.row}>
      <SocialButton name="GitHub" icon={FaGithub} />
      <SocialButton name="Linkedin" icon={BsLinkedin} />
      {/* <SocialButton name="" icon={FaGithub} /> */}
    </div>
  );
}
