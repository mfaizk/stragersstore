import shoes from "../assets/shoe.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CartScreen = () => {
  return (
    <>
      <h1 className="text-4xl ml-32 w-auto  mt-32">CART</h1>
      <div className="flex items-center justify-center ">
        {/* parent section or main section */}
        <div className="flex flex-col sm:flex-row pt-12 items-center justify-center  gap-12 sm:gap-64 ">
          {/* left section */}
          <div className="border  p-8   bg-white rounded ">
            <div className="flex flex-col md:flex-row">
              <img src={shoes} className="w-32" alt="" />

              <h3 className=" font-bold text-xl ml-8 mt-4 ">
                Robust Running shoes
              </h3>
              <p className="flex flex-col text-red-600 font-semibold text-xl ml-8 mt-8">
                ₹5,498 <strike className="text-black text-base">₹7,899</strike>
              </p>
            </div>
            <div className="ml-8 mt-2 ">
              <p className="mt-1 text-stone-500 ">EAN: A100321</p>
              <p className="mt-1 text-stone-500 ">
                Color: The Strangers Black Multicolor
              </p>
              <p className="mt-1 text-stone-500 ">Size: 8</p>
              <button className="flex font-sans font-semibold text-stone-600 border mt-4 p-2">
                {" "}
                8 <MdKeyboardArrowDown className="mt-1 ml-6" size={20} />{" "}
              </button>
              <div className="flex mt-4">
                <button className="ml-2 underline underline-offset-1 text-sm text-stone-800 ">
                  EDIT
                </button>
                <button className="ml-8 underline underline-offset-1 text-sm text-stone-800 ">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className=" border bg-white rounded p-8 ">
            <div className=" bg-stone-100 pb-6 rounded">
              <h2 className="flex font-semibold text-xl p-4 ">
                {" "}
                Apply a promo Code{" "}
                <MdKeyboardArrowUp className="mt-1 ml-44" size={20} />{" "}
              </h2>
              <p className="ml-4 text-stone-600 mt-2">Enter a Promo Code</p>
              <div className="mt-4 ml-4 ">
                <input type="text" className="border h-auto p-2 " />
                <button className="bg-stone-400 p-2 h-auto px-8 text-white font-semibold ">
                  APPLY
                </button>
              </div>
            </div>
            <div className="mt-8">
              <p className="flex w-auto justify-between">
                SubTotal <p className="">₹ 5,498</p>
              </p>
              <p className="mt-2 flex w-auto justify-between">
                Shipping costs <p className="">₹ 0</p>
              </p>
              <p className="mt-2 flex ">
                Grand Total{" "}
                <p className="text-sm mt-2 ml-4 text-stone-400">
                  Prices includes GST
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
