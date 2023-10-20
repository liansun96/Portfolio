import React, { useEffect, useState } from "react";
import CursorFollower from "./CursorFollower";

const Path = () => {
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
    <div className="hero h-screen  flex justify-center items-center">
      <div className="w-72 h-40 p-4 bg-zinc-900 dark:bg-white flex flex-col justify-center items-start gap-4 rounded-lg">
        <p className="text-white dark:text-zinc-900 text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          exercitationem, molestias nulla distinctio temporibus
        </p>
        <button
          onClick={handleToggle}
          className="px-4 py-1   rounded bg-white dark:bg-zinc-900 text-black dark:text-white"
        >
          Toggle
        </button>
      </div>
      <CursorFollower/>
    </div>
  );
};

export default Path;
