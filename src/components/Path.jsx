import React, { useEffect, useState } from "react";
import CursorFollower from "./CursorFollower";
import SideMenu from "./SideMenu";
import About from "./About";
import Experience from "./Experience";
import Skill from "./Skill";
import Projects from "./Projects";
import BackInTime from "./BackInTime";
import BackInTimeModal from "./BackInTimeModal";

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

  //back in time modal
  const [backInTimeModal, setBackInTimeModal] = useState(false);
  const toggleBackInTimeModal = () => {
    setBackInTimeModal(!backInTimeModal);
  };

  if (backInTimeModal) {
    document.body.classList.add("overflow-y-hidden");    
  } else {
    document.body.classList.remove("overflow-y-hidden");    
  }

  return (
    <div className="relative">      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex flex-col relative ">
        <div className="w-full md:w-[30%] md:fixed md:top-0">
          <SideMenu />
        </div>
        <div className="w-full  md:w-[55%] md:ml-auto  py-16">
          <About />
          <Skill />
          <Projects />
          <Experience />
          <BackInTime toggleBackInTimeModal={toggleBackInTimeModal} />
        </div>
      </div>
      <CursorFollower />
      {backInTimeModal && <BackInTimeModal toggleBackInTimeModal={toggleBackInTimeModal}/>}
    </div>
  );
};

export default Path;
