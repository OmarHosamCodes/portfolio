import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Omar Hosam Codes",
  description: "Nothing Beyond Your Imagination",
  icons: [
    {
      url: "icons/Icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "icons/Icon-512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  keywords: [
    "Omar",
    "Hosam",
    "Codes",
    "Omar Hosam Codes",
    "Omar Hosam",
    "Omar Codes",
    "Hos",
    "Omar Hos",
    "Omar Codes",
    "Amr",
    "Hossam",
    "Amr Hossam",
    "Amr Codes",
    "Hossam Codes",
    "Flutter",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "Dart",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "Web Development",
    "Mobile Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Software Development",
    "Software Engineering",
    "Software Developer",
    "Web Developer",
    "Mobile Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Development",
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
