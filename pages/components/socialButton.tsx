import Image from "next/image";
import styles from "./socialButton.module.css";
import { IconType } from "react-icons";
import React from "react";

interface SocialButtonProps {
  name: string;
  icon: IconType;
}

export default function SocialButton(props: SocialButtonProps) {
  return (
    <div className={styles.chip}>
      <props.icon className={styles.icon} />
      <text className={styles.name}>{props.name}</text>
    </div>
  );
}
