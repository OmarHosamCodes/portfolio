"use client";
import { IconType } from "react-icons";
import {
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGnometerminal,
  SiPython,
  SiReact,
} from "react-icons/si";

import { MdHive } from "react-icons/md";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";

class ProjectImage {
  readonly url: string;
  readonly description: string;

  constructor(url: string, description: string) {
    this.url = url;
    this.description = description;
  }
}

class ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly images: ProjectImage[];
  readonly link: string;
  readonly technologies: IconType[];

  constructor(
    id: string,
    name: string,
    description: string,
    images: ProjectImage[],
    link: string,
    technologies: IconType[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.link = link;
    this.technologies = technologies;
  }

  static projects: ProjectModel[] = [
    new ProjectModel(
      "Quantum-Muscle",
      "Quantum Muscle",
      "New Age Of Fitness",

      [
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
      ],
      "https://github.com/OmarHosamCodes/quantum_muscle",
      [
        SiFlutter,
        SiFirebase,
        MdHive,
        SiFlutter,
        SiFirebase,
        MdHive,
        SiFlutter,
        SiFirebase,
        MdHive,
      ]
    ),
    new ProjectModel(
      "Odin-Wear",
      "Odin Wear",
      "Great UI For Great Fashion",
      [
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
      ],
      "https://github.com/OmarHosamCodes/odin-cloth-wear",
      [
        SiReact,
        SiFirebase,
        TbBrandNextjs,
        SiReact,
        SiFirebase,
        TbBrandNextjs,
        SiReact,
        SiFirebase,
        TbBrandNextjs,
      ]
    ),

    new ProjectModel(
      "Mastery-Bot",
      "Mastery Bot",
      "Clash Royal Helper ;)",
      [
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
      ],
      "https://github.com/OmarHosamCodes/MasteryBot",
      [
        SiPython,
        SiGnometerminal,
        SiGithub,
        SiPython,
        SiGnometerminal,
        SiGithub,
        SiPython,
        SiGnometerminal,
        SiGithub,
      ]
    ),
    new ProjectModel(
      "Sportion",
      "Sportion",
      "For Healthy Lifestyle",
      [
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
      ],
      "https://github.com/OmarHosamCodes/sportion",
      [
        SiFlutter,
        TbApi,
        BsDatabase,
        SiFlutter,
        TbApi,
        BsDatabase,
        SiFlutter,
        TbApi,
        BsDatabase,
      ]
    ),
  ];

  static empty = new ProjectModel("", "", "", [], "", []);
}

export default ProjectModel;
