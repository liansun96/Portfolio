import React, { useEffect, useState } from "react";
import CursorFollower from "./CursorFollower";
import SideMenu from "./SideMenu";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";

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
    <div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 flex flex-col relative">
        <div className="w-[30%] fixed top-0">
          <SideMenu />
        </div>
        <div className="w-[55%] ml-auto py-20">
          <About />
          <Skill />
          <Experience />
        </div>
      </div>
      <CursorFollower />
    </div>
  );
};

export default Path;
