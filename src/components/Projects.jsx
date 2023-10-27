import React from "react";
import { BiLink } from "react-icons/bi";
import { HiMiniArrowRight, HiMiniArrowUpRight } from "react-icons/hi2";
import netflix from "../assets/netflix.png";
import contact from "../assets/contact-app.png";
import recipes from "../assets/recipes.png";
import nft from "../assets/nft.png";
import nftDashboard from "../assets/nft-dashboard.png";

const Projects = () => {
  return (
    <div id="PROJECTS" className="text-green_text dark:text-gray_text">
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
            <img src={netflix} alt="netflix" />
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg text-light">Netflix Clone</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="leading-5 text-sm">
            Netflix Clone is a feature-rich streaming platform that replicates
            the popular Netflix service while offering a range of
            functionalities that enhance user experience and content discovery.
            It is designed to explore, search, filter, and sort through a vast
            library of Movies and TV Shows, allowing users to curate their
            personal watchlist.
          </p>
          <div className="flex gap-4">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href="https://github.com/liansun96/Netflix-Clone"
                className="mb-1 hover:underline"
              >
                github
              </a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href="https://netflix-clone-996.netlify.app"
                className="mb-1 hover:underline"
              >
                demo
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">The Movie Database API (TMDB)</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">RTK Query</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
            <img src={contact} alt="contact" />
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg text-light">Google Contact Clone</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="leading-5 text-sm">
            Google Contact Clone is a versatile contact management application
            that empowers users to register their accounts, create, update, and
            delete contacts, and mark certain contacts as favorites. This
            service provides users with a robust and user-friendly tool for
            managing their contacts efficiently.
          </p>
          <div className="flex gap-4">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href="https://github.com/liansun96/Google-Contacts-Clone-Auth"
                className="mb-1 hover:underline"
              >
                github
              </a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a target="_blank" href="" className="mb-1 hover:underline">
                demo
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Authentication API</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">RTK Query</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
            <img src={recipes} className="" alt="recipes" />
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg text-light">Recipes App</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="leading-5 text-sm">
            The "Recipes App" utilizes TheMealDB API for a wide selection of
            meal recipes categorized by meal type. Each recipe includes detailed
            ingredients and cooking instructions, ensuring users can easily
            create delicious dishes. The app also features a search function to
            find recipes by name , browse random recipes and a favorite meal
            feature for quick access to preferred dishes.
          </p>
          <div className="flex gap-4">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href={"https://github.com/liansun96/The-Meal-DB-Project"}
                className="mb-1 hover:underline"
              >
                github
              </a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href="https://meals-oclock-recipe.netlify.app/"
                className="mb-1 hover:underline"
              >
                demo
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">TheMealDB API</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Axios</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
            <img src={nft} className="" alt="nft" />
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg text-light">NFT Marketplace</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="leading-5 text-sm">
            This project is only frontend UI project, users can register,
            create, buy and sell their artworks
          </p>
          <div className="flex gap-4">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href={"https://github.com/liansun96/NFT-Marketplace-Team"}
                className="mb-1 hover:underline"
              >
                github
              </a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href={"https://nft-marketplace-team.vercel.app"}
                className="mb-1 hover:underline"
              >
                demo
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">JavaScript</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Swiper</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
            <img src={nftDashboard} className="" alt="nftDashboard" />
          </div>
        </div>
        <div className="w-[70%] flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-bold text-lg text-light">
              NFT Marketplace Dashboard
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="leading-5 text-sm">
            This dashboard is only frontend UI project for NFT Marketplace. In
            this dashboard, admin can manage users and their artworks.
          </p>
          <div className="flex gap-4">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href={"https://github.com/liansun96/NFT-Marketplace-Dashboard"}
                className="mb-1 hover:underline"
              >
                github
              </a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a
                target="_blank"
                href="https://nft-marketplace-dashboard-five.vercel.app"
                className="mb-1 hover:underline"
              >
                demo
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">JavaScript</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Swiper</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 p-5 group cursor-pointer text-light mt-4">
        <a className="text-xl font-bold group-hover:underline w-fit">
          View Full Project Archive
        </a>
        <div className=" group-hover:translate-x-2 duration-300">
          <HiMiniArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Projects;
