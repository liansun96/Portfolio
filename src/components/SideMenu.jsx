import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Sample from "./Sample";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen flex flex-col items-start justify-center text-green_text dark:text-gray_text py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-bold">Lian Sun</h1>
        <h4 className="text-2xl font-semibold">Front End Web Developer</h4>
        <p className="">
          Hello, I'm Toe Tet Aung a.k.a Lian Sun, a passionate <br />
          frontend web developer with a deep love for creating <br />
          engaging and user-friendly web applications.
        </p>
      </div>
      <div className="mt-20 flex flex-col gap-3">
        <div
          onClick={() => scrollToRef(aboutRef)}
          className="flex items-center justify-start gap-3 group cursor-pointer"
        >
          <div className="h-[2px] w-[30px] group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
          <p className="text-stone-500 group-hover:text-light text-sm font-bold">
            ABOUT
          </p>
        </div>
        <div
          onClick={() => scrollToRef(skillRef)}
          className="flex items-center justify-start gap-3 group cursor-pointer"
        >
          <div className="h-[2px] w-[30px] group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
          <p className="text-stone-500 group-hover:text-light text-sm font-bold">
            SKILL
          </p>
        </div>
        <div
          onClick={() => scrollToRef(expRef)}
          className="flex items-center justify-start gap-3 group cursor-pointer"
        >
          <div className="h-[2px] w-[30px] group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
          <p className="text-stone-500 group-hover:text-light text-sm font-bold">
            EXPERIENCE
          </p>
        </div>
        <div className="flex items-center justify-start gap-3 group cursor-pointer">
          <div className="h-[2px] w-[30px] group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
          <p className="text-stone-500 group-hover:text-light text-sm font-bold">
            PROJECTS
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 mt-20 mb-10">
        <BsGithub className="text-3xl" />
        <FaInstagram className="text-3xl" />
        <FaXTwitter className="text-3xl" />
        <ImLinkedin className="text-3xl" />
      </div>
      <Sample />
    </div>
  );
};

export default SideMenu;
