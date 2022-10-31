import { FaSistrix, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import welcomeLogo from "../../../assets/welcomeLogo.png";
import useUserdetailStore from "../../../stores/userDetailStore";
const Header = () => {
  const drawerHandler = useUserdetailStore((state) => state.visibleSwitch);
  const drawerStatus = useUserdetailStore((state) => state.isVisible);
  return (
    <nav className="fixed min-w-[100vw] z-50 top-0 flex items-center p-3 flex-wrap bg-violet-700 sm:bg-white text-white sm:text-black">
      <div className="flex flex-wrap flex-row">
        <button
          className="w-8 mt-2 sm:mt-0"
          onClick={() => {
            drawerHandler(drawerStatus);
            // console.log(drawerStatus);
          }}
        >
          <FaBars size={30} />
        </button>
        <button className="hidden sm:flex">
          <img src={welcomeLogo} className=" ml-4 w-56 lg:w-72" alt="" />
        </button>
      </div>
      <div className="top-nav w-full float-right  sm:inline-flex  sm:flex-grow  sm:w-auto ">
        <div className="flex mt-4 lg:inline-flex lg:flex-row mr-4 sm:ml-auto">
          <button className="hidden sm:flex mr-4 mt-1  ">
            <FaSistrix size={25} />
          </button>
          <button className="-mt-12 sm:mt-0 ml-auto sm:mr-8  ">
            <FaBell size={25} />
          </button>
          <button className="hidden sm:flex">
            <FaUserCircle size={35} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
