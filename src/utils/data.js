import {
  stackify,
  netfilm,
  cryptomark,
  restauranti,
  backend,
  frontend,
  soft,
  tools,
  web3,
} from "../assets/index";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML5/CSS3(Sass/SCSS)", percentage: "80%" },
      { skill: "Javascript", percentage: "90%" },
      { skill: "Typescript", percentage: "80%" },
      { skill: "ReactJS", percentage: "80%" },
      { skill: "Tailwind CSS", percentage: "80%" },
      { skill: "shadcn", percentage: "80%" },
      { skill: "Material UI", percentage: "75%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "NodeJS", percentage: "70%" },
      { skill: "ExpressJS", percentage: "65%" },
      { skill: "MongoDB", percentage: "80%" },
      { skill: "Mongoose", percentage: "80%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "NextJS", percentage: "90%" },
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "75%" },
      { skill: "Vite", percentage: "90%" },
    ],
  },
  {
    title: "Web3",
    icon: web3,
    skills: [
      { skill: "Solidity", percentage: "90%" },
      { skill: "Hardhat", percentage: "85%" },
      { skill: "Web3JS", percentage: "80%" },
      { skill: "IPFS Infura", percentage: "85%" },
      { skill: "Metamask", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: soft,
    skills: [
      { skill: "Problem-solving", percentage: "90%" },
      { skill: "Collaboration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "80%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Netfilm",
    outwardLink: "https://netfilm-iota.vercel.app/",
    src: netfilm,
    href: "https://github.com/n2n0n00/netfly_v2",
    date: "NextJS, Typescript, TailwindCSS, shadcn",
    responsibilities: [
      "Netfilm is a web application built with Next.js, TypeScript, and powered by data from The Movie Database (TMDb). It aims to provide users with a Netflix-like experience for browsing and discovering movies and TV series.",
    ],
  },
  {
    title: "Restauranti",
    outwardLink: "https://restauranti.vercel.app/",
    src: restauranti,
    href: "https://github.com/n2n0n00/restauranti",
    date: "ReactJS, SCSS",
    responsibilities: [
      "Welcome to Restauranti, a modern and responsive restaurant website built with React.js and SCSS. This project aims to showcase the menu, ambience, and contact details of a restaurant in an elegant and user-friendly manner.",
    ],
  },
  {
    title: "Stackify",
    outwardLink: "https://stackify.vercel.app/",
    src: stackify,
    href: "https://github.com/n2n0n00/stackify",
    date: "NextJS, Typescript, MongoDB, Mongoose, TailwindCSS",
    responsibilities: [
      "Stackify is a web application built with Next.js, TypeScript, MongoDB, and Mongoose, designed to resemble StackOverflow. It allows users to ask questions, provide answers, and engage in a community-driven Q&A platform.",
    ],
  },

  {
    title: "CryptoMark",
    src: cryptomark,
    outwardLink: "https://github.com/n2n0n00/cryptomark",
    href: "https://github.com/n2n0n00/cryptomark",
    date: "ReactJS, Solidity, Hardhat, MongoDB, TailwindCSS, Infura",
    responsibilities: [
      "CryptoMark is a decentralized NFT (Non-Fungible Token) marketplace built with Solidity, Next.js, React, and Hardhat. It allows users to create, buy, and sell NFTs securely on the (Eth/Testnet) blockchain.",
    ],
  },
];
