import React from "react";
import { RxCross2 } from "react-icons/rx";
import v1 from "../assets/portfolio-v1.png";

const BackInTimeModal = ({ toggleBackInTimeModal }) => {
  return (
    <div
      onClick={toggleBackInTimeModal}
      className="fixed inset-0 bg-green dark:bg-gray bg-opacity-90 dark:bg-opacity-90  flex justify-center items-center  z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-bg w-[90%] md:w-[550px] h-[550px] rounded-full p-5 flex flex-col justify-center items-center gap-3 persp"
      >
        <div className="skew space-y-5 mt-20">
          <h6 className="text-2xl font-bold text-center text-gray-800 text-white">
            Looking for a different version ? <br />
            Go Back in time ...
          </h6>
          <div className="flex justify-center items-center">
            <img src={v1} className="w-[50%]" alt="" />
          </div>
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
