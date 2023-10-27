import React, { useEffect, useState } from "react";
import {RiMoonClearFill , RiSunFill} from 'react-icons/ri'

const ToggleButton = () => {
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
    <div className="justify-center items-center">
      <div className="p-2 bg-gray dark:bg-green bg-opacity-50 flex flex-col justify-center items-start gap-4 rounded-full">
        <button
          onClick={handleToggle}
          className="p-2 rounded-full bg-green dark:bg-gray text-light dark:text-white"
        >
          {theme === "dark" ? <RiMoonClearFill/> : <RiSunFill/>}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
