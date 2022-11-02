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
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const auth = useAuthStore((state) => state.user);
  const out = useAuthStore((state) => state.signOutHandler);
  const userD = useUserdetailStore((state) => state.udetail);
  const setUserD = useUserdetailStore((state) => state.setUserDetail);
  const drawerStatus = useUserdetailStore((state) => state.isVisible);
  const navigate = useNavigate();
  const visibleSwitcher = useUserdetailStore((state) => state.visibleSwitch);
  const signOut = () => {
    out(navigate);
    setUserD({});
  };

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
            {userD.fName ? userD.fName + " " + userD.lName : " "}
            <button className="ml-4 mt-4">
              <HiPencil size={18} />
            </button>
          </h3>
          <p className="">{auth?.email}</p>
        </div>

        {/* Profile options */}
        <div className="flex flex-col  mt-1 p-2   items-start justify-start  gap-2 min-h-[400px]">
          <div
            className="flex mt-2 p-2 hover:bg-[#6d28d9] hover:text-white rounded min-w-[200px] items-center justify-start gap-3"
            onClick={() => {
              visibleSwitcher();
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
              visibleSwitcher();

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
          <div
            className=" flex  p-2 hover:bg-red-500 hover:text-white rounded min-w-[200px] items-center justify-start gap-3  mt-auto"
            onClick={() => {
              signOut();
            }}
          >
            <MdOutlineLogout className="" size={20} />
            <button className=" w-auto font-semibold">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
