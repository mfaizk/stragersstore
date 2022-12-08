import React from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
// import useCartStore from "../stores/cartStore";
import LoadingScreen from "./LoadingScreen";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
const ProductScreen = () => {
  const { state } = useLocation();
  const [addToFav, setaddToFav] = useState(false);
  //   const item = useCartStore((state) => state.cartData);
  useEffect(() => {
    console.log(state.productImageUrl);
  }, [state]);

  return (
    <>
      {state ? (
        <div className="min-w-full min-h-screen bg-blue-500 flex items-start mt-20 md:mt-0 md:items-center justify-center  ">
          <div className="container flex  justify-between bg-yellow-400 flex-col md:flex-row">
            {/* Primary Image Card Start */}
            <div className="flex md:min-w-[30rem] items-center justify-center  bg-lime-900 p-9">
              <img src={state.productImageUrl[0]} alt="" />
            </div>
            {/* Primary Image Card End */}

            {/* Secondary Card Start */}
            <div className="flex md:min-w-[50%] flex-col  bg-white p-2">
              <div className="flex items-center justify-between bg-green-900">
                <h4 className="text-xl font-light">{state.productName}</h4>
              </div>
              <h5 className="text-sm text-[#a1a4af]">{"Category dummy"}</h5>
              <h4 className="text-xl">₹ {state?.productPrice}</h4>
              <div className="flex items-center justify-between py-2">
                <h4 className="text-sm font-light">Select Size</h4>
                <h4 className="text-sm font-light text-[#800baf]">
                  Size chart
                </h4>
              </div>
              <div className="p-4">size Slider</div>
              <div className="grow flex items-center justify-between gap-5">
                {addToFav ? (
                  <AiFillHeart
                    size={30}
                    color="red"
                    onClick={() => {
                      setaddToFav(!addToFav);
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    size={30}
                    color="red"
                    onClick={() => {
                      setaddToFav(!addToFav);
                    }}
                  />
                )}
                <button className="bg-[#5e0098] grow text-white p-3 rounded-md">
                  Continue
                </button>
              </div>
            </div>
            {/* Secondary Card End */}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default ProductScreen;
