import { HiMiniArrowRight, HiMiniArrowUpRight } from "react-icons/hi2";

const Experience = () => {
  return (
    <div
      id="EXPERIENCE"
      className="flex flex-col text-green_text dark:text-gray_text"
    >
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2022 - 2023</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">
              MMS IT Coding Workshop
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Build and Deploy projects with team members.
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2021 - 2022</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">Studied at MMS IT</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Sepcial Web Design / Front-End Web Development
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2020 - 2021</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">Self Study</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">Front-End Web Development</p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2016 - 2019</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">
              Project Assistant Manager / Translator
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">Samanea Group of Company Limited</p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2016 - 2019</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">Translator</p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            Myanmar Fiber Optic Communication Network Co.,Ltd
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2011 - 2015</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-lg text-light">
              University of Mandalay
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">
            BA English , English Language and Literature / Letters
          </p>
        </div>
      </div>
      <div className="flex items-start p-5 cursor-pointer rounded-lg group hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 duration-300">
        <div className="w-[30%]">
          <p className="text-green_text dark:text-gray_text">2001 - 2011</p>
        </div>
        <div className="w-[70%]">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-md text-light">
              缅北 抹谷 千佛寺 中华华文 教育示范 学校
            </p>{" "}
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
              <HiMiniArrowUpRight />
            </span>
          </div>
          <p className="text-sm">初中三 毕业, Education</p>
        </div>
      </div>
      <div className="flex items-center gap-2 p-5 group cursor-pointer text-light mt-4">
        <a
          href="../public/resume/resume.pdf"
          download="resume.pdf"
          target="_blank"
          className="text-xl font-bold group-hover:underline w-fit"
        >
          View Full Résumé
        </a>
        <div className=" group-hover:translate-x-2 duration-300">
          <HiMiniArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Experience;
