import { FaSistrix, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import welcomeLogo from "../../../assets/asset-xl/logo-xl.png";
import useSideBarStateStore from "../../../stores/sideBarStateStore";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCartStore from "../../../stores/cartStore";
const Header = () => {
  const drawerHandler = useSideBarStateStore((state) => state.visibleSwitch);
  const drawerStatus = useSideBarStateStore((state) => state.isVisible);
  const cardData = useCartStore((state) => state.cartData);

  return (
    // bg-violet-700 sm:bg-white
    <nav className=" fixed min-w-[100vw] z-50 top-0 flex items-center p-3 flex-nowrap text-white sm:text-black backdrop-blur-sm bg-[#11111134]">
      <div className="flex flex-wrap flex-row">
        <button
          className="w-8 mt-2 sm:mt-0 "
          onClick={() => {
            drawerHandler(drawerStatus);
            // console.log(drawerStatus);
          }}
        >
          <FaBars size={30} />
        </button>
        <button className="hidden sm:flex">
          <img src={welcomeLogo} className=" ml-4 w-56 lg:w-72 " alt="" />
        </button>
      </div>
      <div className="top-nav w-full float-right  sm:inline-flex  sm:flex-grow  sm:w-auto flex justify-end items-end">
        <div className="flex mt-4 lg:inline-flex lg:flex-row mr-4 sm:ml-auto gap-7 items-center">
          <button className="hidden sm:flex  ">
            <FaSistrix size={25} />
          </button>
          <button className=" ">
            <FaBell size={25} />
          </button>

          <button>
            {cardData && cardData.length === 0 ? (
              <></>
            ) : (
              <div className="bg-[#5b21b6] h-4 w-4 absolute z-30 rounded-3xl flex justify-center items-center text-white">
                {cardData.length}
              </div>
            )}

            <AiOutlineShoppingCart size={35} className="rotate-[360deg]" />
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
