"use client";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

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
      "project1",
      "Project 1",
      "This is the first project",

      [
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
        new ProjectImage(
          "https://placehold.co/345x700",
          "Lorem ipsum dolor sit amet, justo consectetur enim felis at est.Lorem ipsum dolor sit amet, justo consectetur enim felis at est."
        ),
      ],
      "https://www.google.com",
      [FaGithub, FaGithub, FaGithub, FaGithub, FaGithub, FaGithub, FaGithub]
    ),
  ];

  static empty = new ProjectModel("", "", "", [], "", []);
}

export default ProjectModel;
