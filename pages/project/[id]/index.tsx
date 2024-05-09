"use client";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
import ProjectModel from "../../../models/projectModel";
import ProjectImage from "../../../components/projectComponents/projectImage";
import dynamic from "next/dynamic";
function Project() {
  const router = useRouter();
  const id = router.query.id as string;
  const imagesID = "images";
  const detailsID = "details";
  const smoothBehavior = "smooth";

  const [isScrollStart, setScrollStart] = useState(false);

  const [radius, setRadius] = useState(100);

  function myFunction(x: any) {
    if (x.matches) {
      setRadius(80);
    } else {
      setRadius(100);
    }
  }

  // Create a MediaQueryList object
  var x: MediaQueryList = window.matchMedia("(max-width: 480px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollStart(true);
      } else {
        setScrollStart(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Attach listener function on state changes
    x.addEventListener("change", function () {
      myFunction(x);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      x.removeEventListener("change", function () {
        myFunction(x);
      });
    };
  }, [isScrollStart, x]);
  let project: ProjectModel | undefined = ProjectModel.projects.find(
    (project) => project.id === id
  );

  const itemCount = project?.technologies.length!;
  const angleIncrement = 270 / (itemCount - 1);

  if (!project) {
    return <div className={styles.notFound}>Project not found</div>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.technologies}>
        {project!.technologies.map((Technology, index) => {
          const angle = index * angleIncrement;
          const radians = (angle - 90) * (Math.PI / 180);
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;
          return (
            <Technology
              key={index}
              className={styles.technology}
              style={{
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>
      <div className={styles.details} id={detailsID}>
        <h1>{project!.name}</h1>
        <p>{project!.description}</p>
        <MdKeyboardArrowDown
          className={styles.arrow}
          onClick={() => {
            const el = document.getElementById(imagesID);
            if (el) {
              el.scrollIntoView({ behavior: smoothBehavior });
            }
          }}
        />
      </div>
      <div className={styles.images} id={imagesID}>
        {project!.images.map((image, index) => (
          <ProjectImage
            key={index}
            url={image.url}
            description={image.description}
            index={index}
          />
        ))}
      </div>
      {isScrollStart && (
        <MdKeyboardArrowUp
          className={styles.arrowUP}
          onClick={() => {
            let el = document.getElementById(detailsID);

            if (el) {
              el.scrollIntoView({ behavior: smoothBehavior });
            }
          }}
        />
      )}
    </div>
  );
}

const NoSSRProject = dynamic(() => Promise.resolve(Project), { ssr: false });

export default NoSSRProject;
