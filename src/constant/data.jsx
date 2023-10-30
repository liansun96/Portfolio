import HTML5 from "../assets/SkillIconsHtml.svg";
import CSS3 from "../assets/SkillIconsCss.svg";
import JavaScript from "../assets/SkillIconsJavascript.svg";
import React from "../assets/SkillIconsReactLight.svg";
import NextJs from "../assets/SkillIconsNextjsLight.svg";
import Redux from "../assets/SkillIconsRedux.svg";
import Github from "../assets/SkillIconsGithubLight.svg";
import Git from "../assets/SkillIconsGit.svg";
import Bootstrap from "../assets/SkillIconsBootstrap.svg";
import SASS from "../assets/SkillIconsSass.svg";
import Tailwind from "../assets/SkillIconsTailwindcssLight.svg";
import Photoshop from "../assets/SkillIconsPhotoshop.svg";
import netflix from "../assets/netflix.png";
import contact from "../assets/contact-app.png";
import recipes from "../assets/recipes.png";
import nft from "../assets/nft.png";
import nftDashboard from "../assets/nft-dashboard.png";

export const Skills = [
  {
    id: 1,
    image: HTML5,
    title: "HTML5",
  },
  {
    id: 2,
    image: CSS3,
    title: "CSS3",
  },
  {
    id: 3,
    image: JavaScript,
    title: "JavaScript",
  },
  {
    id: 4,
    image: React,
    title: "React",
  },
  {
    id: 5,
    image: NextJs,
    title: "Next Js",
  },
  {
    id: 6,
    image: Redux,
    title: "Redux",
  },
  {
    id: 7,
    image: Github,
    title: "Github",
  },
  {
    id: 8,
    image: Git,
    title: "Git",
  },
  {
    id: 9,
    image: Bootstrap,
    title: "Bootstrap",
  },
  {
    id: 10,
    image: SASS,
    title: "SASS",
  },
  {
    id: 11,
    image: Tailwind,
    title: "Tailwind",
  },
  {
    id: 12,
    image: Photoshop,
    title: "Photoshop",
  },
];

export const projects = [
  {
    id: 1,
    image: netflix,
    title: "Netflix Clone",
    github: "https://github.com/liansun96/Netflix-Clone",
    demo: "https://netflix-clone-996.netlify.app",
    description:
      "Netflix Clone is a feature-rich streaming platform that replicates the popular Netflix service while offering a range of functionalities that enhance user experience and content discovery.It is designed to explore, search, filter, and sort through a vast library of Movies and TV Shows, allowing users to curate their personal watchlist.",
    badges: [
      {
        id: 1,
        text: "The Movie Database API (TMDB)",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "Redux Toolkit",
      },
      {
        id: 4,
        text: "RTK Query",
      },
      {
        id: 5,
        text: "Tailwind Css",
      },
      {
        id: 6,
        text: "Framer Motion"
      }
    ],
  },
  {
    id: 2,
    image: contact,
    title: "Google Contact Clone",
    github: "https://github.com/liansun96/Google-Contacts-Clone-Auth",
    demo: "",
    description:
      "Google Contact Clone is a versatile contact management application that empowers users to register their accounts, create, update, and delete contacts, and mark certain contacts as favorites. This service provides users with a robust and user-friendly tool for managing their contacts efficiently.",
    badges: [
      {
        id: 1,
        text: "Authentication API",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "Redux Toolkit",
      },
      {
        id: 4,
        text: "RTK Query",
      },
      {
        id: 5,
        text: "Tailwind Css",
      },
    ],
  },
  {
    id: 3,
    image: recipes,
    title: "Recipes App",    
    github:
      "https://github.com/liansun96/The-Meal-DB-Project",
    demo: "https://meals-oclock-recipe.netlify.app/",
    description:
      'The "Recipes App" utilizes TheMealDB API for a wide selection of meal recipes categorized by meal type. Each recipe includes detailed ingredients and cooking instructions, ensuring users can easily create delicious dishes. The app also features a search function to find recipes by name , browse random recipes and a favorite meal feature for quick access to preferred dishes.',
    badges: [
      {
        id: 1,
        text: "TheMealDB API",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "Redux Toolkit",
      },
      {
        id: 4,
        text: "Axios"
      },
      {
        id: 5,
        text: "Tailwind Css",
      },
    ],
  },
  {
    id: 4,
    image: nft,
    title: "NFT Marketplace",
    tech: "React | Tailwind",
    github: "https://github.com/liansun96/NFT-Marketplace-Team",
    demo: "https://nft-marketplace-team.vercel.app/",
    description:
      "This project is only frontend UI project, users can register, create, buy and sell their artworks",
    badges: [
      {
        id: 1,
        text: "JavaScript",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "Swiper",
      },
      {
        id: 4,
        text: "Tailwind Css",
      },
    ],
  },
  {
    id: 5,
    image: nftDashboard,
    title: "NFT Dashboard",
    tech: "React | Tailwind",
    github: "https://github.com/liansun96/NFT-Marketplace-Dashboard",
    demo: "https://nft-marketplace-dashboard-five.vercel.app/",
    description:
      "This dashboard is only frontend UI project for NFT Marketplace. In this dashboard, admin can manage users and their artworks.",
    badges: [
      {
        id: 1,
        text: "JavaScript",
      },
      {
        id: 2,
        text: "React",
      },
      {
        id: 3,
        text: "Swiper",
      },
      {
        id: 4,
        text: "Tailwind Css",
      },
    ],
  },    
];
