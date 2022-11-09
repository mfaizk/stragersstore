import craft from "../../../assets/craft.png";
import { HiPencil } from "react-icons/hi2";
import {
  MdSpeed,
  MdOutlineSubscriptions,
  MdOutlineLogout,
} from "react-icons/md";
import { FaHome, FaBookOpen } from "react-icons/fa";

import useAuthStore from "../../../stores/authStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useSideBarStateStore from "../../../stores/sideBarStateStore";
import useDataStore from "../../../stores/dataStore";

const SideBar = () => {
  const auth = useAuthStore((state) => state.user);
  const out = useAuthStore((state) => state.signOutHandler);
  const drawerStatus = useSideBarStateStore((state) => state.isVisible);
  const navigate = useNavigate();
  const visibleSwitcher = useSideBarStateStore((state) => state.visibleSwitch);
  const userDetail = useDataStore((state) => state.userDetail);
  const signOut = () => {
    out(navigate);
  };

  useEffect(() => {
    // console.log(drawerStatus);
  }, [drawerStatus]);

  return (
    <>
      <div
        className={` fixed top-0 mt-16 min-w-[60%] sm:min-w-[30%] grow  z-10 flex flex-col border   bg-white bg-opacity-90 p-5 sm:p-10 ${drawerStatus} transition ease-linear duration-150 overflow-auto min-h-full  `}
      >
        <div className=" flex flex-col justify-center sm:items-center items-start mt-8 mb-6">
          <button className="hidden sm:flex w-44 border rounded-full">
            <img src={craft} alt="" />
          </button>
          <h3 className="flex text-3xl font-semibold">
            {userDetail.fName ? userDetail.fName + " " + userDetail.lName : " "}
            {/* Welcome dummy */}
            <button className="ml-4 mt-4">
              <HiPencil size={18} />
            </button>
          </h3>
          <p className="">{auth?.email}</p>
        </div>

        {/* Profile options */}
        <div className="flex flex-col  mt-1 p-2   items-start justify-start  gap-2 ">
          <div
            className="flex mt-2 p-2 hover:bg-[#6d28d9] hover:text-white rounded min-w-[200px] items-center justify-start gap-3"
            onClick={() => {
              visibleSwitcher(drawerStatus);
              navigate(`/home`, { replace: true });

              // redirect("/home");
            }}
          >
            <FaHome className="" />
            <button className=" w-auto font-semibold">Home</button>
          </div>
          <div
            className="flex mt-2 p-2 hover:bg-[#6d28d9] hover:text-white rounded min-w-[200px] items-center justify-start gap-3"
            onClick={() => {
              visibleSwitcher(drawerStatus);

              navigate(`/cart`, { replace: true });

              // redirect("/home");
            }}
          >
            <FaBookOpen className="" />
            <button className=" w-auto font-semibold">Cart</button>
          </div>
          <div className="flex mt-2 p-2 hover:bg-[#6d28d9] hover:text-white rounded min-w-[200px] items-center justify-start gap-3">
            <MdSpeed className="" />
            <button className=" w-auto font-semibold">Test</button>
          </div>
          <div className="flex mt-2 p-2 hover:bg-[#6d28d9] hover:text-white rounded min-w-[200px] items-center justify-start gap-3">
            <MdOutlineSubscriptions className="" />
            <button className=" w-auto font-semibold">Subscribe</button>
          </div>
        </div>
        {/* Logout button div Start */}
        <div className="flex flex-col   p-2   items-start justify-start  gap-2 mt-10">
          <div
            className=" flex  p-2  bg-[#6c28d928] hover:bg-red-500 hover:text-white rounded min-w-[200px] items-center justify-start gap-3  mt-auto "
            onClick={() => {
              visibleSwitcher(drawerStatus);
              signOut();
            }}
          >
            <MdOutlineLogout className="" size={20} />
            <button className=" w-auto font-semibold">Logout</button>
          </div>
        </div>
        {/* Logout button div End */}
      </div>
    </>
  );
};

export default SideBar;
