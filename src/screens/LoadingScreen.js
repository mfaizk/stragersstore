import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
// import Lottie from "react-lottie";
import * as animationData from "../assets/loading.json";
import Lottie from "lottie-web";

const LoadingScreen = () => {
  useEffect(() => {
    Lottie.loadAnimation({
      animationData: animationData,
      autoplay: true,
      loop: true,
      container: document.querySelector("#lottie-container"),
    });
  }, []);

  return (
    <div className="flex items-center justify-center bg-[#410068] min-h-screen">
      <div id="lottie-container" className="h-56"></div>
      {/* <Lottie
        options={{ animationData: animationData }}
        height={400}
        width={400}
      /> */}
    </div>
  );
};

export default LoadingScreen;
