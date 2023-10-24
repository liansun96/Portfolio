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
    <div className="h-screen flex justify-center items-center fixed left-0">
      <div className="p-4 bg-gray dark:bg-light flex flex-col justify-center items-start gap-4 rounded-lg">
        <button
          onClick={handleToggle}
          className="px-4 py-1   rounded bg-green dark:bg-gray text-light dark:text-white"
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Sample;
