import { html, next, js } from "../assets/index";

export const NavLinks = [
  {
    label: "Home",
    activeClass: "active",
    to: "hero",
    offset: -80,
  },
  {
    label: "Tech Stack",
    activeClass: "active",
    to: "skills",
    offset: -120,
  },
  {
    label: "Project Showcase",
    activeClass: "active",
    to: "work-exp",
    offset: -100,
  },
  {
    label: "Contact Me",
    activeClass: "active",
    to: "contact",
    offset: -100,
  },
];

export const MenuNavs = [
  {
    label: "Home",
    to: "hero",
    href: "#hero",
  },
  {
    label: "Tech Stack",
    to: "skills",
    href: "#skills",
  },
  {
    label: "Project Showcase",
    to: "work-exp",
    href: "#work-exp",
  },
  {
    label: "Contact Me",
    to: "contact",
    href: "#contact",
  },
];

export const StackImages = [
  {
    alt: "html",
    src: html,
  },
  {
    alt: "next",
    src: next,
  },
  {
    alt: "js",
    src: js,
  },
];
