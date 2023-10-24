import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import Sample from "./Sample";
import { HiOutlineMinus } from "react-icons/hi2";
import { Link } from "react-scroll";

const SideMenu = () => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const list = [
    { icon: <HiOutlineMinus />, name: "ABOUT" },
    { icon: <HiOutlineMinus />, name: "SKILLS" },
    { icon: <HiOutlineMinus />, name: "EXPERIENCE" },
    { icon: <HiOutlineMinus />, name: "PROJECTS" },
    { icon: <HiOutlineMinus />, name: "CONTACT" },
  ];

  const [hasSpecificClass, setHasSpecificClass] = useState(false);

  const toggleSpecificClass = () => {
    setHasSpecificClass(!hasSpecificClass);
  };

  return (
    <div className="w-full h-screen flex flex-col items-start justify-center text-green_text dark:text-gray_text py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-6xl font-bold">Lian Sun</h1>
        <span class="group/korok inline-flex lg:cursor-[url('../assets/react.svg'),_pointer] lg:font-medium lg:text-slate-200">
          {/* <span class="sr-only">Korok seeds</span> */}
          <span
            class="group-hover/korok:text-red-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
            aria-hidden="true"
          >
            F
          </span>
          <span
            class="group-hover/korok:text-orange-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
            aria-hidden="true"
          >
            r
          </span>
          <span
            class="group-hover/korok:text-yellow-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            class="group-hover/korok:text-lime-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
            aria-hidden="true"
          >
            n
          </span>
          <span
            class="group-hover/korok:text-green-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
            aria-hidden="true"
          >
            t
          </span>
          <span
            class="group-hover/korok:text-teal-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
            aria-hidden="true"
          >
            &nbsp;
          </span>
          <span
            class="group-hover/korok:text-cyan-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            class="group-hover/korok:text-sky-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
            aria-hidden="true"
          >
            n
          </span>
          <span
            class="group-hover/korok:text-blue-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
            aria-hidden="true"
          >
            d
          </span>
          &nbsp;
          <span
            class="group-hover/korok:text-indigo-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
            aria-hidden="true"
          >
            w
          </span>
          <span
            class="group-hover/korok:text-violet-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            class="group-hover/korok:text-red-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[325ms]"
            aria-hidden="true"
          >
            b
          </span>
          &nbsp;
          <span
            class="group-hover/korok:text-orange-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[350ms]"
            aria-hidden="true"
          >
            D
          </span>
          <span
            class="group-hover/korok:text-yellow-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[375ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            class="group-hover/korok:text-lime-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[400ms]"
            aria-hidden="true"
          >
            v
          </span>
          <span
            class="group-hover/korok:text-green-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[425ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            class="group-hover/korok:text-red-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[450ms]"
            aria-hidden="true"
          >
            l
          </span>
          <span
            class="group-hover/korok:text-orange-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[475ms]"
            aria-hidden="true"
          >
            o
          </span>
          <span
            class="group-hover/korok:text-yellow-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[500ms]"
            aria-hidden="true"
          >
            p
          </span>
          <span
            class="group-hover/korok:text-lime-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[525ms]"
            aria-hidden="true"
          >
            e
          </span>
          <span
            class="group-hover/korok:text-green-400 text-2xl transition duration-75 group-hover/korok:-translate-y-px delay-[550ms]"
            aria-hidden="true"
          >
            r
          </span>
        </span>
        <p className="">
          Hello, I'm Toe Tet Aung a.k.a Lian Sun, a passionate <br />
          frontend web developer with a deep love for creating <br />
          engaging and user-friendly web applications.
        </p>
      </div>
      <div className="mt-20 flex flex-col gap-3 menu">
        {list.map((i) => {
          return (
            <Link
              to={i.name}
              activeClass="sideMenu-active "
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="flex items-center justify-start gap-3 group cursor-pointer duration-300"
            >
              <div className="hover-link h-[2px] w-[30px] bar group-hover:w-[70px] duration-300 bg-stone-500 group-hover:bg-light"></div>
              <p className="text-stone-500 group-hover:text-light text-sm font-bold duration-300">
                {i.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-20 mb-10">
        <div className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm">
          <BsGithub className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </div>
        <div className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm">
          <FaInstagram className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </div>
        <div className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm">
          <FaXTwitter className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </div>
        <div className="flex items-center justify-center duration-300 group w-[55px] h-[55px] rounded-full hover:bg-gray dark:hover:bg-green hover:bg-opacity-20 dark:hover:bg-opacity-20 hover:shadow-sm">
          <ImLinkedin className="text-2xl group-hover:text-3xl group-hover:rotate-[360deg] group-hover:text-light duration-500" />
        </div>
      </div>
      <Sample />
    </div>
  );
};

export default SideMenu;
