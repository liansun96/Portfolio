import React from "react";
import { BiLink } from "react-icons/bi";
import { projects } from "../constant/data";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Projects = () => {
  return (
    <div
      id="PROJECTS"
      className="text-green_text dark:text-gray_text mb-20 md:mb-40"
    >
      {projects.map((i) => {
        return (
          <div
            key={i.id}
            className="flex flex-col md:flex-row items-start my-10 p-3 md:p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300"
          >
            <div className="w-full md:w-[30%]">
              <div className="w-[70%] md:w-[90%] rounded bg-gray dark:bg-green overflow-hidden">
                <img src={i.image} alt="netflix" />
              </div>
            </div>
            <div className="w-full md:w-[70%] flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="font-bold text-lg text-light">{i.title}</p>{" "}
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                  <HiMiniArrowUpRight />
                </span>
              </div>
              <p className="leading-5 text-sm">{i.description}</p>
              <div className="flex gap-4">
                <div className="w-fit text-sm flex items-center gap-1 text-light">
                  <BiLink className="text-lg" />
                  <a
                    target="_blank"
                    href={i.github}
                    className="mb-1 hover:underline"
                  >
                    github
                  </a>
                </div>
                <div className="w-fit text-sm flex items-center gap-1 text-light">
                  <BiLink className="text-lg" />
                  <a
                    target="_blank"
                    href={i.demo}
                    className="mb-1 hover:underline"
                  >
                    demo
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {i.badges?.map((badge) => {
                  return (
                    <div className="bg-gray dark:bg-green dark:bg-opacity-50 rounded-full py-1 px-2 w-fit text-xs flex items-center gap-1 text-light">
                      <p className="text-sx">{badge.text}</p>
                    </div>
                  );
                })}                
              </div>
            </div>
          </div>
        );
      })}     
    </div>
  );
};

export default Projects;
