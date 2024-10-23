import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Connor Smith",
  EMAIL: "csmith8dev@gmail.com",
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/smithc10",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/connor-smith-atx/",
  },
];
