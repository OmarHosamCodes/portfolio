import Image from "next/image";
import styles from "./projectImage.module.css";

function ProjectImage({
  url,
  description,
  index,
}: {
  url: string;
  description: string;
  index: number;
}) {
  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.image}
        src={url}
        width={345 / 1.5}
        height={700 / 1.5}
        alt={""}
      />

      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default ProjectImage;