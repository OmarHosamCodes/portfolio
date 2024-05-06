"use client";

import { useState } from "react";
import styles from "./mail.module.css";
import emailjs from "@emailjs/browser";
export default function Mail() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

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
    <form className={styles.form} id="mail">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        type="submit"
        onClick={() => {
          if (name && email && message) {
            HandleSend({ name, email, message });
            alert("Message sent!");
          }

          alert("Please fill out all fields.");
        }}
      >
        Send
      </button>
    </form>
  );
}
