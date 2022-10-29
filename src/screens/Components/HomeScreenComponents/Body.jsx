import { FaHome, FaBookOpen } from "react-icons/fa";
import {
  MdSpeed,
  MdOutlineSubscriptions,
  MdOutlineLogout,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import craft from "../../../assets/craft.png";
import girl from "../../../assets/girl.png";
import ResumeCourse from "./ResumeCourse";
import useAuthStore from "../../../stores/authStore";
import useUserdetailStore from "../../../stores/userDetailStore";

const Body = () => {
  const auth = useAuthStore((state) => state.user);
  const out = useAuthStore((state) => state.signOutHandler);
  const userD = useUserdetailStore((state) => state.udetail);
  const setUserD = useUserdetailStore((state) => state.setUserDetail);

  const signOut = () => {
    out();
    setUserD({});
  };

  return (
    <>
      {/* profile with emal section */}
      <div className="flex">
        {/* Left side  */}
        <div>
          <div className="w-80 lg:w-96 hidden md:flex flex-col border h-screen">
            <div className="flex flex-col justify-center items-center mt-8 mb-6">
              <button className="w-44 border rounded-full">
                <img src={craft} alt="" />
              </button>
              <h3 className="flex text-3xl font-semibold">
                {userD.fName ? userD.fName + " " + userD.lName : " "}
                <button className="ml-4 mt-4">
                  <HiPencil size={18} />
                </button>
              </h3>
              <p className="">{auth?.email}</p>
            </div>

            {/* Profile options */}
            <div className="">
              <div className="flex flex-col  mt-1 p-2">
                <div className="flex mt-4 w-full border p-2 bg-violet-200 rounded">
                  <FaHome className="mt-2" />
                  <button className="ml-8 mt-1 w-auto font-semibold">
                    Home
                  </button>
                </div>
                <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
                  <FaBookOpen className="mt-4" />
                  <button className="ml-8 mt-2 w-auto font-semibold">
                    Syllabus
                  </button>
                </div>
                <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
                  <MdSpeed className="mt-4" />
                  <button className="mt-2 ml-8 w-auto font-semibold">
                    Test
                  </button>
                </div>
                <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
                  <MdOutlineSubscriptions className="mt-4" />
                  <button className="mt-2 ml-8 w-auto font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className=" flex  items-end p-2 h-auto lg:h-full">
                <div className=" border flex p-2 font-semibold font-sans w-full rounded ">
                  <MdOutlineLogout className="ml-2" size={20} />
                  <button
                    className="ml-4 "
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left ends here  */}

        {/* Right Starts */}
        <div className="w-screen flex flex-col flex-wrap h-auto">
          <div className="">
            <div className="w-auto p-0 sm:p-6 bg-violet-50">
              <div className=" flex bg-violet-800 text-white flex-grow flex-wrap w-auto ">
                <div className=" p-2 sm:p-8">
                  <MdOutlineKeyboardBackspace
                    className="text-white hidden sm:flex"
                    size={20}
                  />
                  <div className="mt-12 font-sans font-semibold text-base sm:text-2xl lg:text-4xl ">
                    Welcome{" "}
                    {userD.fName ? userD.fName + " " + userD.lName : " "}
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
                <h5 className="font-semibold text-xl mt-8">
                  Resume Your Courses
                </h5>
                <div className=" mt-2">
                  <div className="flex flex-wrap ">
                    <div className="">
                      <ResumeCourse name="Jatin" chapter="2" />
                    </div>
                    <div className="mt-4 md:mt-0 ml-0 md:ml-4">
                      <ResumeCourse name="Jatin" chapter="2" />
                    </div>
                    <div className="mt-4 md:mt-0 ml-0 md:ml-4">
                      <ResumeCourse name="Jatin" chapter="2" />
                    </div>
                  </div>
                </div>

                {/* category starts */}
              </div>
              {/* Resume ends */}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Body;
