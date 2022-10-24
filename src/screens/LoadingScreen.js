import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center bg-[#410068] min-h-screen">
      <ToastContainer />
      <img
        className="bg-[#410068] w-72"
        src={require("../assets/loading.gif")}
        alt=""
      />
    </div>
  );
};

export default LoadingScreen;
