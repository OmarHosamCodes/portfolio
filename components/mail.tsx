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

          const body = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
           
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #0f0f0f;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
     
        label {
            color:#f0f0f0;
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }
    
    
        button {
            padding: 10px 20px;
            background-color: #cfa7ff;
            color: #f0f0f0f;
font-weight:bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
      
    </style>
</head>
<body>
    <div class="container">
       
 <label for="name">Name : ${name}</label>
  <label for="email">Email : ${email}</label>
<br><br>  
<label for="message">${message}</label>
<br><br>
        <button >From Website</button>
    </div>


</body>
</html>`;

          const mailtoLink = `mailto:omarhosamcodes@gmail.comsubject=${encodeURIComponent(
            name!
          )}&body=${encodeURIComponent(body!)}`;

          window.location.href = mailtoLink;
        }}
      >
        Send
      </button>
    </form>
  );
}
