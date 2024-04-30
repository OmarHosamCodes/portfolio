import styles from "./title.module.css";
export default function Title() {
  return (
    <>
      <div>
        <text className={styles.title}>Hey, I am </text>
        <text className={styles.underlinedTitle}>Omar Hosam</text>
      </div>
      <text className={styles.gradientTitle}>Fullstack Developer</text>
    </>
  );
}
