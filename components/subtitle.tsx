import styles from "./subtitle.module.css";

export default function Subtitle() {
  return (
    <div className={styles.subtitleContainer}>
      <text className={styles.subtitle}>
        I am Omar, passionate full-stack developer from Egypt with an arsenal of
        technologies allowing me to tackle any project, from mobile app
        development to robust web applications and APIs..
      </text>
    </div>
  );
}
