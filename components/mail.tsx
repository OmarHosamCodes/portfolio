"use client";

import { useRef, useState } from "react";
import styles from "./mail.module.css";
import emailjs from "@emailjs/browser";
export default function Mail() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  function HandleSend({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) {
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      {
        name: name,
        email: email,
        message: message,
      }
    );
  }
  return (
    <form className={styles.form} id="mail" ref={formRef}>
      <input
        type="text"
        placeholder="Name"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        placeholder="Message"
        required
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity();
            return;
          }

          formRef.current.reset();

          const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            `Message From ${name}`!
          )}&body=${encodeURIComponent(message!)}`;

          window.location.href = mailtoLink;
        }}
      >
        Send
      </button>
    </form>
  );
}
