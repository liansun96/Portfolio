import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BackInTime = ({ toggleBackInTimeModal }) => {
  return (
    <div
      onClick={toggleBackInTimeModal}
      className="absolute bottom-5 right-0 xl:-right-5 2xl:-right-16 duration-300 hover:-translate-y-6 cursor-pointer"
    >
      <LazyLoadImage
        effect="blur"
        wrapperProps={{
          style: { transitionDelay: "1s" },
        }}
        className="h-20"
        src="https://i.gifer.com/Vp3M.gif"
        alt=""
      />
    </div>
  );
};

export default BackInTime;
