import craft from "../../../assets/craft.png";
import { HiPencil } from "react-icons/hi2";
import {
  MdSpeed,
  MdOutlineSubscriptions,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHome, FaBookOpen } from "react-icons/fa";

import useAuthStore from "../../../stores/authStore";
import useUserdetailStore from "../../../stores/userDetailStore";

const SideBar = () => {
  const auth = useAuthStore((state) => state.user);
  const out = useAuthStore((state) => state.signOutHandler);
  const userD = useUserdetailStore((state) => state.udetail);
  const setUserD = useUserdetailStore((state) => state.setUserDetail);

  const signOut = () => {
    out();
    setUserD({});
  };

  return (
    <div>
      <div className="absolute  lg:w-96 z-10 flex flex-col border h-screen bg-white">
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
              <button className="ml-8 mt-1 w-auto font-semibold">Home</button>
            </div>
            <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
              <FaBookOpen className="mt-4" />
              <button className="ml-8 mt-2 w-auto font-semibold">
                Syllabus
              </button>
            </div>
            <div className="flex mt-2 p-2 hover:bg-violet-200 rounded">
              <MdSpeed className="mt-4" />
              <button className="mt-2 ml-8 w-auto font-semibold">Test</button>
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
  );
};

export default SideBar;
