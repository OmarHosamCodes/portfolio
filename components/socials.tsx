import styles from "./socials.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialButton from "./socialButton";
import { BsLinkedin } from "react-icons/bs";

export default function Socials() {
  return (
    <div className={styles.row}>
      <SocialButton
        name="GitHub"
        icon={FaGithub}
        link="https://github.com/OmarHosamCodes/"
      />
      <SocialButton
        name="Linkedin"
        icon={BsLinkedin}
        link="https://www.linkedin.com/in/omarhosamcodes/"
      />
    </div>
  );
}
