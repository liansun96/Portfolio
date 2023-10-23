import React, { useEffect, useState } from "react";
import CursorFollower from "./CursorFollower";

const Sample = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-72  p-4 bg-gray dark:bg-light flex flex-col justify-center items-start gap-4 rounded-lg">
        {/* <p className="text-light dark:text-gray text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          exercitationem, molestias nulla distinctio temporibus
        </p> */}
        <button
          onClick={handleToggle}
          className="px-4 py-1   rounded bg-green dark:bg-gray text-light dark:text-white"
        >
          Toggle
        </button>

        <div className="">
          <span class="group/korok inline-flex lg:cursor-[url('../assets/react.svg'),_pointer] lg:font-medium lg:text-slate-200">
            <span class="sr-only">Korok seeds</span>
            <span
              class="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
              aria-hidden="true"
            >
              K
            </span>
            <span
              class="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              class="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
              aria-hidden="true"
            >
              r
            </span>
            <span
              class="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
              aria-hidden="true"
            >
              o
            </span>
            <span
              class="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
              aria-hidden="true"
            >
              k
            </span>
            <span
              class="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
              aria-hidden="true"
            >
              &nbsp;
            </span>
            <span
              class="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
              aria-hidden="true"
            >
              s
            </span>
            <span
              class="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
              aria-hidden="true"
            >
              e
            </span>
            <span
              class="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
              aria-hidden="true"
            >
              d
            </span>
            <span
              class="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
              aria-hidden="true"
            >
              s
            </span>
          </span>
        </div>
      </div>
      {/* <CursorFollower /> */}
    </div>
  );
};

export default Sample;
