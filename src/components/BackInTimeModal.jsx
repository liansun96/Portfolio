import React from "react";
import { RxCross2 } from "react-icons/rx";
import v1 from "../assets/portfolio-v1.png";
import { Link } from "react-scroll";

const BackInTimeModal = ({ toggleBackInTimeModal }) => {
  return (
    <div
      onClick={toggleBackInTimeModal}
      className="fixed inset-0 bg-green dark:bg-gray bg-opacity-90 dark:bg-opacity-90  flex justify-center items-center  z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-bg w-[90%] md:w-[550px] h-[550px] rounded-full p-10 md:p-5 flex flex-col justify-center items-center gap-3 persp"
      >
        <div className="skew space-y-5 mb-20 md:mt-20 relative">
          <h6 className="text-lg md:text-2xl font-bold text-center text-light">
            Looking for a different version ? <br />
            Go Back in time ...
          </h6>
          <a
            target="_blank"
            href="https://toetetaung.netlify.app"
            className="flex justify-center items-center cursor-pointer"
          >
            <img src={v1} className="w-[50%]" alt="" />
            <span className="w-[50%] h-[60%] bg-black bg-opacity-70 absolute text-light text-center opacity-0 hover:opacity-100 duration-500">
              <div className="flex items-center justify-center h-full">V1</div>
            </span>
          </a>
        </div>
      </div>
      <button
        className="group border-2 border-light rounded-full p-2 hover:p-3 duration-1000 font-bold text-primary-200 absolute top-6 right-6"
        onClick={toggleBackInTimeModal}
      >
        <RxCross2 className="text-lg group-hover:text-xl text-light group-hover:rotate-[360deg] duration-1000" />
      </button>
    </div>
  );
};

export default BackInTimeModal;
