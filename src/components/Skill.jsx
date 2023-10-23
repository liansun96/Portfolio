import React, { useRef } from "react";
import { Skills } from "../constant/data";

const Skill = () => {
  const skillRef = useRef();

  return (
    <div ref={skillRef} className="h-screen">
      <div className="flex flex-wrap gap-5">
        {Skills.map((i) => {
          return (
            <div key={i.id} className="w-[130px] flex gap-2 items-center mb-4">
              <img className="w-10" src={i.image} alt="" />
              <p className="text-green_text dark:text-green_text">{i.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
