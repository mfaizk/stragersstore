import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center bg-[#410068] min-h-screen">
      <img
        className="bg-[#410068] w-56"
        src={require("../assets/loading.gif")}
        alt=""
      />
    </div>
  );
};

export default LoadingScreen;
