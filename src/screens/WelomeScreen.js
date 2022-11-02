import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserdetailStore from "../stores/userDetailStore";
import { app } from "../configs/firebaseConfig";
import { getAuth } from "firebase/auth";
import LoadingScreen from "./LoadingScreen";
const WelcomeScreen = () => {
  const auth = getAuth(app);
  const [currentWidth, setcurrentWidth] = useState(0);
  const visibleHandler = useUserdetailStore((state) => state.visibleSwitch);
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState("");
  useEffect(() => {
    // TemporaryDataGenerator();
    window.addEventListener("resize", () => {
      setcurrentWidth(window.innerWidth);
    });
    visibleHandler("translate-x-[-100%]");
    auth.onAuthStateChanged((u) => {
      if (u) {
        navigate("/home");
      }
      setcurrentUser(u);
    });
  }, [visibleHandler, auth, navigate]);

  if (currentUser === "") {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#410068] flex items-center justify-center">
      <div className="container sm:max-w-xl bg-[#5e0098] flex justify-center items-center flex-col gap-10 sm:p-16 p-1 sm:min-h-[700px] min-h-screen">
        <img
          className="sm:w-80 w-56"
          src={
            currentWidth > 640
              ? require("../assets/asset-xl/logo-xl.png")
              : require("../assets/logo.png")
          }
          alt="brand-logo"
        />
        <Link
          className="bg-[#f3f4f6] text-[#5e0098] sm:w-1/2 sm:min-w-[500px] w-[90%] p-3 flex items-center justify-center"
          to="/signin"
        >
          Login
        </Link>
        <Link
          className="bg-[#5e0098] text-[#ffffff] border-white border-2 sm:w-1/2 sm:min-w-[500px] w-[90%] p-3 flex items-center justify-center"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
