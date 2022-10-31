import { MdOutlineKeyboardBackspace } from "react-icons/md";
import girl from "../../../assets/girl.png";
import ResumeCourse from "./ResumeCourse";
import useUserdetailStore from "../../../stores/userDetailStore";
import { useEffect } from "react";

const Body = ({ children }) => {
  const userD = useUserdetailStore((state) => state.udetail);
  // const [SideBar, Footer] = children;

  return (
    <>
      <div className="w-auto p-0 sm:p-6 bg-violet-50 mt-10">
        <div className=" flex bg-violet-800 text-white flex-grow flex-wrap w-auto ">
          <div className=" p-2 sm:p-8">
            <MdOutlineKeyboardBackspace
              className="text-white hidden sm:flex"
              size={20}
            />
            <div className="mt-12 font-sans font-semibold text-base sm:text-2xl lg:text-4xl ">
              Welcome {userD.fName ? userD.fName + " " + userD.lName : " "}
              <p className="text-xs lg:text-sm font-sans font-normal  mt-2 w-44 sm:w-auto ">
                Choose a goal and start learning top educators
              </p>
            </div>
          </div>
          <div className="ml-auto">
            <img
              className=" p-6 self-end w-44 sm:w-auto mt-4 sm:mt-0 "
              src={girl}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="  text-black relative  bottom-2 w-full mx-4 sm:hidden p-3   "
            type="text"
            name="search"
            id=""
            placeholder="Search"
          />
        </div>

        {/* <ResumeCourse /> */}
        <div className="bg-white rounded p-4 mt-8">
          <h5 className="font-semibold text-xl mt-8">Resume Your Courses</h5>
          <div className=" mt-2">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-10 ">
              <div className="">
                <ResumeCourse name="Jatin" chapter="2" />
              </div>
              <div className="">
                <ResumeCourse name="Jatin" chapter="2" />
              </div>
              <div className="">
                <ResumeCourse name="Jatin" chapter="2" />
              </div>
            </div>
          </div>
        </div>
        {/* Resume ends */}
      </div>
    </>
  );
};

export default Body;
