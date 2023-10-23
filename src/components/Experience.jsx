import React, { useRef } from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Experience = () => {
  const expRef = useRef();

  return (
    <div ref={expRef} className="h-screen text-green_text dark:text-green_text">
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2022 - 2023</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">MMSIT Coding Workshop</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Build and Deploy projects with team members.
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2021 - 2022</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">Studied at MMS IT</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Sepcial Web Design / Front-End Web Development
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2020 - 2021</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">Self Study</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">Front-End Web Development</p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2016 - 2019</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">
              Project Assistant Manager / Translator
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">Samanea Group of Company Limited</p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2016 - 2019</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">Translator</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Myanmar Fiber Optic Communication Network Co.,Ltd
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2011 - 2015</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg">University of Mandalay</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            BA English , English Language and Literature / Letters
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-green hover:bg-opacity-20 duration-200">
        <div className="w-[30%]">
          <p>2001 - 2011</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-md">
              缅北 抹谷 千佛寺 中华华文 教育示范 学校
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-200">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">初中三 毕业, Education</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
