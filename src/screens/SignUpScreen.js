import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiGoogle, SiFacebook } from "react-icons/si";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import * as clickedAnimationData from "../assets/clicked.json";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../stores/authStore";
const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const formRef = React.useRef();

  const signupHandler = useAuthStore((state) => state.signupHandler);
  const isClicked = useAuthStore((state) => state.isClicked);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowWidth(window.innerWidth);
    });
  }, []);

  const loginHandler = () => {
    if (email.trim() && password.trim() && cnfPassword.trim()) {
      if (password.trim() === cnfPassword.trim()) {
        // toast("loogged in", { bodyStyle: { backgroundColor: "red" } });
        // createUserWithEmailAndPassword(auth, email, password).then(() => {
        //   toast("userCreated", { bodyStyle: { backgroundColor: "red" } });
        // });
        signupHandler(email, password);
        formRef.current.reset();
        setisChecked(false);
      } else {
        toastHandler("Password not matching");
        console.log(formRef.current);
      }
    } else {
      toastHandler('"Fill information"');
    }
  };

  const toastHandler = (msg) => {
    if (windowWidth > 640) {
      toast(msg, {
        position: "top-right",
        style: { backgroundColor: "#5e0098", color: "#fff" },
      });
    } else {
      toast(msg, {
        position: "bottom-right",
        style: { backgroundColor: "#5e0098", color: "#fff" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#410068] flex justify-center items-center font-montserrat ">
      <div className="bg-[#5e0098] lg:min-h-[556px] min-h-screen lg:min-w-[1016px] min-w-full flex items-center justify-center lg:flex-row sm:flex-row flex-col">
        <div className="flex sm:hidden text-white self-start p-4">Sign up</div>
        <div className="lg:min-w-[508px] lg:min-h-[556px] sm:min-w-[254px] min-w-full flex justify-center items-center grow">
          {windowWidth > 640 ? (
            <img
              src={require("../assets/asset-xl/logo-xl.png")}
              alt="brand-logo"
            />
          ) : (
            <div className=" flex flex-col justify-end self-end flex-1  p-5 text-white">
              <h1 className="font-poppins-bold text-2xl">Welcome</h1>
              <h1 className="text-sm">Sign up to continue</h1>
            </div>
          )}
        </div>
        <div className="bg-white lg:min-h-[556px]   lg:min-w-[508px] sm:min-w-[254px] min-w-full grow">
          <form
            className="flex justify-start items-start flex-col lg:min-h-[556px]  p-8 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              loginHandler();
            }}
            ref={formRef}
          >
            <h1 className="text-2xl font-semibold">Sign up to continue</h1>
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
            <input
              type="password"
              id="password"
              className="border-[#D1D5DB] border-2 min-w-full h-[38px] rounded-md p-2"
              placeholder="Confirm password"
              onChange={(v) => {
                setCnfPassword(v.currentTarget.value);
              }}
            />
            <label id="privacy">
              {" "}
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                className="mr-2"
                onChange={() => {
                  setisChecked(!isChecked);
                }}
              />
              I accept{" "}
              <span className="text-[#4C1D95] font-semibold">Terms of Use</span>{" "}
              &{" "}
              <span className="text-[#4C1D95] font-semibold">
                Privacy Policy
              </span>
            </label>
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
                className={`${
                  !isChecked ? "bg-[#9a3dd4]" : "bg-[#5e0098]"
                } text-[#ffffff] border-white border-2 sm:w-1/2 lg:min-w-[500px] min-w-full w-[90%] p-3 flex items-center justify-center self-center`}
                about="Signup"
                disabled={!isChecked}
              >
                Sign up
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
                  Already have an account?
                  <Link className="text-[#4C1D95] ml-1"> Sign in</Link>
                </h1>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
