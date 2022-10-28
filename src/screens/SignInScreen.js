import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../stores/authStore";
import * as clickedAnimationData from "../assets/clicked.json";
import Lottie from "react-lottie";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = React.useRef();

  const signinHandler = useAuthStore((state) => state.signinHandler);
  const isClicked = useAuthStore((state) => state.isClicked);

  const loginHandler = () => {
    if (email.trim() && password.trim()) {
      signinHandler(email, password);
      formRef.current.reset();
    } else {
      toast.error('"Fill information"');
    }
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat ">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="flex sm:hidden text-white self-start p-4">Sign in</div>
        <div className="lg:min-w-[508px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          <img
            src={require("../assets/asset-xl/logo-xl.png")}
            alt="brand-logo"
            className="sm:flex hidden"
          />
          <div className="sm:hidden flex  flex-col justify-end self-end flex-1  p-5 text-white">
            <h1 className="font-poppins-bold text-2xl">Welcome back!</h1>
            <h1 className="text-sm">Sign in to continue</h1>
          </div>
        </div>
        <div className="bg-white min-h-[656px] lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
          <form
            className="flex justify-start items-start flex-col lg:min-h-[556px]  p-8 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler();
            }}
            ref={formRef}
          >
            <h1 className="text-2xl font-semibold">Sign in to continue</h1>
            <input
              type="text"
              id="email"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
              placeholder="Email"
              onChange={(v) => {
                setEmail(v.currentTarget.value);
              }}
            />
            <input
              type="password"
              id="password"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
              placeholder="Password"
              onChange={(v) => {
                setPassword(v.currentTarget.value);
              }}
            />
            {isClicked ? (
              <>
                <Lottie
                  options={{ animationData: clickedAnimationData, loop: true }}
                  height={150}
                  width={200}
                />
              </>
            ) : (
              <button
                className={`${"bg-[#5e0098]"} text-[#ffffff] border-white border-2 sm:w-1/2 lg:min-w-[500px] min-w-full w-[90%] p-3 flex items-center justify-center self-center`}
                about="Signup"
              >
                Sign In
              </button>
            )}

            {isClicked ? (
              <></>
            ) : (
              <>
                <div className="flex items-center justify-center min-w-full gap-2">
                  <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                  <span className="text-[#9CA3AF]">or</span>
                  <div className="h-[1px] bg-[#E5E7EB] w-[40%]"></div>
                </div>
                <div className="flex self-center gap-3">
                  <SiFacebook size={24} />
                  <SiGoogle size={24} />
                </div>
                <h1 className="flex self-center mt-auto text-[#6B7280]">
                  Don't have an account?
                  <Link className="text-[#4C1D95] ml-1"> Sign up</Link>
                </h1>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
