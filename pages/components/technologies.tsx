import styles from "./technologies.module.css";
import Technology from "./technology";
import {
  TbBrandDjango,
  TbBrandFirebase,
  TbBrandFlutter,
  TbBrandGithub,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
} from "react-icons/tb";
export default function Technologies() {
  return (
    <div className={styles.technologies}>
      <Technology icon={TbBrandNextjs} />
      <Technology icon={TbBrandFlutter} />
      <Technology icon={TbBrandReact} />
      <Technology icon={TbBrandFirebase} />
      <Technology icon={TbBrandGithub} />
      <Technology icon={TbBrandNodejs} />
      <Technology icon={TbBrandMongodb} />
      <Technology icon={TbBrandDjango} />
    </div>
  );
}
