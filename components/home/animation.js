import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "../../public/home-animation.json";

export default function Animation() {
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Lottie loop animationData={lottieJson} play />{" "}
    </div>
  );
}
