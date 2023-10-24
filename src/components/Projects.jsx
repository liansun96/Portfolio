import React from "react";
import { BiLink } from "react-icons/bi";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Projects = () => {
  return (
    <div id="PROJECTS" className="text-green_text dark:text-gray_text">
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[80%] h-[80px] rounded bg-gray dark:bg-green"></div>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
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
          <div className="flex gap-4 mt-2">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">github</a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">demo</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">The Movie Database API (TMDB)</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">RTK Query</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[80%] h-[80px] rounded bg-gray dark:bg-green"></div>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
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
          <div className="flex gap-4 mt-2">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">github</a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">demo</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Authentication API</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">RTK Query</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <div className="w-[80%] h-[80px] rounded bg-gray dark:bg-green"></div>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
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
          <div className="flex gap-4 mt-2">
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">github</a>
            </div>
            <div className="w-fit text-sm flex items-center gap-1 text-light">
              <BiLink className="text-lg" />
              <a className="mb-1 hover:underline">demo</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">TheMealDB API</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">React</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Redux Toolkit</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Axios</p>
            </div>
            <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full px-2 w-fit text-sm flex items-center gap-1 text-light">
              <p className="text-sx">Tailwind Css</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
