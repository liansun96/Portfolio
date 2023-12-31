import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { HiOutlineMinus } from "react-icons/hi2";
import { Link } from "react-scroll";
import ToggleButton from "./ToggleButton";

const SideMenu = () => {
  const list = [
    { icon: <HiOutlineMinus />, name: "ABOUT" },
    { icon: <HiOutlineMinus />, name: "SKILLS" },
    { icon: <HiOutlineMinus />, name: "PROJECTS" },
    { icon: <HiOutlineMinus />, name: "EXPERIENCE" },
  ];

  return (
    <div className="w-full md:h-screen flex flex-col items-start justify-between text-green_text dark:text-gray_text md:py-20">
      <div className="">
        <div className="flex flex-col gap-3 relative">
          <h1 className="text-6xl font-bold">Lian Sun</h1>
          <span class="group/devo inline-flex lg:cursor-[url('../assets/react.svg'),_pointer] lg:font-medium lg:text-slate-200">
            <img
              // src="https://i.gifer.com/XDZc.gif"
              src="https://i.gifer.com/xt.gif"
              className="w-24 md:w-32  absolute top-0 right-0 md:-right-10 opacity-0 duration-700 group-hover/devo:opacity-100 "
              alt=""
            />
            <span
              class="group-hover/devo:text-[#E2582A] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[50ms]"
              aria-hidden="true"
            >
              F
            </span>
            <span
              class="group-hover/devo:text-[#117FC0] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[75ms]"
              aria-hidden="true"
            >
              r
            </span>
            <span
              class="group-hover/devo:text-[#F0DC59] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[100ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              class="group-hover/devo:text-[#F4F2ED] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[125ms]"
              aria-hidden="true"
            >
              n
            </span>
            <span
              class="group-hover/devo:text-[#807979] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[150ms]"
              aria-hidden="true"
            >
              t
            </span>
            <span
              class="group-hover/devo:text-teal-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[175ms]"
              aria-hidden="true"
            >
              &nbsp;
            </span>
            <span
              class="group-hover/devo:text-cyan-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[200ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/devo:text-sky-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[225ms]"
              aria-hidden="true"
            >
              n
            </span>
            <span
              class="group-hover/devo:text-blue-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[250ms]"
              aria-hidden="true"
            >
              d
            </span>
            &nbsp;
            <span
              class="group-hover/devo:text-indigo-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[275ms]"
              aria-hidden="true"
            >
              w
            </span>
            <span
              class="group-hover/devo:text-[#E14E1D] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[300ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/devo:text-red-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[325ms]"
              aria-hidden="true"
            >
              b
            </span>
            &nbsp;
            <span
              class="group-hover/devo:text-orange-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[350ms]"
              aria-hidden="true"
            >
              D
            </span>
            <span
              class="group-hover/devo:text-[#F0DC59] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[375ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/devo:text-[#7E54BF] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[400ms]"
              aria-hidden="true"
            >
              v
            </span>
            <span
              class="group-hover/devo:text-[#CD6799] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[425ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/devo:text-red-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[450ms]"
              aria-hidden="true"
            >
              l
            </span>
            <span
              class="group-hover/devo:text-orange-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[475ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              class="group-hover/devo:text-[#3DACFE] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[500ms]"
              aria-hidden="true"
            >
              p
            </span>
            <span
              class="group-hover/devo:text-lime-400 text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[525ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/devo:text-[#39556c] text-2xl transition duration-75 group-hover/devo:-translate-y-px delay-[550ms]"
              aria-hidden="true"
            >
              r
            </span>
          </span>
          <p className="">
            Hello, I'm Toe Tet Aung a.k.a Lian Sun, a passionate{" "}
            <br className="hidden md:block" />
            frontend web developer with a deep love for creating{" "}
            <br className="hidden md:block" />
            engaging and user-friendly web applications.
          </p>
        </div>
        <div className="block md:hidden relative">
          <div className="rounded-full flex gap-4 menu fixed top-5">
            {list.map((i) => {
              return (
                <Link
                  to={i.name}
                  activeClass="sideMenu-active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className=""
                >
                  <p className="text-stone-500 group-hover:text-light text-sm font-bold duration-300 hidden backdrop-blur bg-gray dark:bg-green bg-opacity-50 dark:bg-opacity-50">
                    {i.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mt-16 flex flex-col gap-3 menu">
            {list.map((i) => {
              return (
                <Link
                  to={i.name}
                  activeClass="sideMenu-active "
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="flex items-center justify-start gap-3 group cursor-pointer duration-300 w-fit"
                >
                  <div className="hover-link h-[2px] w-[30px] bar group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
                  <p className="text-stone-500 group-hover:text-light text-sm font-bold duration-300">
                    {i.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-0 mt-20">
        <div className="me-20">
          <ToggleButton />
        </div>
        <a
          target="_blank"
          href="https://github.com/liansun96"
          className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm"
        >
          <BsGithub className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ah_kaann/"
          className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm"
        >
          <FaInstagram className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </a>
        <a
          target="_blank"
          href=""
          className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm"
        >
          <FaTelegramPlane className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/toetetaung/"
          className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm"
        >
          <ImLinkedin className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
