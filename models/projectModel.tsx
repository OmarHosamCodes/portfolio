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
          "https://i.ibb.co/k5tGjrV/image-1.png",
          "On the first look you can see a chart displaying the user's progress over time"
        ),
        new ProjectImage(
          "https://i.ibb.co/CHfhfgL/image-2.png",
          "On this drawer you can easily navigate through the app and see your progress in a more detailed way."
        ),
        new ProjectImage(
          "https://i.ibb.co/XpxGDrY/image-3.png",
          "On this page you can see your workout plan and the exercises you need to do."
        ),
        new ProjectImage(
          "https://i.ibb.co/VMhj6zm/image-4.png",
          "On this page you can see your profile and edit it."
        ),
        new ProjectImage(
          "https://i.ibb.co/sCmB01q/image-5.png",
          "On this page you can search for gym bros and add them to your friends list."
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
          "https://i.ibb.co/VTTjVD3/image-6.png",

          "On the first look you can see a simple yet very elegant UI that displays the products."
        ),
        new ProjectImage(
          "https://i.ibb.co/bQ3rxw7/image-7.png",

          "On this side drawer you can easily navigate through the app and see the products in a more detailed way."
        ),
        new ProjectImage(
          "https://i.ibb.co/NTq2Wfj/image-8.png",

          "On this page you can see the product details form name and price to the description and the sizes available."
        ),
        new ProjectImage(
          "https://i.ibb.co/5rnpnb2/image-9.png",

          "On this page you can see the cart and the products you added to it. You can also remove products or increase the quantity."
        ),
        new ProjectImage(
          "https://i.ibb.co/PFv7w0p/image-10.png",
          "Lighning fast search that displays the products that match the search query in real time."
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
          "https://i.ibb.co/Wx638Tn/image-16.png",
          "Just run and see the magic happen!"
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
      "SF-Scrapper",
      "Simply Fitness Scrapper",
      "Scrapes Website For Workouts",
      [
        new ProjectImage(
          "https://i.ibb.co/qCKR8xy/image-13.png",
          "The script starts with fetching all image URLs from the website."
        ),
        new ProjectImage(
          "https://i.ibb.co/v3gqq3r/image-14.png",
          "Then it fetches the workout details and saves them to a folder."
        ),
        new ProjectImage(
          "https://i.ibb.co/jyYpK8T/image-15.png",
          "The script then disconnects from the website and saves the data."
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
